// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
    name: "Dwight",
    photo: "https://pbs.twimg.com/profile_images/1863312401/Dwight.jpg",
    answers: [3,5,3,2,2,3,1,4,5,5]
  },
  {
    name: "Edward",
    photo: "https://i.pinimg.com/originals/d1/1e/8a/d11e8ad5b7cd44b8449c2c283c0ec59a.jpg",
    answers: [2,1,1,2,2,3,1,4,2,5]
  },
  {
    name: "LeBron James",
    photo: "https://i1.wp.com/www.nationalreview.com/wp-content/uploads/2018/05/RTX66A5E.jpg",
    answers: [4,1,3,1,2,1,1,4,5,5]
  },
  {
    name: "Farley",
    photo: "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
    answers: [2,5,2,5,5,1,4,5,5,1]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
