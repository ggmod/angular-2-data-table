export const ROW_TEMPLATE = `
<tr	class="data-table-row"
    [title]="getTooltip()"
    [style.background-color]="dataTable.getRowColor(item, index, _this)"
    [class.row-odd]="index % 2 === 0"
    [class.row-even]="index % 2 === 1"
    [class.selected]="selected"
    [class.clickable]="dataTable.selectOnRowClick"
    (dblclick)="dataTable.rowDoubleClicked(_this, $event)"
    (click)="dataTable.rowClicked(_this, $event)"
    >
    <td [hide]="!dataTable.expandColumnVisible" (click)="expanded = !expanded; $event.stopPropagation()" class="row-expand-button">
        <span class="glyphicon glyphicon-triangle-right" [hide]="expanded"></span>
        <span class="glyphicon glyphicon-triangle-bottom" [hide]="!expanded"></span>
    </td>
    <td [hide]="!dataTable.indexColumnVisible" class="index-column" [textContent]="displayIndex"></td>
    <td [hide]="!dataTable.selectColumnVisible" class="select-column">
        <input type="checkbox" [(ngModel)]="selected"/>
    </td>
    <td *ngFor="let column of dataTable.columns" [hide]="!column.visible" [ngClass]="column.styleClassObject" class="data-column"
        [style.background-color]="column.getCellColor(_this, index)">
        <div *ngIf="!column.cellTemplate" [textContent]="item[column.property]"></div>
        <div *ngIf="column.cellTemplate" [ngTemplateOutlet]="column.cellTemplate" [ngOutletContext]="{column: column, row: _this, item: item}"></div>
    </td>
</tr>
<tr *ngIf="dataTable.expandableRows" [hide]="!expanded" class="row-expansion">
    <td [attr.colspan]="dataTable.columnCount">
        <div [ngTemplateOutlet]="dataTable.expandTemplate" [ngOutletContext]="{row: _this, item: item}"></div>
    </td>
</tr>
`;