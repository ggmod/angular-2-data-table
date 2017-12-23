export const TABLE_TEMPLATE = `
<div class="data-table-wrapper">
    <data-table-header *ngIf="header"></data-table-header>

    <div class="data-table-box">
        <table class="table table-condensed table-bordered data-table">
            <thead>
                <tr>
                    <th scope="col" [hide]="!expandColumnVisible" class="expand-column-header">
                    <th scope="col" [hide]="!indexColumnVisible" class="index-column-header">
                        <span [textContent]="indexColumnHeader"></span>
                    </th>
                    <th scope="col" [hide]="!selectColumnVisible" class="select-column-header">
                        <input [hide]="!multiSelect" type="checkbox" [(ngModel)]="selectAllCheckbox" [attr.aria-label]="translations.selectAllRows" />
                    </th>
                    <th scope="col" *ngFor="let column of columns" #th [hide]="!column.visible" 
                    	  (click)="headerClicked(column, $event)" 
                    	  (keydown.enter)="headerClicked(column, $event)" (keydown.space)="headerClicked(column, $event)"
                        [class.sortable]="column.sortable" [class.resizable]="column.resizable"
                        [ngClass]="column.styleClassObject" class="column-header" [style.width]="column.width | px"
                        [attr.aria-sort]="column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null"
                        [attr.tabindex]="column.sortable ? '0' : null">
                        <span *ngIf="!column.headerTemplate" [textContent]="column.header"></span>
                        <span *ngIf="column.headerTemplate" [ngTemplateOutlet]="column.headerTemplate" [ngOutletContext]="{column: column}"></span>
                        <span class="column-sort-icon" *ngIf="column.sortable">
                            <span class="glyphicon glyphicon-sort column-sortable-icon" [hide]="column.property === sortBy"></span>
                            <span [hide]="column.property !== sortBy">
                                 <span class="glyphicon" [ngClass]="{'glyphicon-triangle-top': !sortAsc, 'glyphicon-triangle-bottom': sortAsc}"></span>
                            </span>
                        </span>
                        <span *ngIf="column.resizable" class="column-resize-handle" (mousedown)="resizeColumnStart($event, column, th)"></span>
                    </th>
                </tr>
            </thead>
            <tbody *ngFor="let item of items; let index=index" class="data-table-row-wrapper"
                   dataTableRow #row [item]="item" [index]="index" (selectedChange)="onRowSelectChanged(row)">
            </tbody>
            <tbody *ngIf="itemCount === 0 && noDataMessage">
                <tr>
                    <td [attr.colspan]="columnCount">{{ noDataMessage }}</td>
                </tr>
            </tbody>
            <tbody class="substitute-rows" *ngIf="pagination && substituteRows">
                <tr *ngFor="let item of substituteItems, let index = index"
                    [class.row-odd]="(index + items.length) % 2 === 0"
                    [class.row-even]="(index + items.length) % 2 === 1"
                    >
                    <td [hide]="!expandColumnVisible"></td>
                    <td [hide]="!indexColumnVisible">&nbsp;</td>
                    <td [hide]="!selectColumnVisible"></td>
                    <td *ngFor="let column of columns" [hide]="!column.visible">
                </tr>
            </tbody>
        </table>
        <div class="loading-cover" *ngIf="showReloading && reloading"></div>
    </div>

    <data-table-pagination
        *ngIf="pagination"
        [show_range]="pagination_range"
        [show_limit]="pagination_limit"
        [show_input]="pagination_input"
        [show_numbers]="pagination_numbers"></data-table-pagination>
</div>
`;
