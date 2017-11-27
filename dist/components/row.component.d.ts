import { EventEmitter, OnDestroy } from '@angular/core';
import { DataTable } from './table.component';
export declare class DataTableRow implements OnDestroy {
    dataTable: DataTable;
    item: any;
    index: number;
    expanded: boolean;
    private _selected;
    selectedChange: EventEmitter<{}>;
    selected: boolean;
    readonly displayIndex: number;
    getTooltip(): string;
    constructor(dataTable: DataTable);
    ngOnDestroy(): void;
    private _this;
}
