const { config, getAnswer } = require("../config");

//constant
const hobbies = ["Sports", "Cooking"];

config("SpliceMethod", () => {
  const splicedArray = hobbies.splice(1);

  getAnswer("Birinci indexten sonrası silinecektir.", [
    {
      title: "Result Data:",
      desc: hobbies,
    },
    {
      title: "Return Data:",
      desc: splicedArray,
    },
  ]);

  hobbies.push("new1", "new2", "new3", "new4");

  getAnswer("Array sonuna madde eklenecektir.", [
    {
      title: "Middle Control Data:",
      desc: hobbies,
    },
  ]);

  const splicedArray2 = hobbies.splice(1, 2);
  getAnswer("Birinci indeks dahil 2 tane silme işlemi beklenir.", [
    {
      title: "Result Data:",
      desc: hobbies,
    },
    {
      title: "Return Data:",
      desc: splicedArray2,
    },
  ]);

  const splicedArray3 = hobbies.splice(1, 0, "Good Mid", "Excellant Mid"); // Verilen değer kadar silme istersek yaptırabiliriz burada 0 verdiğimiz için silme olmadı.

  getAnswer(
    "Birinci indeks dahil hiç silinmez. ve araya verilen değerler konur.",
    [
      {
        title: "Result Data:",
        desc: hobbies,
      },
      {
        title: "Return Data:",
        desc: splicedArray3,
      },
    ]
  );

  const splicedArray4 = hobbies.splice(-1, 1);

  getAnswer("Son index silinir.", [
    {
      title: "Result Data:",
      desc: hobbies,
    },
    {
      title: "Return Data:",
      desc: splicedArray4,
    },
  ]);
});
