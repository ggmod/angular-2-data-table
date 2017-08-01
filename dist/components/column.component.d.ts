import { OnInit } from '@angular/core';
import { DataTableRow } from './row.component';
import { CellCallback } from '../types/cell-callback.type';
export declare class DataTableColumn implements OnInit {
    header: string;
    sortable: boolean;
    resizable: boolean;
    property: string;
    styleClass: string;
    cellColors: CellCallback;
    width: number | string;
    visible: boolean;
    cellTemplate: any;
    headerTemplate: any;
    getCellColor(row: DataTableRow, index: number): string;
    private styleClassObject;
    ngOnInit(): void;
    private _initCellClass();
}
