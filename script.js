let btnInput = (link) =>{
    let url = `https://api.shrtco.de/v2/shorten?url=${link}`
  fetch(url) 
    .then(response => response.json())
    .then(data => UrlData(data.result))
    .catch(error => console.log(error))
}
let shortLink = document.getElementById('shortLink');
let UrlData  = (text) => {
let div = document.createElement('div');
div.classList.add('shortChild');
let p = document.createElement('p')
p.innerText = 'Link generated!'
let a = document.createElement('a')
 a.innerText = text.full_short_link2 
 a.href = text.full_short_link2 
 div.appendChild(p)
 div.appendChild(a)
 shortLink.appendChild(div)
}
let input = () => {
let inputText = document.getElementById('inputText')
let inputValue =  inputText.value;
inputText.value = ''
btnInput(inputValue)
}