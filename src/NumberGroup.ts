import { ISortable } from "./ISortable";

export class NumberGroup implements ISortable {
  data: number[];

  constructor(n_array: number[]) {
    this.data = n_array;
  }

  get length(): number {
    return this.data.length;
  }
  swap(leftPos: number, rightPos: number): void {
    let temp = this.data[leftPos];
    this.data[leftPos] = this.data[rightPos];
    this.data[rightPos] = temp;
  }
  compare(leftPos: number, rightPos: number): boolean {
    let to_swap = false;
    if (this.data[leftPos] > this.data[rightPos]) {
      to_swap = true;
    }
    return to_swap;
  }
}
