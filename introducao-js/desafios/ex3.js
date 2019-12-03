const hasSkill = skills => {
  const isHasSkill = skills.some(skill => {
    return skill === "Javascript";
  });

  return isHasSkill;
};

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(hasSkill(skills));
