function biggestNumber(list) {
let biggest = list[0]
for (let i = 1; i < list.length; i++) {
if (list[i] > biggest) {
biggest = list[i]
}
}
return biggest
}

console.log(biggestNumber([1]), '-->', 1)
console.log(biggestNumber([4]), '-->', 4)
console.log(biggestNumber([1, 2]), '-->', 2)
console.log(biggestNumber([1, 2, 3]), '-->', 3)
