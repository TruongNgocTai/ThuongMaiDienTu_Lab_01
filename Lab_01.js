var express = require('express')
var app = express()
var url = require('url')

var me = {"MSSV": 1512473, "HoTen": "Trương Ngọc Tài", "Email": "truongngoctai.it.hcmus@gmail.com"}

app.get('/getThongTin', function(req, res){
	res.send(me)
})

app.get('/GetValue', function(req, res){
	res.send("Hello World!!! - {" + Date() + "}")
})

app.post('/Cong/a/:val_a/b/:val_b', function(req, res){
	var result = parseInt(req.params.val_a) + parseInt(req.params.val_b)
	res.send(result.toString())
})

app.put('/Tru/a/:val_a/b/:val_b', function(req, res){
	var result = parseInt(req.params.val_a) - parseInt(req.params.val_b)
	res.send(result.toString())
})

app.delete('/Nhan/a/:val_a/b/:val_b', function(req, res){
	var result = parseInt(req.params.val_a) * parseInt(req.params.val_b)
	res.send(result.toString())
})

app.delete('/Chia/a/:val_a/b/:val_b', function(req, res){
	var numer = parseInt(req.params.val_a)
	var deno = parseInt(req.params.val_b)

	if(deno == 0){
		res.send('Không được thưc hiện phép chia 0')
	}else{
		var result = numer/deno
		res.send(result.toString())
	}
})

var server = app.listen(3000, function(){
})