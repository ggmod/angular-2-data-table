import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTable} from './components/table.component';
import { DataTableColumn } from './components/column.component';
import { DataTableRow } from './components/row.component';
import { DataTablePagination } from './components/pagination.component';
import { DataTableHeader } from './components/header.component';

import { PixelConverter } from './utils/px';
import { Hide } from './utils/hide';
import { MinPipe } from './utils/min';
import { DataTableTranslations } from './types/data-table-translations.type';
import { CellCallback } from './types/cell-callback.type';
import { RowCallback } from './types/row-callback.type';
import { DataTableParams } from './types/data-table-params.type';
import { defaultTranslations } from './types/default-translations.type';
export * from './tools/data-table-resource';
export { DataTable, DataTableColumn, DataTableRow, DataTablePagination,
          DataTableHeader, DataTableTranslations, CellCallback, RowCallback, DataTableParams, defaultTranslations};
export const DATA_TABLE_DIRECTIVES = [ DataTable, DataTableColumn ];


@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
        DataTable, DataTableColumn,
        DataTableRow, DataTablePagination, DataTableHeader,
        PixelConverter, Hide, MinPipe
    ],
    exports: [ DataTable, DataTableColumn ]
})
export class DataTableModule { }
