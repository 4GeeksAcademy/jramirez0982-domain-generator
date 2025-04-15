let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ["com","net","us","io","es","edu","gov"]; 

let dominios = [];
let count = 0

for (let i in pronoun){
    for (let j in adj){
        for (let k in noun){
            for (let x in dom){
                dominios[count] = (pronoun[i]+adj[j]+noun[k]+"."+dom[x]);
                count=count+1;
                console.log(pronoun[i]+adj[j]+noun[k]+"."+dom[x]);
            }    
        }
    }
}

console.log("\nLa cantidad de dominios creados es:" + count);

/*
thegreatjogger.com  X
thegreatracoon.com X
ourgreatjogger.com X
ourgreatracoon.com X
thebigjogger.com X
thebigracoon.com X
ourbigjogger.com X
ourbigracoon.com X
*/