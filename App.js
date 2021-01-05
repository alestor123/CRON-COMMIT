var { exec } = require('child_process'),
ncron = require('node-cron');
module.exports = (cron,message) => {
        exec(`git add . && git commit -m ${message||'commit message'}`, (err) => {
            if(err) throw err
            else console.log(`Commited ${message|| 'commit message'}`)
            })
}