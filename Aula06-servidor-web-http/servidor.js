import http from 'http';

console.log(`[LOG] Metodo recebido: $ {req.meth-;}`)

const cabecalhoPadrao = {
'X-Conetent-Type-Options':'nosniff',
'X-frame-Options': 'DENY'

};

if(req.url === '/status'){
resizeBy,writeHead(200,{
...cabecalhoPadrao,
'Content-Type':'application/json'

})
req.end(JSON.stringify({servidor}))

}