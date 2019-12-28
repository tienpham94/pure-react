'use strict' 
// Use strict this will be undefined

// arrow function: this will be whatever it is in surrounding scope
const printThis = () => {
  console.log(this)
}

const fn = printThis.bind(42)
fn()