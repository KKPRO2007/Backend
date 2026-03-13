const fs = require("fs");
fs.writeFile("async","try me","utf-8",(err)=>{
    if (err) throw err;
});
fs.readFile("async","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data)
});
fs.appendFile("async","\n\n\n\n\n\nadd me",(err)=>{
    if (err) throw err;
})
fs.rename("async","aasync",(err)=>{
    if(err) throw err;
})
fs.copyFile("aasync","ksync",(err)=>{
    if(err) throw err;
})
fs.unlink("aasync",(err)=>{
    if (err) throw err;
})
fs.stat("ksync", (err,stats)=>{
    console.log(stats.isFile());
    console.log(stats.size);
})
fs.mkdir("dir",(err)=>{
    if(err) throw err;
})
fs.readdir("dir",(err, files)=>{
    if (err) throw err;
    console.log(files)
});