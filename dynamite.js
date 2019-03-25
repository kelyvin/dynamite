var Q = require('kew')

Q.Promise.prototype.catch = Q.Promise.prototype.fail
// This is done to support promse A+ spec compatibility
// for dynamite promises that are based on kew

module.exports = {
  Client: require('./lib/Client'),
  FakeDynamo: require('./lib/FakeDynamo'),
  ConditionBuilder: require('./lib/ConditionBuilder')
}
