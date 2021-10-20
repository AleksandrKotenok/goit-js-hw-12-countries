import _, { padStart } from 'lodash'
//import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify'
//import * as PNotifyDesktop from '@pnotify/desktop'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
//import '@pnotify/mobile/dist/PNotifyMobile.css'
import { alert, notice, info, success, error } from '@pnotify/core'
import './sass/main.scss'
import table from './template/markup.hbs'
//import tooMany from './template/toMany.hbs'
import picture from './template/picture.hbs'
const search = document.getElementById('search')
const insertData = document.getElementById('insert')


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
         
         err()
         return insertData.innerHTML = ''
         //return tooMany(allCountry)
         break
      case allCountry.length > 1 && allCountry.length <= 10:
         insertData.innerHTML = ''
         console.log(`1 < это <= 10 список,  и =`, allCountry.length)
         return table(allCountry)
         break
      case allCountry.length == 1:
         insertData.innerHTML = ''
         console.log(` это=1 с картинкой, и =`,allCountry.length)
         return picture(allCountry)
         break
      default: return insertData.innerHTML = '' 
   }
}
function err() {
   const myError = info({
      text: "Too many matches found. Please enter a more specific query."
   })
}