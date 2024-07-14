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

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun'); // Change icon
        darkModeToggle.querySelector('i').classList.toggle('fa-moon'); // Change icon
        darkModeToggle.querySelector('i').classList.toggle('light-mode'); // Change icon color
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;
                
                progressBar.style.setProperty('--progress', `${progress}%`); // Set custom property for progress
                progressBar.classList.add('animated'); // Add a class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    });

    const programmingLanguages = document.querySelectorAll('#programming-languages .skill');
    programmingLanguages.forEach(skill => {
        observer.observe(skill);
    });
});

