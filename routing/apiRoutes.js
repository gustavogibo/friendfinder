
var friends = require("../app/data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {

      var newFriend = req.body;
      var newFriendScore = newFriend.answers.map(Number);
      var bestMatchIndex = 0
      var lowestScore = sumValuesArrays(newFriendScore, friends[0].answers);


      for (let index = 1; index < friends.length; index++) {
        
        if(lowestScore > sumValuesArrays(newFriendScore, friends[index].answers)) {

          lowestScore = sumValuesArrays(newFriendScore, friends[index].answers);
          bestMatchIndex = index;

          
        }

      }

      friends.push(req.body);


      res.json(friends[bestMatchIndex]);
  });

  
};

function sumValuesArrays(arr1, arr2) {
  var total = 0;
  for (let index = 0; index < arr1.length; index++) {

    total += Math.abs(parseInt(arr1[index]) - parseInt(arr2[index]));
    
  }

  return total;

}
