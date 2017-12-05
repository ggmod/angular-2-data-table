import { DataTable } from './components/table.component';
import { DataTableColumn } from './components/column.component';
import { DataTableRow } from './components/row.component';
import { DataTablePagination } from './components/pagination.component';
import { DataTableHeader } from './components/header.component';
import { DataTableTranslations } from './types/data-table-translations.type';
import { CellCallback } from './types/cell-callback.type';
import { RowCallback } from './types/row-callback.type';
import { DataTableParams } from './types/data-table-params.type';
import { defaultTranslations } from './types/default-translations.type';
export * from './tools/data-table-resource';
export { DataTable, DataTableColumn, DataTableRow, DataTablePagination, DataTableHeader, DataTableTranslations, CellCallback, RowCallback, DataTableParams, defaultTranslations };
export declare const DATA_TABLE_DIRECTIVES: (typeof DataTable | typeof DataTableColumn)[];
export declare class DataTableModule {
}
