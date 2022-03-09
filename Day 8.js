const dog = {}
dog.name = 'mard'
dog.color = 'indigo'
dog.age = 45
dog.bark = 'gbogbogbo'
console.log(dog)
console.log(dog.name)
console.log(dog["color"])
console.log(dog.age)
console.log(dog["bark"])
dog.breed = 'local'
dog.getDogInfo = function(){
    return `its name is ${this.name}, it is ${this.age}years old and ${this.color}skinned color`
}
console.log(dog["getDogInfo"])


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