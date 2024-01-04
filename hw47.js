// var codes = [
//     { code: 6, country: "Польща" },
//     { code: 38, country: "Україна" },
//     { code: 1, country: "США" }
//   ];

//   console.log(codes)  
// або так
var codes = {
    "+6": "Польща",
    "+38": "Україна",
    "+1": "США"
  };
Object.entries(codes).forEach(([key,value]) => {
    console.log(key + ":" + value);
});

// або так
  