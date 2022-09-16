const objs = [
    {
        "nome": "Cleber",
        "idade": 30,
        "esta_trabalhando": false,
        "detalhes_profissao": { 
             "profissao":"Programador",
             "empresa": "Raise-it"
        },
        "hobbies" : ["Basquete","Futebol","Programar"]
    },

    {
        "nome": "Joao",
        "idade": 25,
        "esta_trabalhando": true,
        "detalhes_profissao": { 
             "profissao":null,
             "empresa": null,
        },
        "hobbies" : ["Jogar","Correr"]
    },
]

//JSON
//converter Objeto para Json 
const jsonData = JSON.stringify(objs)
console.log(jsonData)

//converter Json para Objeto Valido

const objData = JSON.parse(jsonData);

console.log(objData)
console.log(typeof objData)

objData.map((pessoa)=> {
    console.log(pessoa.nome) 

})