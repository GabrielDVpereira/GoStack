const experience = years => {
  switch (years) {
    case 0 <= years && years <= 1:
      return "Iniciante";
    case 1 <= years && years <= 3:
      return "Intermediário";
    case 3 <= years && years <= 6:
      return "Avançado";
    default:
      return "Jedi master";
  }
};

let yearsOfSutdy = 7;

console.log(experience(yearsOfSutdy));
