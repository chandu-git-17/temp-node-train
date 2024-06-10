// const a = 15
// if(a < 1)
//     console.log("small number");
// else
//     console.log("large number" + a);
// console.log(__filename)
// console.log(__dirname)
// const s = (name) => {
//      console.log(`hi ${name}`)
//     }
// s(a)
// const an = (edo) => `${edo}`
// console.log(an('chandu'))
// const names = require('./1_1module')
// const sayHi = require('./1_2module')

 
// // console.log(names[0])
// // sayHi(names[0])
// // sayHi("susan")
// const n = module.require('./1_1module')
// console.log(n[0] + ' ' + n[1])
// const os = require('os')
// console.log('the os uptime is ' + os.uptime())
// const http = require('http')
// const server = http.createServer((req, res) => {
//     if(req.url === '/')
//         {
//             res.end("welcome")
//         }
//     if(req.url === "/about")
//         {
//             res.end("this is about page")
//         }
//     res.end(
//         `<h1> "this is not the page you are looking for" </h1>
//         <a href = '/'> "Home page" </a>`
//     )
// })
// server.listen(5000)   


//npm init -y in terminal for package.json
// for installing the dependencies 
    // npm i package_name
    // ex : npm i lodash   
const a = require('lodash')
const li = [1,[2,[3,[4]]]]
console.log(a.flatMapDeep(li))
