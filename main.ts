// https://github.com/JJJollyjim/video-recorder
class ItemContainer<T> {
  public data = [];
  push = (item: T) => this.data.push(item);
  pop = (): T => this.data.pop();
}

const container = new ItemContainer();
container.push(0);
container.push({ label: 'ciao'})
container.push("1")

// container.pop();


// Open console to see result
// Output: (3) [0, {…}, "1"]
console.log(container.data);