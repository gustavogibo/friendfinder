// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    customerName: "Dwight",
    photo: "https://pbs.twimg.com/profile_images/1863312401/Dwight.jpg",
    scores: [3,5,3,2,2,3,1,4,5,5]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
