import { DataTable } from './table.component';
export declare class DataTablePagination {
    dataTable: DataTable;
    show_range: boolean;
    show_limit: boolean;
    show_input: boolean;
    show_numbers: boolean;
    constructor(dataTable: DataTable);
    pageBack(): void;
    pageForward(): void;
    pageFirst(): void;
    pageLast(): void;
    readonly maxPage: number;
    limit: number;
    page: number;
    hasPrevious(number: any, page: any): boolean;
    hasNext(number: any, page: any): boolean;
    getDifference(): number;
    createPageRange(number: any, page: any): any[];
}
