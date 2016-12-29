var http=require("http"); //引入required模块
var fs=require("fs")  //引入file system

var server=http.createServer(function(request,response){
  if(request.url==="/"){
    response.writeHead(200)//如果请求的是域名(url===/) 则返回200状态码
    fs.readFile("C:/projects/localp/002.html",function(error,content){//解析目标文件的位置
      var fileContent=content
      response.end(fileContent)//返回解析目标文件后的内容
    })
  } else{
    response.writeHead(404)//如果请求的不是域名（url===/）即则返回404状态码
    response.end()//404状态码返回空内容
  }
})

    server.listen(8888)//新建server后，执行监听8888端口

// var http = require('http');
//
// http.createServer(function (request, response){
//   response.writeHead(200, {'Content-Type': 'text/plain'});//response.writeHead(200, {'Content-Type': 'text/html'})
//   response.write("Hello World");
//   response.end();
// }).listen(8080, '127.0.0.1');
//
// console.log('Server running on port 8080.');
