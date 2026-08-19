

const sections = document.querySelectorAll('.heading')


function isVisible(el){

	let rect = el.getBoundingClientRect()

	return rect.top <= innerHeight
}


for(let section of sections) {

	section.style.position = 'relative'
	section.style.left = '-100%'
	section.style.transition = '1s ease-in-out'

	window.addEventListener('scroll',()=>{

		if(isVisible(section)){

			section.style.left = 0
		}
	})
}