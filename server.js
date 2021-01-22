const {version} =  require('./package.json'),
app = require('./source/app'),
 http = require('http'),
ip = require( 'ip' ),
{port} =require('./config');

 
const server = http.createServer(app);
 
server.listen( port, () => console.log( `\nTelecaller Engine version ${version } is listening at http://${ ip.address()}:${ port }\n` ));
