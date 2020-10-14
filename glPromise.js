// Promises

function sayName(name) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name: "Global Logic"})
        }, 1000) 
    })
}

function greet(nameOfCompany) {
    return new Promise((resolve , reject) => {
      setTimeout(() => {
          resolve({variable: "Hello " + nameOfCompany.name })
      }, 1000)  
    })
}


sayName("Global Logic")
.then(company => greet(company))
.then(greeting => console.log(greeting));





