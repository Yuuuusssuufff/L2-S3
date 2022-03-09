// let firstName = "Yusuf";
// let lastName = "Ajibola";
// let  country = "Nigeria";
// let age = 20;
// let descr = "My name is " + firstName + " " + lastName + ". I am " + age + " years old and from " + country + ".";
// console.log(descr);

// document.
// Revision on function
// console.log("Function Revision");

/*function fullName(firstName, lastName){
    let myName = firstName + " " + lastName
 console.log(myName)
}
fullName('Yusuf', 'Ajibola');*/

/*const fullName = function(firstName, lastName){
    let myName = firstName + " " + lastName
    console.log(myName)
}*/



// const fullName = (firstName, lastName) => {
//     let myName = firstName + " " + lastName
//     console.log(myName)
// }
// fullName('Ajibola', 'Yusuf')



// Day 2 Exercise Level 3
// Question 1
// let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(sentence.match(/love/gi));
// let because = 'You cannot end a sentence with because because because is a conjunction'





// console.log(because.match(/because/gi));
// let sent = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// let characters = sent.replace(/[^A-Z,\s\d]/gi, "").split(' ').reduce((a, cur) => {
//  a[cur] ? a[cur] += 1 : a[cur] = 1
// return a
// } ,{})

// console.log(characters)



// characters = Object.entries(characters)
// console.log(Object.entries(characters).map(val => ({cha: val[0], value :val[1] }))).sort((a , b) => a.value - b.value  )

// .sort((a,b) => b[1] - a[1]))


// console.log(characters.split(" "))
// console.log(sent.replace(/\W/), "")


// DAY 3 EXERCISE
// LWEVEL 1
// let firstName = "Yusuf";
// let lastName = "Ajibola";
// let country = "Nigeria";
// let age = 29;
// let isMarried = true;
// let year =  2021;
// console.log(typeof lastName)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof isMarried)
// console.log(typeof '10' == typeof 10)
// console.log(parseInt('9.8') == 10)
// typeof (4 > 3)
// let yearToday = new Date()
// console.log(yearToday.getYear())
// console.log(yearToday.getMonth())
// console.log(yearToday.getHours())
// console.log(yearToday.getMinutes())
// console.log(yearToday.getSeconds())

// let a = prompt("Enter base")
// let b = prompt("Enter height")
// let c = alert(a*b*0.5)
// console.log(yearToday.getDay().getHours())

// let ages = [19, 22, 19, 234, 74, 24, 40, 89, 14, 9, 50, 89]
// console.log(ages.sort((a,b) => a-b))
// console.log(Math.min(ages))



// HexaColor generator
// const hexaColorGenerator = () => {
//     let string = '0123456789abcdef';
//     let hexaColor = '';
//     for(let i=0; i<6; i++){
//         let index = Math.floor(Math.random() * string.length);
//         hexaColor += string[index]
//     }
//     return '#' + hexaColor
// }
// console.log(hexaColorGenerator())
// for(let i=0; i<=100; i++){
//     let div = body.createElement('div')
//     let background = hexaColorGenerator()
//     div.textContent = background
//     div.style.width = '100px';
//     div.style.heigth = '100px';
//     div.style.background = background
//     body.appendChild(div)

// }

