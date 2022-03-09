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
const countriesWithLand = countries.filter(country => country.includes("land"))
console.log(countriesWithLand)
const countriesWithSixLetters = countries.filter(function(country){if(country.length === 6){return country}})
console.log(countriesWithSixLetters)
const countryStarts = countries.filter(country => country.startsWith("E"))
console.log(countryStarts)
products.filter(price => )

let ashes = ''
for(let i=0; i<10; i++){
    ashes += "#"
    console.log(ashes)
}


