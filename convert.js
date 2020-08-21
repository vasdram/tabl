const fs = require("fs")
const path = require("path")

const setArr = (file) => {
  return file.toString().split("СекцияДокумент=Платежное поручение");
}

const getData = (arr) => {
  const data = arr.map((item) => {
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

  return data
}

const convert = (file) => {
  const fileData = fs.readFileSync(path.join(__dirname + '/routes/uploads/' + file));
  const arr = setArr(fileData)

  return getData(arr)


}



module.exports = convert
