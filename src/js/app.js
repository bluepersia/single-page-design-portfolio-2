const sliderContent = document.querySelector ('.work__content');
const sliderBtnLeft = document.querySelector ('.work__btn--left');
const sliderBtnRight = document.querySelector ('.work__btn--right');

let sliderIndex = 2;
const sliderLength = 5;


sliderBtnLeft.addEventListener ('click', slidePrev);
sliderBtnRight.addEventListener ('click', slideNext);

function getIndex (index)
{
    if (index < 0)
        index = sliderLength + index;
    else if (index > (sliderLength - 1))
        index -= sliderLength;

    return index;
}

function getImgUrl (index)
{
    return `./assets/image-slide-${index + 1}.jpg`;
}

function slidePrev ()
{
    if(sliderContent.classList.contains ('slide-to-left') || sliderContent.classList.contains ('slide-to-right'))
        return;

    sliderIndex = getIndex (sliderIndex - 1);

    sliderContent.innerHTML = `
    <img src='${getImgUrl (getIndex (sliderIndex - 1))}' alt='Slider image' class='work__img'/>` + sliderContent.innerHTML;

    sliderContent.classList.add ('work__content--slide-to-left');
    setTimeout (() => {
        renderSlider ();
        sliderContent.classList.remove ('work__content--slide-to-left');
        
    }, 500);
}

function slideNext ()
{
    if(sliderContent.classList.contains ('slide-to-left') || sliderContent.classList.contains ('slide-to-right'))
        return;

    sliderIndex = getIndex (sliderIndex + 1);

    sliderContent.innerHTML = sliderContent.innerHTML + `<img src='${getImgUrl (getIndex (sliderIndex + 1))}' alt='Slider image' class='work__img'/>`;

    sliderContent.classList.add ('work__content--slide-to-right');
    setTimeout (() => {
        renderSlider ();
        sliderContent.classList.remove ('work__content--slide-to-right');
        
    }, 500);
}

renderSlider ();

function renderSlider ()
{
    const prevIndex = getIndex (sliderIndex - 1);
    const index = getIndex (sliderIndex);
    const nextIndex = getIndex (sliderIndex + 1);

   
    sliderContent.innerHTML = `
    <img src='${getImgUrl (prevIndex)}' alt='Slider image' class='work__img'/>
    <img src='${getImgUrl (index)}' alt='Slider image' class='work__img'/>
    <img src='${getImgUrl (nextIndex)}' alt='Slider image' class='work__img'/>
    `
}