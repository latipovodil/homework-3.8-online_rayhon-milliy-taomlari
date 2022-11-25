let all = [
  {
    id: 1,
    name: "osh",
    number: 62,
    money: 30000,
  }, {
    id: 2,
    name: "sho'rva",
    number: 5,
    money: 20000,
  }, {
    id: 3,
    name: "lavash",
    number: 50,
    money: 40000,
  }, {
    id: 4,
    name: "manti",
    number: 50,
    money: 8000,
  }, {
    id: 5,
    name: "shikalantli",
    number: 2,
    money: 20000,
  },
  {
    id: 6,
    name: "yong'oqli",
    number: 2,
    money: 8000,
  }, {
    id: 7,
    name: "malinali",
    number: 2,
    money: 12000,
  }, {
    id: 8,
    name: "burger",
    number: 14,
    money: 20000,
  }, {
    id: 9,
    name: "gamburger",
    number: 8,
    money: 30000,
  }, {
    id: 10,
    name: "hot-dog",
    number: 12,
    money: 10000,
  }, {
    id: 11,
    name: "pizza",
    number: 20,
    money: 50000,
  },


]



while (true) {



  let food = prompt(`Biron-nimani tanlab nomini kiriting (Kichik harflarda{bo'lmasa ishlamaydi!!!})
    Bizning taomlar:
          Osh = 30 000 - 62ta bor
          Sho'rva = 20 000 - 5ta bor
          Lavash = 40 000 - 50ta bor
          Manti = 8 000 - 35ta bor
    Marojnilar:
           Shikalantli = 10 000 - 2ta bor
           Yong'oqli = 8 000 - 2ta bor
           Malinali = 12 000 - 2ta bor
    Fas Foodlar:
          Burger = 20 000 - 14ta bor
          Gamburger = 30 000 - 8ta bor
          Hot-dog = 10 000 - 12ta bor
          Pizza = 50 000 - 20ta bor`)





  let i = 0

  let savol = false

  for (let ovqat of all) {
    if (ovqat.name == food) {
      savol = true
    }

  }

  for (i; savol; i++) {
    if (all[i].name == food) {
      food = all[i].id
      console.log(all[i].id);
      break
    }
  }

  let son = 5;
  let number2 = 0;


  if ((typeof food === typeof son)) {
    number2 = prompt(`Nechta ${all[i].name} kerak`)
  }
  else if (!(typeof food === typeof son)) {
    alert("Bizda bunday mahsulot yo'q!!!")
  }
  else {
    console.log("Oxshayapdi 112-qatorgacha")
  }

  if (savol) {
    if (number2 <= all[i].number) {
      alert(`Sizga ${number2} ta ${all[i].name}ni narxi ${number2 * all[i].money} so'm!!!
  Yoqimli ishtaxa!!!`)
      all[i].number = all[i].number - number2
    }

    else if (number2 > all[i].number) {
      alert(`Kechirasiz bizda ${all[i].number} ta ${all[i].name} bor!!!
  Yarim soat kutsangiz tayyor bo'ladi!!!`)
    }

  }
}