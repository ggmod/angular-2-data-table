export const PAGINATION_TEMPLATE = `
<div class="pagination-box">
    <div class="pagination-range">
        {{dataTable.translations.paginationRange}}:
        <span [textContent]="dataTable.offset + 1"></span>
        -
        <span [textContent]="[dataTable.offset + dataTable.limit , dataTable.itemCount] | min"></span>
        /
        <span [textContent]="dataTable.itemCount"></span>
    </div>
    <div class="pagination-controllers">
        <div class="pagination-limit">
            <div class="input-group">
                <span class="input-group-addon">{{dataTable.translations.paginationLimit}}:</span>
                <input #limitInput type="number" class="form-control" min="1" step="1"
                       [ngModel]="limit" (blur)="limit = limitInput.value"
                       (keyup.enter)="limit = limitInput.value" (keyup.esc)="limitInput.value = limit"/>
            </div>
        </div>
        <div class=" pagination-pages">
            <button [disabled]="dataTable.offset <= 0" (click)="pageFirst()" class="btn btn-default pagination-firstpage">&laquo;</button>
            <button [disabled]="dataTable.offset <= 0" (click)="pageBack()" class="btn btn-default pagination-prevpage">&lsaquo;</button>
            <div class="pagination-page">
                <div class="input-group">
                    <input #pageInput type="number" class="form-control" min="1" step="1" max="{{maxPage}}"
                           [ngModel]="page" (blur)="page = pageInput.value"
                           (keyup.enter)="page = pageInput.value" (keyup.esc)="pageInput.value = page"/>
                    <div class="input-group-addon">
                        <span>/</span>
                        <span [textContent]="dataTable.lastPage"></span>
                    </div>
                </div>
            </div>
            <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount" (click)="pageForward()" class="btn btn-default pagination-nextpage">&rsaquo;</button>
            <button [disabled]="(dataTable.offset + dataTable.limit) >= dataTable.itemCount" (click)="pageLast()" class="btn btn-default pagination-lastpage">&raquo;</button>
        </div>
    </div>
</div>
`;