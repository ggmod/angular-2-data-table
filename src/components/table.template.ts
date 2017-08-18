export const TABLE_TEMPLATE = `
<div class="data-table-wrapper">
    <data-table-header *ngIf="header"></data-table-header>

    <div class="data-table-box">
        <table class="table table-condensed data-table">
            <thead>
                <tr>
                    <th [hide]="!expandColumnVisible" class="expand-column-header">
                    <th [hide]="!indexColumnVisible" class="index-column-header">
                        <span [textContent]="indexColumnHeader"></span>
                    </th>
                    <th [hide]="!selectColumnVisible" class="select-column-header">
                        <input [hide]="!multiSelect" type="checkbox" [(ngModel)]="selectAllCheckbox"/>
                    </th>
                    <th *ngFor="let column of columns" #th [hide]="!column.visible" (click)="headerClicked(column, $event)"
                        [class.sortable]="column.sortable" [class.resizable]="column.resizable"
                        [ngClass]="column.styleClassObject" class="column-header" [style.width]="column.width | px">
                        <span *ngIf="!column.headerTemplate" [textContent]="column.header"></span>
                        <span *ngIf="column.headerTemplate" [ngTemplateOutlet]="column.headerTemplate" [ngOutletContext]="{column: column}"></span>
                        <span class="column-sort-icon" *ngIf="column.sortable">
                           <i class="fa fa-sort column-sortable-icon" [hide]="column.property === sortBy"></i>
                            <span [hide]="column.property !== sortBy">
                                <i class="fa fa-sort-asc"  [hide]="sortAsc"></i>
								<i class="fa fa-sort-desc"  [hide]="!sortAsc"></i>
                            </span>
                        </span>
                        <span *ngIf="column.resizable" class="column-resize-handle" (mousedown)="resizeColumnStart($event, column, th)"></span>
                    </th>
                </tr>
            </thead>
            <tbody *ngFor="let item of items; let index=index" class="data-table-row-wrapper"
                   dataTableRow #row [item]="item" [index]="index" (selectedChange)="onRowSelectChanged(row)">
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

    <data-table-pagination *ngIf="pagination"></data-table-pagination>
</div>
`;
