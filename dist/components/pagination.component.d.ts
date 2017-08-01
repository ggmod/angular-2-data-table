import { DataTable } from './table.component';
export declare class DataTablePagination {
    dataTable: DataTable;
    constructor(dataTable: DataTable);
    pageBack(): void;
    pageForward(): void;
    pageFirst(): void;
    pageLast(): void;
    readonly maxPage: number;
    limit: number;
    page: number;
}
