


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


