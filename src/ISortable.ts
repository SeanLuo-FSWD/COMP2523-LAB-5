import { LinkedListGroup } from "./LinkedListGroup";

export interface ISortable {
  //   data: number[] | string | number;
  length: number;
  swap(leftPos: number, rightPos: number): void;
  compare(leftPos: number, rightPos: number): boolean;
}

export interface SortType extends ISortable {
  data: number[] | string | number;
}
