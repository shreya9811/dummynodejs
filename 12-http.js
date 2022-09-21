//http module for server and req res
const http =require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/') //req for hompage render this
    {
        res.write('hello kiddan ji welcome to my homepage');
        res.end();
    }
    else if(req.url ==='/about'){
        res.end('here we are again!');
    }
    else{res.end(`<h1> OOPS </h1>
    <p>cant find page you are looking for</p>
    <a href="https://www.google.com">Google your shit</a>`);}
   
});

server.listen(5000);