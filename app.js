const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req, res){
    console.log("Página Inicial")
    res.send("Página Inicial")
})

app.get("/cadastrar", function(req, res){
    console.log("Página Cadastro")
    res.send("Página Cadastro")
})

app.get("/produtos/:item/:quantidade", function(req, res){
    console.log("Página Produtos")
    res.send("Página de produtos - Item: " + req.params.item + " quantidade " + req.params.quantidade)
})

app.get("/contato", function(req, res){
    console.log("Página Contato")
    res.send("Página Contato")
})

