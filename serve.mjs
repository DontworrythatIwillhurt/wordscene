import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost'),file=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!file.startsWith(root+path.sep))throw Error('Forbidden');const content=await readFile(file);res.setHeader('Content-Type',({'html':'text/html; charset=utf-8','js':'text/javascript; charset=utf-8','css':'text/css; charset=utf-8','svg':'image/svg+xml'})[file.split('.').pop()]||'text/plain; charset=utf-8');res.end(content);}catch{res.writeHead(404);res.end('Not found');}}).listen(8765,'127.0.0.1',()=>console.log('Wordscene: http://127.0.0.1:8765'));
