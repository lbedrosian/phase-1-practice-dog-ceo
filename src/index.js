console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
let allBreedsList = []  
//fetch for the images of the dogs
fetch(imgUrl)
.then(response => response.json())
.then(data => {
    data.message.forEach(image => {
     renderImg(image)
        })
    });
//this gets the images and places them
    const renderImg = (dogUrl) => {
    const imgContainer = document.getElementById('dog-image-container')
    const imgElement = document.createElement('img')
    imgElement.src = dogUrl
    imgContainer.appendChild(imgElement)
};
//fetch for the breed url
fetch(breedUrl)
.then(response => response.json())
.then(data => {
     allBreedsList = Object.keys(data.message)
     allBreedsList.forEach(breedName => {
        addBreedName(breedName)
        })
    })
//
const addBreedName = (breedName) => {
    const breedsUlList = document.getElementById('dog-breeds')
    let newLi = document.createElement('li')
    newLi.innerText = breedName
    newLi.className = 'dogBreed'
    breedsUlList.append(newLi)    
    breedsUlList.addEventListener('click', (e) => {
        e.target.style.color = 'lightblue'
    })
};
const breedDropdown = () => {
    const breedSelect = document.querySelector('#breed-dropdown');
    const breedsUlList = document.getElementById('dog-breeds');
    breedSelect.addEventListener('change', (e) => {
        const filterLetter = e.target.value
        const filteredBreedsList = allBreedsList.filter(name => name.charAt(0) === filterLetter);
        removeAllChildNodes(breedsUlList);
        filteredBreedsList.forEach(breedName => {
            addBreedName(breedName)
        })
    });
}
//"The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
//without waiting for stylesheets, images, and subframes to finish loading"
document.addEventListener('DOMContentLoaded', (e) => {
    loadImgUrl();
    allBreeds();
    breedDropdown();
});  