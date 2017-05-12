var express = require('express');
var app = express();

var twilio = require('twilio');


app.get('/',function(req,res){
	var resp = new twilio.twiml.VoiceResponse();
	resp.gather({
		action: '/result',
		method: 'GET',
		timeout: 10,
		finishOnKey: '*'
	})
	.say('番号を入力して、最後にアスタリスクを押してくだされ',{
		language: 'ja-JP'
	});
	res.send(resp.toString());
});

app.get('/result',function(req,res){
	var resp = new twilio.twiml.VoiceResponse();
	resp.say(req.query.Digits+'ですかね',{
		language: 'ja-JP'
	})
	res.send(resp.toString());
});

app.listen(9999);