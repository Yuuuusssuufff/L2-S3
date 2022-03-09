// Exercises on Day-9 in 30-DAYS OF JAVASCRIPT
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const callback = function(item){console.log(item)}
let countriesNames = countries.forEach(callback)
console.log(countriesNames)
console.log(numbers.forEach(callback))
console.log(names.forEach(callback))
const newNames = names.map(item => item.toUpperCase())
console.log(newNames)

