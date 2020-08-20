const fs = require("fs")
const path = require("path")


const file = fs.readFileSync("./test.txt");

const setArr = (file) => {
  return file.toString().split("СекцияДокумент=Платежное поручение");
} 

const arr = setArr(file)

const testArr = arr.map((item) => {
  let o = {}
  let i  = item.split("\r\n")

  i.map((item) => {
    if( item.indexOf("=") === -1 ) return;
    const index = item.indexOf("=") 
    // console.log( item.indexOf("=") )
    o[item.slice(0, index)] = item.slice(index + 1)
  })
  return o
})

module.exports = testArr
//console.log(testArr[1],testArr[3])