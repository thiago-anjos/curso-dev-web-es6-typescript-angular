function callHero({ name = "thiago", skill = "fight" } = {}) {
  return `The name of hero is ${name} and your skill is ${skill}`;
}

console.log(callHero());
console.log(callHero({ name: "luiz", skill: "punch" }));
