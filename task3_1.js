const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 30,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

function chekObj(count){
  return enterprises[count].departments.map(item => item.employees_count).reduce((ar, val) => ar+val);
   }

let peopleComp = [];

for(let i = 0; i < enterprises.length; i++){

peopleComp[i] = chekObj(i);
console.log(`${enterprises[i].name} (${!peopleComp[i] ? "Нет" : peopleComp[i]} Сотрудников)`)

for(let n = 0; n < enterprises[i].departments.length; n++){
console.log(`--${enterprises[i].departments[n].name} (${!enterprises[i].departments[n].employees_count ? "Нет сотрудников" : enterprises[i].departments[n].employees_count })`)
}
}

