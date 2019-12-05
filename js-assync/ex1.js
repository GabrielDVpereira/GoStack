const checkAge = age => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) resolve("adult");
      else reject("kid");
    }, 2000);
  });
};

checkAge(20)
  .then(result => console.log(result))
  .catch(error => console.error(error));
