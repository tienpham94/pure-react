'use strict' 

function printThis(){
  console.log(this)
}

const fn = printThis.bind(42)
fn()