Recursive DOM traversal using htmlparser2.

## Getting Started
Install the module with: `npm install walkers`

```javascript
var walkers = require('../lib/walkers.js');
var request = require('request');
var htmlparser = require("htmlparser2");

request('http://example.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var handler = new htmlparser.DomHandler(function (error, dom) {
      if (error) console.log(err)
      else {

        walkers.walk(dom, true, function(node){
          //Do something with node
        }, function(){
          //Do something when finished walking
        })

      }
    });
    var parser = new htmlparser.Parser(handler);
    parser.write(body);
    parser.done();
  }
})
```

## License
Copyright (c) 2015 Sterling Jordan Calder  
Licensed under the MIT license.
