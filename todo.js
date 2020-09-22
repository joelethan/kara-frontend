// Search
// Pagination....done
// Recipting & Invoicing
// Notification
// Tracking Sales
// settings
// editting
// change passsword
// new password
// planner

// const { default: removeItemById } = require("./src/utils/removeItemById");
// import removeItemById from "./src/utils/removeItemById";
// const removeItemById = require("./src/utils/removeItemById");
const removeItemById = (myArray, id) => {
  return myArray.filter((obj) => {
    return obj.id !== id;
  });
};

let l = [
  { id: "99", name: "Have fun boys and girls" },
  { id: "108", name: "You are awesome!" },
];

// console.log("removeItemById(l)", [
//   { id: "199", name: "Have fun boys and girls" },
//   ...removeItemById(l, "99"),
// ]);

console.log("ghty", ...l);
