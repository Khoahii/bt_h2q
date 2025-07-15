// 1. Kiểu dữ liệu và biến
// Khai báo biến với let, const và gán kiểu
console.log("helle ts")
let count: number = 10;
const greeting: string = "Hello";
let flag: boolean = true;
let anything: any = "could be anything";
let unknownValue: unknown = 42;

// Viết hàm sum(a: number, b: number): number và thử gọi
function sum(a: number, b: number): number {
  return a + b;
}

console.log("sum: ", sum(5, 7));


// 2. Chức năng hàm
// Hàm tính giai thừa
function factorial(n: number): number {
  if (n < 0) throw new Error("error");
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log("factorial: ", factorial(5));

// Hàm tính tổng của mảng số
function sumArray(nums: number[]): number {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

console.log("sumArray: ", sumArray([1, 2, 3]));

// 3. Union và Literal Types
// Định nghĩa type Direction
type Direction = "up" | "down" | "left" | "right";
function move(dir: Direction): void {
  console.log(`Moving ${dir}`);
}

console.log("move: ", move("up"));
// Hàm xử lý input: string | string[]
function lengthOf(input: string | string[]): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.reduce((sum, str) => sum + str.length, 0);
  }
}

console.log("lengthOf: ", lengthOf("hello"));

// 4. Kiểu Tuple và Enum
// Tuple và hàm in
type MyTuple = [number, string, boolean];
function printTuple([num, str, bool]: MyTuple): void {
  console.log("Number:", num);
  console.log("String:", str);
  console.log("Boolean:", bool);
}

console.log("printTuple: ", printTuple([1, "hello", true]));

// Enum Color và chuyển sang string
enum Color {
  Red,
  Green,
  Blue,
}
function colorToString(c: Color): string {
  return Color[c];
}

console.log("colorToString: ", colorToString(Color.Red));

// 5. Interface và Type Alias
interface Person {
  name: string;
  age: number;
}
function greet(p: Person): string {
  return `Hello, ${p.name}. You are ${p.age} years old.`;
}

console.log("greet: ", greet({ name: "John", age: 30 }));

// So sánh type và interface
type Point = { x: number; y: number };
interface Point2 {
  x: number;
  y: number;
}
// Cả hai tương đương và có thể dùng interchangeably nếu mô hình giống nhau.

// 6. Optional & Readonly Properties
interface Config {
  url: string;
  timeout?: number;
}
function createConfig(cfg: Config): Required<Config> {
  return {
    url: cfg.url,
    timeout: cfg.timeout ?? 5000,
  };
}

console.log("createConfig: ", createConfig({ url: "https://example.com" }));

const readonlyArr: readonly string[] = ["a", "b", "c"];
// readonlyArr.push('d'); // Lỗi biên dịch

// 7. Generics cơ bản
function identity<T>(arg: T): T {
  return arg;
}

class Stack<T> {
  private items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

// 8. Type Guards và Type Assertions
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function exampleGuard(x: any) {
  if (isNumber(x)) {
    console.log(x.toFixed(2));
  }
}

console.log("exampleGuard: ", exampleGuard(5));

// Sử dụng as và !
let maybeString: string | null = "hello";
const definitelyString: string = maybeString! as string;

// 9. Mapped Types & Utility Types
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
type PartialTodo = Partial<Todo>; //- Tạo một type mới trong đó mọi thuộc tính của T đều trở thành optional.
type ReadonlyTodo = Readonly<Todo>; //- Tạo một type mới trong đó mọi thuộc tính của T đều là readonly (không thể gán lại).
type PickTodo = Pick<Todo, "id" | "title">; //- Tạo một type mới chỉ có id và title.
type OmitTodo = Omit<Todo, "completed">; //- Tạo một type mới bỏ field completed.



// 10. Conditional Types
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

// Flatten
type Flatten<T> = T extends Array<infer U> ? U : T;

// 11. Advanced Generics
type PromiseType<T> = T extends Promise<infer U> ? U : T;

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// 12. Decorators (experimentalDecorators cần bật)
// function LogClass<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     constructor(...args: any[]) {
//       console.log(`Creating instance of ${constructor.name}`);
//       super(...args);
//     }
//   };
// }

// function Measure(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.value;
//   descriptor.value = function (...args: any[]) {
//     const start = Date.now();
//     const result = original.apply(this, args);
//     const end = Date.now();
//     console.log(`${propertyKey} took ${end - start}ms`);
//     return result;
//   };
// }

// @LogClass
// class Example {
//   @Measure
//   compute(n: number) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) sum += i;
//     return sum;
//   }
// }

// 13. Type Inference & Inference from Context
const nums = [1, 2, 3];
nums.map((n) => n * 2); // TS infer n: number

function makePair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
const pair = makePair("hello", 123); // inferred [string, number]



// bien dich: tsc index.ts