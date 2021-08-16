const express = require('express')

const router = express.Router()
const db = require('../models')

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

module.exports = router