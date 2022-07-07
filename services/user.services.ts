const repository = require("../repository/base/base.repository");
const model = require("../models/user.models")
const {mongoose}= require("mongoose");
var User = mongoose.model("User" );

function createTestData(user1: any) {
  return new Promise(function(resolve, reject) {
    let user = new User(user1);// user1 is a object to be saved
    repository
      .create(user)
      .then((data: any) => {
        resolve({
          data: data
        });
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}


module.exports= {
    createTestData

}
export{}