const accessKey = 'lmzBI3RIMCUvB39KWmG6k7guT85zsDMMW-Wtkim-pCM';
const listPhoto = document.querySelector('.img-content')
const input = document.querySelector('input')
const button = document.querySelector('img')
let textInput = input.value;


window.onload = () => {
   getPhoto()
}


const getPhoto = async () => {
   let textInput = input.value;
   const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=1&query=${textInput}`;
   const response = await fetch(url);
   const data = await response.json();
   console.log(data.results)

   const showPhoto = (data) => {
      for (let key in data) {
         listPhoto.innerHTML =
            `<img src="${data[key].urls.regular}" alt="random-photo" class="img" width='350'>`
      }
   }
   showPhoto(data)
};
button.addEventListener('click', getPhoto)



