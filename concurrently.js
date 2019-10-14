const concurrently = require('concurrently');

concurrently([
  { name: 'client', command: 'npm run client:serve', prefixColor: 'white'},
  { name: 'server', command: 'npm run server:dev', prefixColor: 'red'},
], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
}).then(console.log, console.log);
