//using recursion

let person = {
    name: "kuldeep",
    age: 20,
    address: {
        city: "udaipur",
        pincode: 202020
    },
};

function flattenAnObject(obj, parent = "", res = {}) {

    for (let key in obj) {

        let propName = parent ? parent + "_" + key : key;

        if (typeof obj[key] === "object" && obj[key] !== null) {
            flattenAnObject(obj[key], propName, res);
            console.log()
        } 
        else {
            res[propName] = obj[key];
        }
    }

    return res;
}

console.log("flat object:", flattenAnObject(person));//recursion







//the second one work with array also

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
      flatten(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }

  }

  return res;
}

console.log("flat object:", flatten(obj));//recursion