function changeBtn(btn) {
    const carouselBtn = document.getElementsByClassName('carouselBtn');
    const carouselImg = document.getElementsByClassName('carouselImg');

    for(i = 0; i < carouselBtn[0].children.length; i++) {
        carouselBtn[0].children[i].className = 'btnCarousel';
        carouselImg[0].children[i].className = 'imgCarousel';
        if (carouselBtn[0].children[i] == btn) {
            carouselImg[0].children[i].className += ' action';
        }
    };

    btn.className += ' btnSelection';
}