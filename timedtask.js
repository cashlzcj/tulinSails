/**
 * Created by junge on 15/6/24.
 */
// 每分钟执行一次
//var TulinContentController = require('./api/controllers/TulinContentController');
//var routes = require('routes');
var request = require('request');
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();

　
var times = [];

for (var i = 1; i < 60; i+=5) {
　　　　times.push(i);
}

//console.log(times);

rule.second = times;

var reqGetContent = function (s)
{
    var json = JSON.stringify({keyword:s});
    request.post({url:'http://localhost:1337/TulinContent/getContent',
                 body:json,
              headers: {
                      'Content-Type': 'application/json'
    }}, function(error, response, body){
//        console.log(error);
        if(!error && response.statusCode == 200){
            console.log(body);
        }
    });
}

var j = schedule.scheduleJob(rule, function(){
    console.log('执行任务');
//    TulinContentController.getContent();
    reqGetContent('明天深圳到北京的飞机');
});





