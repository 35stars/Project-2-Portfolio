

document.addEventListener('DOMContentLoaded', function(){

	const progressBars = document.querySelectorAll('.progress-bar')

	progressBars.forEach(bar=> {
		
		bar.style.width = 0
	})


	function isInViewPort(el){
		const rect = el.getBoundingClientRect()
		return rect.top <= window.innerHeight && rect.bottom >= 0;	
	}

	
	window.addEventListener('scroll',function(){

	const skillSection = document.querySelector('#skills')

		if(isInViewPort(skillSection)){

			progressBars.forEach(bar => {

				let width = parseInt(bar.textContent)
 
				bar.style.width = width+'%'
			})
		} 
		else {

			progressBars.forEach(bar => {
				bar.style.width = 0
			})
		}
	})
})


