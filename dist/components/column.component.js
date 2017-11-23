"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableColumn = (function () {
    function DataTableColumn() {
        this.sortable = false;
        this.resizable = false;
        this.visible = true;
        this.styleClassObject = {}; // for [ngClass]
    }
    DataTableColumn.prototype.getCellColor = function (row, index) {
        if (this.cellColors !== undefined) {
            return this.cellColors(row.item, row, this, index);
        }
    };
    DataTableColumn.prototype.ngOnInit = function () {
        this._initCellClass();
    };
    DataTableColumn.prototype._initCellClass = function () {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            }
            else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }
        if (this.styleClass != null) {
            this.styleClassObject = (_a = {},
                _a[this.styleClass] = true,
                _a);
        }
        var _a;
    };
    return DataTableColumn;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTableColumn.prototype, "header", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTableColumn.prototype, "sortable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTableColumn.prototype, "resizable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTableColumn.prototype, "property", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTableColumn.prototype, "styleClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], DataTableColumn.prototype, "cellColors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTableColumn.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTableColumn.prototype, "visible", void 0);
__decorate([
    core_1.ContentChild('dataTableCell'),
    __metadata("design:type", Object)
], DataTableColumn.prototype, "cellTemplate", void 0);
__decorate([
    core_1.ContentChild('dataTableHeader'),
    __metadata("design:type", Object)
], DataTableColumn.prototype, "headerTemplate", void 0);
DataTableColumn = __decorate([
    core_1.Directive({
        selector: 'data-table-column'
    })
], DataTableColumn);
exports.DataTableColumn = DataTableColumn;
//# sourceMappingURL=/components/column.component.js.map