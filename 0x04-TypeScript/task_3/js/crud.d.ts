import { RowID, RowElement } from './interface';

declare module "crud" {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowID: RowID): void;
    export function updateRow(rowID: RowID, row: RowElement): RowID;
}
