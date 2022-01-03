const express = require("express")
const path = require("path")
const productos = require("./utils/productos")

const app = express()
const port = process.env.PORT || 3000

const viewsURL = path.join(__dirname, "views")
app.set("views", viewsURL)
app.set("view engine", "ejs")

const publicDIR = path.join(__dirname, "public")
app.use(express.static(publicDIR))


app.get("", (req, res) => {
    res.render("index", {
        productos
    })
})

app.get("/contacto", (req, res) => {
    res.render("pages/contacto")
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})