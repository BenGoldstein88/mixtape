fs = require("fs")

var fileName = "./secret-config.json"
var config

try {
  config = require(fileName)
}
catch (err) {
  config = {}
  console.log("unable to read file '" + fileName + "': ", err)
  console.log("see secret-config-sample.json for an example")
}

console.log("test secret is:", config.testSecret)
console.log("Spotify Client Secret is: ", config.SPOTIFY_CLIENT_SECRET)