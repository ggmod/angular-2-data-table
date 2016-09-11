import { Component, Inject, forwardRef } from '@angular/core';
import { DataTable } from './table.component';
import { HEADER_TEMPLATE } from './header.template';
import { HEADER_STYLE } from "./header.style";


@Component({
  selector: 'data-table-header',
  template: HEADER_TEMPLATE,
  styles: [HEADER_STYLE],
  host: {
    '(document:click)': '_closeSelector()'
  }
})
export class DataTableHeader {

    columnSelectorOpen = false;

    _closeSelector() {
        this.columnSelectorOpen = false;
    }

    constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable) {}
}
