//escopo global, função e de blocos

var serie = "The BIG BANG THEORY";

console.log("global", serie);

//console.log("global hoisted", serie3);

function functionScope() {
  console.log("function", serie);
  //console.log("variable hoisted", serie2);
  //no escopo de função não tem elevação
  var serie3 = "MADMAN";
}

functionScope();

if (true) {
  console.log("bloque", serie);
  if (true) {
    // vai sofrer o hosting para o escopo global porque ela foi declarada num bloco dentro do escopo global
    var series = "GOT";
  }
}

console.log("global hoisted", series);
