var twilio = require('twilio');
var client = new twilio('SID', 'Token');
var cronJob = require('cron').CronJob;


var textJob = new cronJob( '03 16 * * *', function(){
    client.messages.create( { to:'+seunumero', from:'+seunumerotwilio', body:'Tomar remédio!' }, function( err, data ) {});
  },  null, true);