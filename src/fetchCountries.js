import _, { padStart } from 'lodash'
import './sass/main.scss'
import table from './template/markup.hbs'
import tooMany from './template/toMany.hbs'
const search = document.getElementById('search')
const insertData = document.getElementById('insert')
console.log(search);
search.style.background = 'red'
const url = `https://restcountries.com/v2`
const methodName = `name`
search.addEventListener('input', _.debounce(() =>
   {
      fetch(`${url}/${methodName}/${search.value}`)
         .then((response) => response.json())
         .then((allCountry) => insertData.insertAdjacentHTML('beforeend', createMarkup(allCountry)))
   }, 500))

function createMarkup(allCountry) {
   switch (true) {
      case allCountry.length > 10:
         insertData.innerHTML = ''
      console.log(`это > 10  не показываем, и =`,allCountry.length)
         return tooMany(allCountry)
         break
      case allCountry.length > 1 && allCountry.length <= 10:
         insertData.innerHTML = ''
         console.log(`1 < это <= 10 список,  и =`, allCountry.length)
         return table(allCountry)
         break
      case allCountry.length == 1:
         insertData.innerHTML = ''
         console.log(` это=1 с картинкой, и =`,allCountry.length)
         return table(allCountry)
         break
   }
   // if (allCountry.length > 10)
   //    {
   //    insertData.innerHTML = ''
   //    console.log(`это > 10`,allCountry.length)
   //       return tooMany(allCountry)
   //    }
   // else if ( allCountry.length > 1 && allCountry.length <= 10)
   //    {
   //    insertData.innerHTML = ''
   //    console.log(`1 < это <= 10`,allCountry.length)
   //       return template(allCountry)
   //    }
   // else (allCountry.length == 1)
   //    {
   //    insertData.innerHTML = ''
   //    console.log(` это =1`,allCountry.length)
   //       return template(allCountry)
   //    }
   }
   

