var express = require("express"),
		bodyParser = require('body-parser'),
		formidable = require('formidable'),
		morgan = require('morgan'),
		fs = require("fs"),
		app = express(),
    port = 9009;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.post("/upload",function(req,res) {
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {
    if(files.fileField1 === undefined) {
      res.status(500);
      res.json({'success': false,'msg':'no file sent'});
    }

		var oldPath = files.fileField1.path,
				newPath = __dirname + "/uploads/"+files.fileField1.name;

    fs.readFile(oldPath, function(err, data) {
      fs.writeFile(newPath, data, function(err) {
        fs.unlink(oldPath, function(err) {
            if (err) {
              res.status(500);
              res.json({'success': false});
            } else {
              res.status(200);
              res.json({'success': true});
            }
        });
      });
    });
	});
});

app.post("/uploadWithData",function(req,res) {
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {
    if(files.fileField1 === undefined) {
      res.status(500);
      res.json({'success': false,'msg':'no file sent'});
    }
		
		var oldPath = files.fileField1.path,
				newPath = __dirname + "/uploads/"+files.fileField1.name;

    fs.readFile(oldPath, function(err, data) {
      fs.writeFile(newPath, data, function(err) {
        fs.unlink(oldPath, function(err) {
            if (err) {
              res.status(500);
              res.json({'success': false});
            } else {
              res.status(200);
              res.json({'success': true, 'email' : fields.email});
            }
        });
      });
    });
	});
});

app.listen(port,"localhost",function () {
	console.log('server started on port:'+port);
});