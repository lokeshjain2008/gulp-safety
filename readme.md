## Project to keep your node project safe.
---
### Introduction
There are times when you are working on the large project. One of your colleauge may bump version of library and you even don't notice but see some bug.
Like in our project we bump the version of `bootstrap` css and some of the new class needed to make project work correctly. 
But other team in different timezone had no idea about this. They some starge behaviour on the UI. Finally, they messed a lot. Who to blame?
---
little script help us

```javascript

var md5 = require('md5');
var exec =  require('child_process').exec;

exec('tar c bower_compnonets',(err,data)=>{
  console.log(err);
  console.log(md5(data));
})


```


