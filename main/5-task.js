// Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.

function getEveryFirsWord(text) {
  return text.endsWith("You");
}

console.log(
  getEveryFirsWord(
    "You can think of the key as the named index of an associative array. JavaScript does not have an associative array. Instead, JavaScript objects are used to store key-value pairs."
  )
);
