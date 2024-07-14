function changeAboutText()
{
    const aboutText=["Web developer","UI designer","Python Developer","Machine Learning"];
    const typingSpeed=100;
    const eraseSpeed=50;
    const pauseTime=1500;
    const aboutElement=document.querySelector('.about');

    let textIndex=0;
    let charIndex=0;
    let isDeleting=0;

    function type()
    {
        const currentText=aboutText[textIndex];
        /*typing*/

        if(!isDeleting && charIndex<currentText.length)
        {
            aboutElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type,typingSpeed);
        }

        /*erasing*/
        
            else if(isDeleting && charIndex>0)
            {
                aboutElement.textContent=currentText.substring(0, charIndex-1);
                charIndex--;
                setTimeout(type,eraseSpeed);
            }

            else{
                isDeleting=!isDeleting;
                if (!isDeleting){
                    textIndex=(textIndex+1)%aboutText.length;
                }
                setTimeout(type,pauseTime);
            }
        
    }

    type();
}

changeAboutText();