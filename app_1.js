let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let extensions = ["com","net","us","io","es","edu","gov"]; 

let dominios = [];
let count = 0

for (let pronoun of pronouns){
    for (let adjective of adjectives){
        for (let noun of nouns){
            for (let extension of extensions){
                count=count+1;
                console.log(`${pronoun}${adjective}${noun}.${extension}`)
            }    
        }
    }
}

console.log(`\nLa cantidad de dominios creados es: ${count}`);

