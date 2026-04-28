const fs = require("fs")
//console.log(fs);
//fs.writeFileSync("text.t", "my name is krishna")

// call back
fs.writeFile("kk.txt"," kk professional", ()=>{
    console.log("done")
    fs.readFile("kk.txt", "utf-8",(err, data) =>{
        if (err) throw err;
        console.log(err);
        console.log(data.toString);

    })
})

fs.appendFile("kk.txt", "/new line", (e,d)=>{
    console.log(e, d)
})