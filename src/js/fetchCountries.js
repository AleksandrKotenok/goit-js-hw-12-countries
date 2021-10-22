export default function fetchCountries(searchQuery) {
   const url = `https://restcountries.com/v2`
   const methodName = `name`
   return fetch(`${url}/${methodName}/${searchQuery}`)
      .then(resp => resp.json())
      .catch(err => alert(err))
}
