const fs = require('fs');

getModelArray = function(dir, callback) {
  var fileArray = [];
  fs.readdir(dir, (err, files) => {
    files.forEach(function (value, i) {
      var fileObject = {
        id: i,
        text: value
      };
      fileArray.push(fileObject);
    });
    callback(fileArray);
  });
}

module.exports = {
  getModelArray
}
