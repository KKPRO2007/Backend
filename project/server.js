const http=require("http");
const fs=require("fs");
const url=require("url");
const file="data.json";

const server=http.createServer((req,res)=>{

if(req.method==="GET"&&req.url==="/"){
res.writeHead(200,{"Content-Type":"text/plain"});
res.end("Server is running");
}

else if(req.method==="POST"&&req.url==="/api/data"){
let body="";
req.on("data",chunk=>{body+=chunk;});
req.on("end",()=>{
const newData=JSON.parse(body);
let data=[];
if(fs.existsSync(file)){
const fileData=fs.readFileSync(file);
if(fileData.length>0){data=JSON.parse(fileData);}
}
data.push(newData);
fs.writeFileSync(file,JSON.stringify(data,null,2));
res.writeHead(200,{"Content-Type":"application/json"});
res.end(JSON.stringify({message:"Data saved",data}));
});
}

else if(req.method==="GET"&&req.url==="/server"){
let data=[];
if(fs.existsSync(file)){
const fileData=fs.readFileSync(file);
if(fileData.length>0){data=JSON.parse(fileData);}
}
res.writeHead(200,{"Content-Type":"application/json"});
res.end(JSON.stringify(data));
}

else if(req.method==="DELETE"&&req.url.startsWith("/api/data")){
const query=url.parse(req.url,true).query;
const id=parseInt(query.id);
let data=[];
if(fs.existsSync(file)){
const fileData=fs.readFileSync(file);
if(fileData.length>0){data=JSON.parse(fileData);}
}
const index=data.findIndex(x=>x.id===id);
if(index!==-1){
data.splice(index,1);
fs.writeFileSync(file,JSON.stringify(data,null,2));
res.writeHead(200,{"Content-Type":"application/json"});
res.end(JSON.stringify({message:"User deleted"}));
}
else{
res.writeHead(404,{"Content-Type":"application/json"});
res.end(JSON.stringify({message:"ID not found"}));
}}

else{
res.writeHead(404,{"Content-Type":"text/plain"});
res.end("Route Not Found");
}

});

server.listen(4000,()=>{console.log("Server running at http://localhost:4000");});