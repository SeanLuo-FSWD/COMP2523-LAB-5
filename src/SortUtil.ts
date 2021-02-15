import { CharacterGroup } from "./CharacterGroup";
import { ISortable } from "./ISortable";
import { NumberGroup } from "./NumberGroup";
import { LinkedListGroup } from "./LinkedListGroup";

class SortUtil {
  collection: ISortable;

  constructor(collection: ISortable) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;
    console.log("void called");

    console.log(length);

    let isSorted = false;
    let lastUnsorted = length - 1;
    while (!isSorted) {
      isSorted = true;

      // If i == lastUnsorted, for loop won't run, so assume sorted
      for (let i = 0; i < lastUnsorted; i++) {
        console.log(i);
        console.log("stopper");
        console.log(lastUnsorted);
        if (this.collection.compare(i, i + 1)) {
          this.collection.swap(i, i + 1);
          isSorted = false;
        }
      }
      lastUnsorted--;
    }
  }
}

const numberGroup = new NumberGroup([30, 3, -15, 0]);
const sorter1 = new SortUtil(numberGroup);

sorter1.sort();
console.log(numberGroup.data);
console.log("------------------------");

console.log("a".localeCompare("b"));
console.log("g".localeCompare("b"));

const characterGroup = new CharacterGroup("Xaeyb");
const sorter2 = new SortUtil(characterGroup);
sorter2.sort();
console.log(characterGroup.data);
console.log("------------------------");

const linkedListGroup = new LinkedListGroup();
linkedListGroup.add(520);
linkedListGroup.add(-10);
linkedListGroup.add(-7);
linkedListGroup.add(4);

const sorter3 = new SortUtil(linkedListGroup);
sorter3.sort();
linkedListGroup.print();
