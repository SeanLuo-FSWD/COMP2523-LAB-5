import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  swap(leftPos: number, rightPos: number): void {
    let temp = this.data[leftPos];
    let d_array = this.data.split("");
    d_array[leftPos] = d_array[rightPos];
    d_array[rightPos] = temp;
    this.data = d_array.join("");
  }

  compare(leftPos: number, rightPos: number): boolean {
    let to_swap = false;
    if (this.data[leftPos].localeCompare(this.data[rightPos]) != -1) {
      to_swap = true;
    }
    return to_swap;
  }
}
