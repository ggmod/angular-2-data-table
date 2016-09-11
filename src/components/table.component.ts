import {
    Component, Input, Output, EventEmitter, ContentChildren, QueryList,
    TemplateRef, ContentChild, ViewChildren, OnInit
} from '@angular/core';
import { DataTableColumn } from './column.component';
import { DataTableRow } from './row.component';
import { DataTableParams } from './types';
import { PixelConverter } from '../utils/px';
import { RowCallback } from './types';
import { DataTableTranslations, defaultTranslations } from './types';
import { drag } from '../utils/drag';
import { TABLE_TEMPLATE } from './table.template';
import { TABLE_STYLE } from "./table.style";



@Component({
  selector: 'data-table',
  template: TABLE_TEMPLATE,
  styles: [TABLE_STYLE]
})
export class DataTable implements DataTableParams, OnInit {

    private _items: any[] = [];

    @Input() get items() {
        return this._items;
    }

    set items(items: any[]) {
        this._items = items;
        this._onReloadFinished();
    }

    @Input() itemCount: number;

    // UI components:

    @ContentChildren(DataTableColumn) columns: QueryList<DataTableColumn>;
    @ViewChildren(DataTableRow) rows: QueryList<DataTableRow>;
    @ContentChild('dataTableExpand') expandTemplate: TemplateRef<any>;

    // One-time optional bindings with default values:

    @Input() headerTitle: string;
    @Input() header = true;
    @Input() pagination = true;
    @Input() indexColumn = true;
    @Input() indexColumnHeader = '';
    @Input() rowColors: RowCallback;
    @Input() rowTooltip: RowCallback;
    @Input() selectColumn = false;
    @Input() multiSelect = true;
    @Input() substituteRows = true;
    @Input() expandableRows = false;
    @Input() translations: DataTableTranslations = defaultTranslations;
    @Input() selectOnRowClick = false;
    @Input() autoReload = true;
    @Input() showReloading = false;

    // UI state without input:

    indexColumnVisible: boolean;
    selectColumnVisible: boolean;
    expandColumnVisible: boolean;

    // UI state: visible ge/set for the outside with @Input for one-time initial values

    private _sortBy: string;
    private _sortAsc = true;

    private _offset = 0;
    private _limit = 10;

    @Input()
    get sortBy() {
        return this._sortBy;
    }

    set sortBy(value) {
        this._sortBy = value;
        this._triggerReload();
    }

    @Input()
    get sortAsc() {
        return this._sortAsc;
    }

    set sortAsc(value) {
        this._sortAsc = value;
        this._triggerReload();
    }

    @Input()
    get offset() {
        return this._offset;
    }

    set offset(value) {
        this._offset = value;
        this._triggerReload();
    }

    @Input()
    get limit() {
        return this._limit;
    }

    set limit(value) {
        this._limit = value;
        this._triggerReload();
    }

    // calculated property:

    @Input()
    get page() {
        return Math.floor(this.offset / this.limit) + 1;
    }

    set page(value) {
        this.offset = (value - 1) * this.limit;
    }

    get lastPage() {
        return Math.ceil(this.itemCount / this.limit);
    }

    // setting multiple observable properties simultaneously

    sort(sortBy: string, asc: boolean) {
        this.sortBy = sortBy;
        this.sortAsc = asc;
    }

    // init

    ngOnInit() {
        this._initDefaultValues();
        this._initDefaultClickEvents();
        this._updateDisplayParams();

        if (this.autoReload && this._scheduledReload == null) {
            this.reloadItems();
        }
    }

    private _initDefaultValues() {
        this.indexColumnVisible = this.indexColumn;
        this.selectColumnVisible = this.selectColumn;
        this.expandColumnVisible = this.expandableRows;
    }

    private _initDefaultClickEvents() {
        this.headerClick.subscribe(tableEvent => this.sortColumn(tableEvent.column));
        if (this.selectOnRowClick) {
            this.rowClick.subscribe(tableEvent => tableEvent.row.selected = !tableEvent.row.selected);
        }
    }

    // Reloading:

    _reloading = false;

    get reloading() {
        return this._reloading;
    }

    @Output() reload = new EventEmitter();

    reloadItems() {
        this._reloading = true;
        this.reload.emit(this._getRemoteParameters());
    }

    private _onReloadFinished() {
        this._updateDisplayParams();

        this._selectAllCheckbox = false;
        this._reloading = false;
    }

    _displayParams = <DataTableParams>{}; // params of the last finished reload

    get displayParams() {
        return this._displayParams;
    }

    _updateDisplayParams() {
        this._displayParams = {
            sortBy: this.sortBy,
            sortAsc: this.sortAsc,
            offset: this.offset,
            limit: this.limit
        };
    }

    _scheduledReload = null;

    // for avoiding cascading reloads if multiple params are set at once:
    _triggerReload() {
        if (this._scheduledReload) {
            clearTimeout(this._scheduledReload);
        }
        this._scheduledReload = setTimeout(() => {
            this.reloadItems();
        });
    }

    // event handlers:

    @Output() rowClick = new EventEmitter();
    @Output() rowDoubleClick = new EventEmitter();
    @Output() headerClick = new EventEmitter();
    @Output() cellClick = new EventEmitter();

    private rowClicked(row: DataTableRow, event) {
        this.rowClick.emit({ row, event });
    }

    private rowDoubleClicked(row: DataTableRow, event) {
        this.rowDoubleClick.emit({ row, event });
    }

    private headerClicked(column: DataTableColumn, event: MouseEvent) {
        if (!this._resizeInProgress) {
            this.headerClick.emit({ column, event });
        } else {
            this._resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
        }
    }

    private cellClicked(column: DataTableColumn, row: DataTableRow, event: MouseEvent) {
        this.cellClick.emit({ row, column, event });
    }

    // functions:

    private _getRemoteParameters(): DataTableParams {
        let params = <DataTableParams>{};

        if (this.sortBy) {
            params.sortBy = this.sortBy;
            params.sortAsc = this.sortAsc;
        }
        if (this.pagination) {
            params.offset = this.offset;
            params.limit = this.limit;
        }
        return params;
    }

    private sortColumn(column: DataTableColumn) {
        if (column.sortable) {
            let ascending = this.sortBy === column.property ? !this.sortAsc : true;
            this.sort(column.property, ascending);
        }
    }

    get columnCount() {
        let count = 0;
        count += this.indexColumnVisible ? 1 : 0;
        count += this.selectColumnVisible ? 1 : 0;
        count += this.expandColumnVisible ? 1 : 0;
        this.columns.toArray().forEach(column => {
            count += column.visible ? 1 : 0;
        });
        return count;
    }

    private getRowColor(item: any, index: number, row: DataTableRow) {
        if (this.rowColors !== undefined) {
            return (<RowCallback>this.rowColors)(item, row, index);
        }
    }

    // selection:

    selectedRow: DataTableRow;
    selectedRows: DataTableRow[] = [];

    private _selectAllCheckbox = false;

    get selectAllCheckbox() {
        return this._selectAllCheckbox;
    }

    set selectAllCheckbox(value) {
        this._selectAllCheckbox = value;
        this._onSelectAllChanged(value);
    }

    private _onSelectAllChanged(value) {
        this.rows.toArray().forEach(row => row.selected = value);
    }

    onRowSelectChanged(row: DataTableRow) {

        // maintain the selectedRow(s) view
        if (this.multiSelect) {
            let index = this.selectedRows.indexOf(row);
            if (row.selected && index < 0) {
                this.selectedRows.push(row);
            } else if (!row.selected && index >= 0) {
                this.selectedRows.splice(index, 1);
            }
        } else {
            if (row.selected) {
                this.selectedRow = row;
            } else if (this.selectedRow === row) {
                this.selectedRow = undefined;
            }
        }

        // unselect all other rows:
        if (row.selected && !this.multiSelect) {
            this.rows.toArray().filter(row_ => row_.selected).forEach(row_ => {
                if (row_ !== row) { // avoid endless loop
                    row_.selected = false;
                }
            });
        }
    }

    // other:

    get substituteItems() {
        return Array.from({ length: this.displayParams.limit - this.items.length });
    }

    // column resizing:

    private _resizeInProgress = false;

    private resizeColumnStart(event: MouseEvent, column: DataTableColumn, columnElement: HTMLElement) {
        this._resizeInProgress = true;

        drag(event, {
            move: (moveEvent: MouseEvent, dx) => {
                if (this._isResizeInLimit(columnElement, dx)) {
                    column.width = columnElement.offsetWidth + dx;
                }
            },
        });
    }

    resizeLimit = 30;

    private _isResizeInLimit(columnElement: HTMLElement, dx: number) {
        /* This is needed because CSS min-width didn't work on table-layout: fixed.
         Without the limits, resizing can make the next column disappear completely,
         and even increase the table width. The current implementation suffers from the fact,
         that offsetWidth sometimes contains out-of-date values. */
        if ((dx < 0 && (columnElement.offsetWidth + dx) <= this.resizeLimit) ||
            !columnElement.nextElementSibling || // resizing doesn't make sense for the last visible column
            (dx >= 0 && ((<HTMLElement> columnElement.nextElementSibling).offsetWidth + dx) <= this.resizeLimit)) {
            return false;
        }
        return true;
    }
}
