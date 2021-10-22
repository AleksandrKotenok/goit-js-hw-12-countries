import _ from 'lodash'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
import { alert, notice, info, success, error } from '@pnotify/core'
import '../sass/main.scss'
import table from '../template/markup.hbs'
import picture from '../template/picture.hbs'
const search = document.getElementById('search')
const insertData = document.getElementById('insert')
import API from './fetchCountries'
search.addEventListener('input', _.debounce(() =>
   {
      API(search.value).then((allCountry) => insertData.insertAdjacentHTML('beforeend', createMarkup(allCountry)))
   }, 500))
function createMarkup(allCountry) {
   switch (true) {
      case allCountry.length > 10:
         insertData.innerHTML = ''
      console.log(`это > 10  не показываем, и =`,allCountry.length)
         inform()
         return insertData.innerHTML = ''
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
      case allCountry.status == 404:
         err()
         console.log(`нет совпадений, ответ сервера:`,allCountry)
         return insertData.innerHTML = ''
      default: return insertData.innerHTML = ''
   }
}
function inform() {
   info({
      title: "INFO!",
      text: "Too many matches found. Please enter a more specific query."
   })
}
function err() {
   error({
     title: "ERROR!",
     text: "No matches on request."
  })
}