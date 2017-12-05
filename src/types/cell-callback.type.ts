import { DataTableRow } from '../components/row.component';
import { DataTableColumn } from '../components/column.component';

export type CellCallback = (item: any, row: DataTableRow, column: DataTableColumn, index: number) => string;
