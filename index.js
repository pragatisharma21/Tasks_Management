const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname , "public")))

app.get("/", (req, res)=>{
    fs.readdir(`./files`, function(err, files){
        res.render("index", {files: files})

    })
    
})
app.post("/create", function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt` , req.body.detail, function(err){
        res.redirect("/")
    
} )
       

   
    
 })




PORT = 8080
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
