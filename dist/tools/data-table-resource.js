"use strict";
var DataTableResource = (function () {
    function DataTableResource(items) {
        this.items = items;
    }
    DataTableResource.prototype.query = function (params, filter) {
        var result = [];
        if (filter) {
            result = this.items.filter(filter);
        }
        else {
            result = this.items.slice(); // shallow copy to use for sorting instead of changing the original
        }
        if (params.sortBy) {
            result.sort(function (a, b) {
                if (typeof a[params.sortBy] === 'string') {
                    return a[params.sortBy].localeCompare(b[params.sortBy]);
                }
                else {
                    return a[params.sortBy] - b[params.sortBy];
                }
            });
            if (params.sortAsc === false) {
                result.reverse();
            }
        }
        if (params.offset !== undefined) {
            if (params.limit === undefined) {
                result = result.slice(params.offset, result.length);
            }
            else {
                result = result.slice(params.offset, params.offset + params.limit);
            }
        }
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(result); });
        });
    };
    DataTableResource.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.items.length); });
        });
    };
    return DataTableResource;
}());
exports.DataTableResource = DataTableResource;
//# sourceMappingURL=/tools/data-table-resource.js.map