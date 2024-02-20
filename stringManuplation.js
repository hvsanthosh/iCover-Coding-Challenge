// 2. Write a string transformation function that converts input strings in various formats (i.e., "i_love_cats", "i-love-cats", "iLoveCats", "I love cats") to the desired output format "I love cats".

function transformString(inputString) {
  // Split the input string by underscores, dashes, or camelCase
  let words = inputString.split(/[_\-]|(?=[A-Z])/);
  // Capitalize the first letter of each word and convert the rest to lowercase
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  // Join the words with a space separator
  let outputString = words.join(" ");

  return outputString;
}

// Test the function with various input formats
// let inputStrings = ["i_love_cats", "i-love-cats", "iLoveCats", "I love cats"];
let str = "i_love-Cats";
console.log(transformString(str));
