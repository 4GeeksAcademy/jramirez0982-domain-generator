import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let dom = ["com", "net", "us", "io", "es", "edu", "gov"];

  let dominios = [];
  let count = 0

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let x in dom) {
          const node = document.createElement("li");
          node.className="list-group-item"
          node.innerText = (pronoun[i] + adj[j] + noun[k] + "." + dom[x]);
          //node.appendChild(textnode);
          document.getElementById("lista_dominios").appendChild(node);
          //console.log(pronoun[i] + adj[j] + noun[k] + "." + dom[x]);
        }
      }
    }
  }

};
