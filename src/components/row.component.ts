import {
    Component, Input, Inject, forwardRef, Output, EventEmitter, OnDestroy
} from '@angular/core';
import { DataTable } from './table.component';
import { ROW_TEMPLATE } from './row.template';
import { ROW_STYLE } from "./row.style";


@Component({
    selector: '[dataTableRow]',
    template: ROW_TEMPLATE,
    styles: [ROW_STYLE]
})
export class DataTableRow implements OnDestroy {

    @Input() item: any;
    @Input() index: number;

    expanded: boolean;

    // row selection:

    private _selected: boolean;

    @Output() selectedChange = new EventEmitter();

    get selected() {
        return this._selected;
    }

    set selected(selected) {
        this._selected = selected;
        this.selectedChange.emit(selected);
    }

    // other:

    get displayIndex() {
        if (this.dataTable.pagination) {
            return this.dataTable.displayParams.offset + this.index + 1;
        } else {
            return this.index + 1;
        }
    }

    getTooltip() {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    }

    constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable) {}

    ngOnDestroy() {
        this.selected = false;
    }

    private _this = this; // FIXME is there no template keyword for this in angular 2?
}
