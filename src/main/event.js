let pachong = require('./pachong')
const ipcm = require('electron').ipcMain
ipcm.on('searchMovie', (event, arg)=>{
    pachong.searchQiyi(arg).then(function(value){
        event.sender.send('movies',value)
    });
})
