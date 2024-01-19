// Navigation logic
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click',()=>
{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click',()=>
{
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link')


function linkAction()
{
    navMenu.classList.remove('show')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))


const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive()
{
    const scrollY = window.pageYOffset
    sections.forEach(current => 
        {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.pageoffsetTop - 50
            sectionID = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' +sectionID +']').classList.add('active')
            }else{
                document.querySelector('.nav__menu a[href*=' +sectionID +']').classList.remove('active')
            }
        })
}

// Download files (filler files) when user presses the icons in projects section
var downloadIconChibog = document.getElementById("downloadIconChibog");

    downloadIconChibog.addEventListener("click", function() {
        
        var downloadLink = document.createElement("a");
        downloadLink.download = "Chibogers.txt";
        downloadLink.href = "/assets/Chibogers.txt";

        
        downloadLink.click();
    })


var downloadIconWord = document.getElementById("downloadIconWord");

    downloadIconWord.addEventListener("click", function() {
        var downloadLink = document.createElement("a");
        downloadLink.download = "4 Pics, 1 Word.txt"; 
        downloadLink.href = "/assets/4 Pics, 1 Word.txt"; 
        downloadLink.click();
    });


var downloadIconKids = document.getElementById("downloadIconKids");

    downloadIconKids.addEventListener("click", function() { 
        var downloadLink = document.createElement("a");
        downloadLink.download = "KIDS(Knowledge Image Dynamic System).txt";
        downloadLink.href = "/assets/KIDS(Knowledge Image Dynamic System).txt";
        downloadLink.click();
    });
