


const navLinks = document.querySelectorAll('.nav-links')

const mainNav = document.getElementById('mainNav')

const navbar = document.querySelector('navbar')

const menuBtn = mainNav.previousElementSibling



for(link of navLinks){

	link.onclick=()=>{
		mainNav.classList.remove('show')	
	}
}

window.addEventListener('keydown',(e)=>{

    if(e.key == 'Escape')
       mainNav.classList.remove('show') 
})

menuBtn.addEventListener('click',()=>{
    mainNav.classList.toggle('show')
})    

mainNav.addEventListener('mouseover', (e) => {

    if (e.target.tagName !== 'A') return;

    // Ignore dropdown links
    if (e.target.closest('#drop-down')) return;

    window.location.href = e.target.getAttribute('href');
});


