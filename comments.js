// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = [];
var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true);
  var pathname = urlObj.pathname;
  if (pathname === '/') {
    fs.readFile('./index.html', function(err, data) {
      if (err) {
        res.end('read file error');
      }
      res.end(data);
    });
  } else if (pathname === '/getComments') {
    var json = JSON.stringify(comments);
    res.end(json);
  } else if (pathname === '/addComment') {
    var comment = urlObj.query;
    comments.push(comment);
    res.end('add comment success');
  } else {
    staticRoot(pathname, req, res);
  }
});
server.listen(8080);
console.log('Server is running at 8080');
function staticRoot(pathname, req, res) {
  var extname = path.extname(pathname);
  if (extname === '.html') {
    fs.readFile('./' + pathname, function(err, data) {
      if (err) {
        res.end('read file error');
      }
      res.end(data);
    });
  } else if (extname === '.css') {
    fs.readFile('./' + pathname, function(err, data) {
      if (err) {
        res.end('read file error');
      }
      res.end(data);
    });
  } else if (extname === '.js') {
    fs.readFile('./' + pathname, function(err, data) {
      if (err) {
        res.end('read file error');
      }
      res.end(data);
    });
  } else {
    res.end('404');
  }
}
```

# 4.3.3 用 Node.js 搭建一个静态服务器
##