// Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"

function defineSex(sex) {
  let result = "";
  switch (sex) {
    case "m":
      result = "Ваш пол мужской";
      break;
    case "f":
      result = "Ваш пол женский";
      break;
    default:
      result = "Ваш пол не определен";
      break;
  }

  return result;
}

console.log(defineSex("tt"));
