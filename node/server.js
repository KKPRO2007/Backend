const http = require("http");
const url= require("url");

const userver= http.createServer((req,res)=>{
    const ps=url.parse(req.url, true);
    const query= ps.query;

    const name= query.name;
    const age= query.name;
    const user={
        name:name,
        age:age
    }
    if(req.method ==="GET" && ps.pathname==="/profile"){
        res.writeHead(200,{"Content-Type": "application/json"});
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404,{"Content-Type": "text/plain"});
        res.end(" route not found");
    }
})

   userver.listen(3000,()=>{
    console.log("Server is running at http://localHost:3000")
   })


