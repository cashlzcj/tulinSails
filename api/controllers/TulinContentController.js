/**
 * TulinContentController
 *
 * @description :: Server-side logic for managing tulincontents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/*
var formData = {
    client_id: '0123456789abcdef',
    client_secret: 'secret',
    code: 'abcdef'
};

request.post({
        url: 'https://todoist.com/oauth/access_token',
        form: formData
    },
    function (err, httpResponse, body) {
        console.log(err, body);
    });
 */
module.exports = {
    getContent: function (req, res) {
        getPostDatas(req, res);
    }
};

var request = require('request');
var express = require('express');

var app = express();
var urlString = 'http://www.tuling123.com/openapi/api?key=0d8a27dd6c907efe5890d77cca6c7537&info=';

var requestTulin = function(url, res){
    request.get(url, function(error, response, body){
        if(!error && response.statusCode == 200){
//            console.log(body);
            res.send(body);
        }
    })
}

var getPostDatas = function(req, res){
    req.setEncoding('utf-8');

    var params = req.body;//JSON.parse(JSON.stringify(req.body));
    var keyword = params['keyword'];
    if (!keyword) {
        var error = {
            'code': -1,
            'msg':'关键字格式不对'
        }
        res.send(JSON.stringify(error));
        console.log('关键字格式不对');
        return;
    }
    var url = urlString + encodeURIComponent(keyword);
    requestTulin(url, res);
}

