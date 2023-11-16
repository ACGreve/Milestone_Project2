//Current date object info From google search how to get the current date in javascript
let today: any = new Date()
let day: any = String(today.getDate()).padStart(2, '0')
let month: any = String(today.getMonth()+1).padStart(2, '0')
let fullYear: any = today.getFullYear()

//how to get current time in javascript from Google search
let time: any = new Date()
let currentTime: any = time.getHours() + ':' + time.getMinutes() + ":" + time.getSeconds()

today= `${month}/${day}/${fullYear} at ${currentTime}`
console.log(today)
module.exports=[
{
title: 'Avengers review',
name: 'Brandon',
comment:'Hi i loved this movie',
dateMade: today
},
{
  title: 'Barbie review',
  name: 'Amelia',
  comment:'Loved this movie',
  dateMade: today
  },
{
  title: 'Spongebob review',
  name: 'Nate',
  comment:'Hated this movie',
  dateMade: today
}
]