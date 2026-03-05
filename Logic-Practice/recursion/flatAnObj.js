let obj = {
    name: "kuldeep",
    age: 20,
    address: {
        city: "udaipur",
        pincode: 202020
    },
};

function flatten(obj, parent = "", res = {}) {

  for (let key in obj) {

    let propName = parent ? `${parent}_${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      flatten(obj[key], propName, res);//recursion
    } else {
      res[propName] = obj[key];
    }

  }

  return res;
}
console.log("flat object:", flatten(obj)); 
