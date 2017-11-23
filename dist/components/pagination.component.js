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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var table_component_1 = require("./table.component");
var pagination_template_1 = require("./pagination.template");
var pagination_style_1 = require("./pagination.style");
var DataTablePagination = (function () {
    function DataTablePagination(dataTable) {
        this.dataTable = dataTable;
        this.show_range = false;
        this.show_limit = false;
        this.show_input = false;
        this.show_numbers = true;
    }
    DataTablePagination.prototype.pageBack = function () {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
    };
    DataTablePagination.prototype.pageForward = function () {
        this.dataTable.offset += this.dataTable.limit;
    };
    DataTablePagination.prototype.pageFirst = function () {
        this.dataTable.offset = 0;
    };
    DataTablePagination.prototype.pageLast = function () {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
    };
    Object.defineProperty(DataTablePagination.prototype, "maxPage", {
        get: function () {
            return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagination.prototype, "limit", {
        get: function () {
            return this.dataTable.limit;
        },
        set: function (value) {
            this.dataTable.limit = Number(value); // TODO better way to handle that value of number <input> is string?
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagination.prototype, "page", {
        get: function () {
            return this.dataTable.page;
        },
        set: function (value) {
            this.dataTable.page = Number(value);
        },
        enumerable: true,
        configurable: true
    });
    DataTablePagination.prototype.hasPrevious = function (number, page) {
        var difference = this.getDifference();
        if ((page - difference) > 1) {
            return true;
        }
        return false;
    };
    DataTablePagination.prototype.hasNext = function (number, page) {
        var difference = this.getDifference();
        if ((number - page) > difference) {
            return true;
        }
        return false;
    };
    DataTablePagination.prototype.getDifference = function () {
        var difference = 2;
        return difference;
    };
    DataTablePagination.prototype.createPageRange = function (number, page) {
        var items = [];
        if (number > 1) {
            var difference = this.getDifference();
            var maxPage = number;
            var minPage = 1;
            if ((number - page) >= difference) {
                maxPage = page + difference;
            }
            if ((page - difference) >= 1) {
                minPage = page - difference;
            }
            for (var i = minPage; i <= maxPage; i++) {
                items.push(i);
            }
        }
        return items;
    };
    return DataTablePagination;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTablePagination.prototype, "show_range", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTablePagination.prototype, "show_limit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTablePagination.prototype, "show_input", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTablePagination.prototype, "show_numbers", void 0);
DataTablePagination = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'data-table-pagination',
        template: pagination_template_1.PAGINATION_TEMPLATE,
        styles: [pagination_style_1.PAGINATION_STYLE]
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return table_component_1.DataTable; }))),
    __metadata("design:paramtypes", [table_component_1.DataTable])
], DataTablePagination);
exports.DataTablePagination = DataTablePagination;
//# sourceMappingURL=/components/pagination.component.js.map