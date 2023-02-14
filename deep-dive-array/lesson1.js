const { config, getAnswer } = require("../config");

//constant
const hobbies = ["Sports", "Cooking"];

config("Push Method", () => {
  const newLength = hobbies.push("Reading");

  getAnswer("Sona verilen parametreler gelir.", [
    {
      title: "Result Data:",
      desc: hobbies,
    },
    {
      title: "Result New Length:",
      desc: newLength,
    },
  ]);
});

config("Unshift Method", () => {
  const newLengthAfterUnshift = hobbies.unshift("Coding");

  getAnswer("Her zaman arrayin başına ekler ve yeni uzunluğu döner.", [
    {
      title: "Result Data:",
      desc: hobbies,
    },
    {
      title: "Result New Length:",
      desc: newLengthAfterUnshift,
    },
  ]);
});

config("Pop Method", () => {
  const poppedValue = hobbies.pop();

  getAnswer("Her zaman sondaki öğeyi siler ve onu dönderir", [
    {
      title: "Result Data:",
      desc: hobbies,
    },
    {
      title: "Return Data:",
      desc: poppedValue,
    },
  ]);
});

config("Shift Method", () => {
  const shiftedArray = hobbies.shift();

  getAnswer("Sola kaydırır. En soldaki düşer. Onu da dönderir.", [
    {
      title: "Result Data:",
      desc: hobbies,
    },
    {
      title: "Return Data:",
      desc: shiftedArray,
    },
  ]);
});
