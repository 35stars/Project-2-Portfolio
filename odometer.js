

	odometer()
	function odometer() {
	    let values = document.querySelectorAll('.progress-bar');
	    
	    values.forEach(value => {
	        let startValue = 0;
	        let endValue = parseInt(value.innerText);

	        let counter = setInterval(function (){
	            startValue += 1
	            value.innerText = startValue+'%';

	            if (startValue == endValue) {
	                clearInterval(counter);
	            }
	        },80);
	    })
	}