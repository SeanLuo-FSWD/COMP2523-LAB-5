import { ISortable } from "./ISortable";

class Node {
  next: Node | null = null;
  data: number;
  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedListGroup implements ISortable {
  head: Node | null = null;

  // Create Node out of data and attach to end of list
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  // Should return number of Nodes in List
  get length(): number {
    // implement this part yourself

    let node: Node | null = this.head;
    let count: number = 1;

    if (!this.head) {
      return 0;
    }

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  // Convenience method that returns a Node at a given index
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Error: Index out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Error: Index out of bounds");
  }

  compare(leftPos: number, rightPos: number): boolean {

    const leftNode = this.at(leftPos);
    let to_swap = false;

    if (leftNode.next != null) {
      const rightNode = leftNode.next;
      const rightNodeVal = rightNode.data;
      if (leftNode.data > rightNodeVal) {
        to_swap = true;
      } else {
        to_swap = false;
      }
    }

    return to_swap;
  }

  swap(leftPos: number, rightPos: number): void {
    // Implement this part yourself

    let leftNodeVal: number = this.at(leftPos).data;
    let rightNodeVal: number = this.at(rightPos).data;

    let counter = 0;
    let node: Node | null = this.head;

    if (!this.head) {
      throw new Error("Error: Index out of bounds");
    }
    while (node) {
      if (counter === leftPos) {
        node.data = rightNodeVal;
        node.next!.data = leftNodeVal;
      }
      counter++;
      node = node.next;
    }
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
