
export interface ISortable {
  length: number;
  swap(leftPos: number, rightPos: number): void;
  compare(leftPos: number, rightPos: number): boolean;
}
