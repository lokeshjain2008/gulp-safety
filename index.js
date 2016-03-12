'use strict';
var md5 = require('md5');
var fs = require('fs');
var exec = require('child_process').exec;

module.exports = function(bowerNodeFolders) {
  var folders;

  // get the folders to create and md5 of them.
  if (bowerNodeFolders) {
    if(bowerNodeFolders instanceof Array){
      folders =  bowerNodeFolders;
    } else{
      folders = [bowerNodeFolders];
    }

  }
  else{
    folders = ['bower_components','node_modules'];
  }

  // Check if file exists
  if (!fs.existsSync('.project-versions')) {
    console.log('You need to run npm and bower install...');
    // put data using

    exit();
  }


  folders.forEach(function(folder){
     exec('tar c '+folder, function(err,data) {
        return {folder: md5(data)} //
     });
  });

// Note : read  data using JSON.parse(data)
// write data using JSON.stringify(data);
// {new:{
//   bower : "ere",
//   node: "rere"
// },old:{
//   //like ..
// }}


////////// Questions  /////////////////
// How to know when to change md5 of files and data
// when user run `bower install` or `npm install`
// Better to keep track of only
// 'bower.json' and `package.json` of other person has created that thing.
// IF this is done using this way then no, need to keep track of the folders
// For success of this add this file to .gitignore
// that is requried.

}
