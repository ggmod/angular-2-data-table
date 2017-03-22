import { DataTableParams } from '../components/types';


export class DataTableResource<T> {

    constructor(private items: T[]) {}

    query(params: DataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Promise<T[]> {

        let result: T[] = [];
        if (filter) {
            result = this.items.filter(filter);
        } else {
            result = this.items.slice(); // shallow copy to use for sorting instead of changing the original
        }

        if (params.sortBy) {
            if (!params.customSort) {
                result.sort((a: any, b: any) => {
                    if (typeof a[<string> params.sortBy] === 'string') {
                        return a[<string> params.sortBy].localeCompare(b[<string> params.sortBy]);
                    } else {
                        return a[<string> params.sortBy] - b[<string> params.sortBy];
                    }
                });
            } else {
                result.sort(params.customSort);
            }
            if (params.sortAsc === false) {
                result.reverse();
            }
        }
        if (params.offset !== undefined) {
            if (params.limit === undefined) {
                result = result.slice(params.offset, result.length);
            } else {
                result = result.slice(params.offset, params.offset + params.limit);
            }
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result));
        });
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.items.length));
        });

    }
}