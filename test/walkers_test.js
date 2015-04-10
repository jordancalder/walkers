'use strict';

var walkers = require('../lib/walkers.js');
var request = require('request');
var htmlparser = require("htmlparser2");

request('http://htmldog.com/examples/dropcaps2.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var handler = new htmlparser.DomHandler(function (error, dom) {
      if (error) console.log(err)
      else {
        test(dom);
      }
    });
    var parser = new htmlparser.Parser(handler);
    parser.write(body);
    parser.done();
  }
})

function test(dom) {
  walkers.walk(dom, true, function(node){
    if (node.type == 'text') {
      var text = node.data.trim();
      if (text.length > 0) {
          console.log(text)
      }
    }else{
      console.log(node.type)
    }
  })
}