import { DataTableParams } from '../types/data-table-params.type';
export declare class DataTableResource<T> {
    private items;
    constructor(items: T[]);
    query(params: DataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Promise<T[]>;
    count(): Promise<number>;
}
