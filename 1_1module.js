const secret = "SUPER SECRET"
const john = 'john'
const peter = 'peter'
const a = 10;
const b = 10;
const names = ['john', 'peter']
function addSum(){
    console.log(a + b)
}
addSum()
module.exports = {names, addSum}

console.log(names)