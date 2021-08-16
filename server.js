const express = require('express')
const db = require('./models')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()
const routes = require('./routes/api-routes')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api', routes)



db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`Escutando em: http://localhost:${port}`)
    })
}).catch(e => console.log(e))





