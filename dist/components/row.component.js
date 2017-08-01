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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var table_component_1 = require("./table.component");
var row_template_1 = require("./row.template");
var row_style_1 = require("./row.style");
var DataTableRow = (function () {
    function DataTableRow(dataTable) {
        this.dataTable = dataTable;
        this.selectedChange = new core_1.EventEmitter();
        this._this = this; // FIXME is there no template keyword for this in angular 2?
    }
    Object.defineProperty(DataTableRow.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            this._selected = selected;
            this.selectedChange.emit(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableRow.prototype, "displayIndex", {
        // other:
        get: function () {
            if (this.dataTable.pagination) {
                return this.dataTable.displayParams.offset + this.index + 1;
            }
            else {
                return this.index + 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    DataTableRow.prototype.getTooltip = function () {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    };
    DataTableRow.prototype.ngOnDestroy = function () {
        this.selected = false;
    };
    return DataTableRow;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTableRow.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTableRow.prototype, "index", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DataTableRow.prototype, "selectedChange", void 0);
DataTableRow = __decorate([
    core_1.Component({
        selector: '[dataTableRow]',
        template: row_template_1.ROW_TEMPLATE,
        styles: [row_style_1.ROW_STYLE]
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return table_component_1.DataTable; }))),
    __metadata("design:paramtypes", [table_component_1.DataTable])
], DataTableRow);
exports.DataTableRow = DataTableRow;
//# sourceMappingURL=/components/row.component.js.map