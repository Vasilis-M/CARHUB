const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid') [0];

input.addEventListener('keydown', function(event){
    if(event.key === 'enter')
    loadIMG();
})

function loadIMG(){
    removeImages();

    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=20&client_id=gmaTnQOTlqGH5lXDlfRfc30Bqf1Pu9T59iYLt7aeNM4';

    fetch(url)

    .then(response =>{
        if(response.ok)
        return response.json();
        else
        alert(response.status)
    })

    .then(data =>{
        const imageNodes = [];
        for(let i = 0; i < data.results.length;i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
            imageNodes[i].addEventListener('dblclick',function(){
                window.open(data.results[i].links.download,'_blank')
            })
            grid.appendChild(imageNodes[i]);
        }
    })
}

function removeImages(){
  grid.innerHTML ='';  
}
