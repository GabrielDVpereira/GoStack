var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

usuarios.forEach(usuario => {
  console.log(
    `O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(", ")}`
  );
});
