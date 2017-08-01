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
var header_template_1 = require("./header.template");
var header_style_1 = require("./header.style");
var DataTableHeader = (function () {
    function DataTableHeader(dataTable) {
        this.dataTable = dataTable;
        this.columnSelectorOpen = false;
    }
    DataTableHeader.prototype._closeSelector = function () {
        this.columnSelectorOpen = false;
    };
    return DataTableHeader;
}());
DataTableHeader = __decorate([
    core_1.Component({
        selector: 'data-table-header',
        template: header_template_1.HEADER_TEMPLATE,
        styles: [header_style_1.HEADER_STYLE],
        host: {
            '(document:click)': '_closeSelector()'
        }
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return table_component_1.DataTable; }))),
    __metadata("design:paramtypes", [table_component_1.DataTable])
], DataTableHeader);
exports.DataTableHeader = DataTableHeader;
//# sourceMappingURL=/components/header.component.js.map