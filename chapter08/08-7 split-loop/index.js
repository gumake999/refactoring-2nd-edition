function fn() {
  return `최연소: ${youngestAge()}, 총급여: ${totalSalary()}`;
}

function totalSalary() {
  return people.reduce((total, p) => total + p.salary, 0);
}

function youngestAge() {
  let youngest = people[0] ? people[0].age : Infinity;

  for (const p of people) {
    if (p.age < youngest)
      youngest = p.age;
  }

  return youngest;
}