const express = require('express')

const router = express.Router()
const db = require('../models')

// Rotas de produto
// Socilitando todos os produtos
router.get('/baixar-produtos', (req, res) => {
    db.Produto.findAll().then(produtos => {
        if (produtos.length == 0) {

            return res.send([])

        }

        res.status(200)
        res.send(produtos)

    })
})

// Solicitando um único produto
router.get('/baixar-produto/:id', (req, res) => {
    db.Produto.findAll({
        where: {
            id: req.params.id
        }
    }).then(produto => {

        if (produto.length == 0) {

            return res.send([])

        }

        res.status(200)
        res.send(produto)
    })
})

// Adicionando produto
router.post('/adicionar-produtos', (req, res) => {
    db.Produto.create({
        codigo: req.body.codigo,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
        quantidade: req.body.quantidade,
        ativo: req.body.ativo
    }).then(produtoSubmetido => {
        res.status(200)
        res.send(produtoSubmetido)
    })
})

// Atualizando produto
router.put('/editar-produto', (req, res) => {
    db.Produto.update({
        codigo: req.body.codigo,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
        quantidade: req.body.quantidade,
        ativo: req.body.ativo
    }, {
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.status(200)
        res.send("Atualizado com sucesso")
    })
})

// Deletando produto
router.delete('/deletar-produto/:id', (req, res) => {
    db.Produto.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(200)
        res.send("Deletado com sucesso")
    })
})

// Rotas de usuario

'buscando usuario'

router.post('/usuarios/create', (req, res) => {
    db.Usuario.create({
        login: req.body.login,
        password: req.body.password
    }).then(usuarioCriado => {
        res.status(200)
        res.send(usuarioCriado)
    })
})

router.post("/usuarios/login", (req, res) => {
    db.Usuario.findAll({
        where: {
            login: req.body.login,
            password: req.body.password
        }
    }).then(usuario => {
        if(usuario.length > 0) return res.send(true)
        
        return res.send(false)
    })
})

module.exports = router