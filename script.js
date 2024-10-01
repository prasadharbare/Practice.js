function encrypt(text, key) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  //   const capsAlphabets = alphabets.toUpperCase();

  let encrypted = "";

  for (let char of text) {
    // If it is a special character
    if (!alphabets.includes(char) && !alphabets.toUpperCase().includes(char)) {
      encrypted += char;
      continue;
    }

    // Find index or -1
    let index = alphabets.indexOf(char);

    // This will run if the alphabet is uppercase
    if (index === -1) {
      alphabets = alphabets.toUpperCase();
      index = alphabets.indexOf(char);
    }

    // Construct new index
    let newIndex = index + key;

    // Check for range
    if (newIndex > 25) {
      newIndex %= 26;
    }

    const newChar = alphabets[newIndex];

    encrypted += newChar;

    // Convert alphabets back to lowercase
    alphabets = alphabets.toLowerCase();
  }

  console.log(encrypted);
  return encrypted;
}

encrypt("-aHello there how are you", 260); // bza-B


function encrypt(string) {
    function generateKey() {
        
    }
    function textIncrement(text, key) {
        
    }
    return textIncrement(string,generateKey)
}
const x = encrypt("aHello there how are you");
console.log(x);

        