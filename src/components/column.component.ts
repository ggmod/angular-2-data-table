import { Directive, Input, ContentChild, OnInit } from '@angular/core';
import { DataTableRow } from './row.component';
import { CellCallback, DataTableSortCallback } from './types';


@Directive({
    selector: 'data-table-column'
})
export class DataTableColumn implements OnInit {

    // init:
    @Input() header: string;
    @Input() sortable = false;
    @Input() resizable = false;
    @Input() property: string;
    @Input() styleClass: string;
    @Input() cellColors: CellCallback;
    @Input() customSort: DataTableSortCallback;

    // init and state:
    @Input() width: number | string;
    @Input() visible = true;

    @ContentChild('dataTableCell') cellTemplate: any;
    @ContentChild('dataTableHeader') headerTemplate: any;

    getCellColor(row: DataTableRow, index: number) {
        if (this.cellColors !== undefined) {
            return (<CellCallback>this.cellColors)(row.item, row, this, index);
        }
    }

    private styleClassObject = {}; // for [ngClass]

    ngOnInit() {
        this._initCellClass();
    }

    private _initCellClass() {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            } else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }

        if (this.styleClass != null) {
            this.styleClassObject = {
                [this.styleClass]: true
            };
        }
    }
}