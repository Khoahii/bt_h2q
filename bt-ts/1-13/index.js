// 1. Kiểu dữ liệu và biến
// Khai báo biến với let, const và gán kiểu
console.log("helle ts");
var count = 10;
var greeting = "Hello";
var flag = true;
var anything = "could be anything";
var unknownValue = 42;
// Viết hàm sum(a: number, b: number): number và thử gọi
function sum(a, b) {
    return a + b;
}
console.log("sum: ", sum(5, 7));
// 2. Chức năng hàm
// Hàm tính giai thừa
function factorial(n) {
    if (n < 0)
        throw new Error("error");
    return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log("factorial: ", factorial(5));
// Hàm tính tổng của mảng số
function sumArray(nums) {
    return nums.reduce(function (acc, cur) { return acc + cur; }, 0);
}
console.log("sumArray: ", sumArray([1, 2, 3]));
function move(dir) {
    console.log("Moving ".concat(dir));
}
console.log("move: ", move("up"));
// Hàm xử lý input: string | string[]
function lengthOf(input) {
    if (typeof input === "string") {
        return input.length;
    }
    else {
        return input.reduce(function (sum, str) { return sum + str.length; }, 0);
    }
}
console.log("lengthOf: ", lengthOf("hello"));
function printTuple(_a) {
    var num = _a[0], str = _a[1], bool = _a[2];
    console.log("Number:", num);
    console.log("String:", str);
    console.log("Boolean:", bool);
}
console.log("printTuple: ", printTuple([1, "hello", true]));
// Enum Color và chuyển sang string
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function colorToString(c) {
    return Color[c];
}
console.log("colorToString: ", colorToString(Color.Red));
function greet(p) {
    return "Hello, ".concat(p.name, ". You are ").concat(p.age, " years old.");
}
console.log("greet: ", greet({ name: "John", age: 30 }));
function createConfig(cfg) {
    var _a;
    return {
        url: cfg.url,
        timeout: (_a = cfg.timeout) !== null && _a !== void 0 ? _a : 5000,
    };
}
console.log("createConfig: ", createConfig({ url: "https://example.com" }));
var readonlyArr = ["a", "b", "c"];
// readonlyArr.push('d'); // Lỗi biên dịch
// 7. Generics cơ bản
function identity(arg) {
    return arg;
}
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    return Stack;
}());
// 8. Type Guards và Type Assertions
function isNumber(x) {
    return typeof x === "number";
}
function exampleGuard(x) {
    if (isNumber(x)) {
        console.log(x.toFixed(2));
    }
}
console.log("exampleGuard: ", exampleGuard(5));
// Sử dụng as và !
var maybeString = "hello";
var definitelyString = maybeString;
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
var nums = [1, 2, 3];
nums.map(function (n) { return n * 2; }); // TS infer n: number
function makePair(a, b) {
    return [a, b];
}
var pair = makePair("hello", 123); // inferred [string, number]
// bien dich: tsc index.ts
