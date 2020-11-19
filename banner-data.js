const bannerData = [
    "Bugünün işini sabaha qoyma!",
    "Adam ol!",
    "Başını buraxma!"
]

let bannerContent = document.querySelector('.banner-content')
let i = 0;
setInterval(() => {
    let textNode = document.createTextNode(bannerData[i]);
    bannerContent.appendChild(textNode);
    i<bannerData.length-1 ? i++ : i=0;
    setTimeout(() => {
        bannerContent.removeChild(textNode)
    }, 2000);
}, 3000);


