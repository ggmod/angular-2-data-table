import { EventEmitter, OnDestroy } from '@angular/core';
import { DataTable } from './table.component';
export declare class DataTableRow implements OnDestroy {
    dataTable: DataTable;
    item: any;
    index: number;
    rowClicked: EventEmitter<any>;
    rowDoubleClicked: EventEmitter<any>;
    expanded: boolean;
    private _selected;
    selectedChange: EventEmitter<{}>;
    selected: boolean;
    onRowClicked(row: any, event: any): void;
    onRowDoubleClicked(row: any, event: any): void;
    readonly displayIndex: number;
    getTooltip(): string;
    constructor(dataTable: DataTable);
    ngOnDestroy(): void;
    readonly _this: this;
}
