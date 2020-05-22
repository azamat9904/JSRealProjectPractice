const images = ()=>{
    const imgPopup = document.createElement('div'),
        workStation = document.querySelector('.works'),
        bigImg = document.createElement('img');
    imgPopup.classList.add('popup');
    imgPopup.appendChild(bigImg);
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    workStation.appendChild(imgPopup);
    workStation.addEventListener('click',(e)=>{
        e.preventDefault();
        let target = e.target;
        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src',path);
        }
        if(target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
        }
    })
}
export default images;
