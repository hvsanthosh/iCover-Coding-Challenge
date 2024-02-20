// 3. What are the different methods to compare two objects in javascript and explain with an example.

// Comparing objects is bit tricky because objects are compared unlike primitive types.
// Objects are compared based on there reference of there memory.
// If 2 objects have same memory location then only comparing objects is possible like primitives(But it is not possible in real life).

// We can compare objects in 4 ways:
// a) using == and  ===,
// b) Converting objects to sting and comparing both,
// c) Comparing all possible key value pairs in bot objects, and
// d) Using lodash javascript library.

// comparing 2 objects using == and === operator. Thought both objects are similar, there memory locations are different so we get false in this case.
const type1 = () => {
  let obj1 = { a: 1, b: 2 };
  let obj2 = { a: 1, b: 2 };
  console.log(obj1 === obj2); // false
  console.log(obj1 == obj2); // false
};

// Comparing 2 objects after converting them into string, this works well if the keys and values have same order.
// But this will fail if we have key value pair order altered.
const type2 = () => {
  let obj1 = { a: 1, b: 2 };
  let obj2 = { a: 1, b: 2 };
  console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
  let obj3 = { a: 1, b: 2 };
  let obj4 = { b: 2, a: 1 };
  console.log(JSON.stringify(obj3) === JSON.stringify(obj4)); // false
};

// This is long way to compare object but this holds good in many cases if order of key value pairs is altered in objects also the result will not be affected.
const type3 = () => {
  function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }

  let obj1 = { a: 1, b: 2 };
  let obj2 = { a: 1, b: 2 };
  console.log(compareObjects(obj1, obj2)); // true
};

type1();
type2();
type3();
