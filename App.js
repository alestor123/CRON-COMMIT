var { exec } = require('child_process'),
ncron = require('node-cron');
module.exports = (message,cron) => {
    if(!cron) throw Error('Cron Not Found')
    ncron.schedule(cron, ()=> {
        exec(`git add . && git commit -m '${message||' commit message '}'`)
      });
}