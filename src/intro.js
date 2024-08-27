// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function factorial(number) {
  if (number < 0) return undefined;
  return number === 0 || number === 1 ? 1 : number * factorial(number - 1);
}

export function square(number) {
  return number * number;
}

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) sum += Number(number);
  return sum;
}

const fibonacii = (number) => {
  // if(number === undefined) return undefined;
  // else if(number <= 2) return 1;
  // return fibonacii(number-1)+ fibonacii(number-2);
  return number === undefined
    ? undefined
    : number <= 2
    ? 1
    : fibonacii(number - 1) + fibonacii(number - 2);
};
export function computeFibonacii(number) {
  if (typeof number !== "number") return undefined;
  let result = 0;
  for (let x = 1; x <= number; x++) result = fibonacii(x);
  return result;
}

export function digitSum(number) {
  if (typeof number !== "number") return undefined;
  if (number < 0) return number;
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = parseInt((number /= 10));
  }
  return sum;
}

export class Point {
  #x;
  #y;
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  calculateDistance(point) {
    const Dx = point.#x - this.#x;
    const Dy = point.#y - this.#y;
    return Math.sqrt(Math.pow(Dx, 2) + Math.pow(Dy, 2));
  }
  setX(x) {
    this.#x = x;
  }
  getX() {
    return this.#x;
  }

  setY(y) {
    this.#y = y;
  }
  getY() {
    return this.#y;
  }
}
