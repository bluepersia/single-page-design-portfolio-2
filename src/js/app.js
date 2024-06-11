const sliderContent = document.querySelector ('.work__content');

let sliderIndex = 2;
const sliderLength = 5;

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