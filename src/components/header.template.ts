export const HEADER_TEMPLATE = `
<div class="data-table-header">
    <h4 class="title" [textContent]="dataTable.headerTitle"></h4>
    <div class="button-panel">
        <button type="button" class="btn btn-default btn-sm refresh-button"
            (click)="dataTable.reloadItems()">
            <span class="glyphicon glyphicon-refresh"></span>
        </button>
        <button type="button" class="btn btn-default btn-sm column-selector-button" [class.active]="columnSelectorOpen"
            (click)="columnSelectorOpen = !columnSelectorOpen; $event.stopPropagation()" >
            <span class="glyphicon glyphicon-list"></span>
        </button>
        <div class="column-selector-wrapper" (click)="$event.stopPropagation()">
            <div *ngIf="columnSelectorOpen" class="column-selector-box panel panel-default">
                <div *ngIf="dataTable.expandableRows" class="column-selector-fixed-column checkbox">
                    <label>
                        <input type="checkbox" [(ngModel)]="dataTable.expandColumnVisible"/>
                        <span>{{dataTable.translations.expandColumn}}</span>
                    </label>
                </div>
                <div *ngIf="dataTable.indexColumn" class="column-selector-fixed-column checkbox">
                    <label>
                        <input type="checkbox" [(ngModel)]="dataTable.indexColumnVisible"/>
                        <span>{{dataTable.translations.indexColumn}}</span>
                    </label>
                </div>
                <div *ngIf="dataTable.selectColumn" class="column-selector-fixed-column checkbox">
                    <label>
                        <input type="checkbox" [(ngModel)]="dataTable.selectColumnVisible"/>
                        <span>{{dataTable.translations.selectColumn}}</span>
                    </label>
                </div>
                <div *ngFor="let column of dataTable.columns" class="column-selector-column checkbox">
                    <label>
                        <input type="checkbox" [(ngModel)]="column.visible"/>
                        <span [textContent]="column.header"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
`;