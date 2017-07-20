$(document).ready(function(){
  $('.sl').slick({
  	
  	dots: true,
  	arrows: true,

  	
  	responsive: [
	    {
	      	breakpoint: 2000,
	      	settings: {
		        arrows: true,
		        centerPadding: '20px',
		        slidesToShow: 3,
		        slidesToScroll: 3
	      	}
	    },

	    {
	    	breakpoint: 1200,
	    	settings: {
	    		arrows: false,
	    		slidesToShow: 2,
	        	slidesToScroll: 2
	    	}
	    },

	    {
	      	breakpoint: 800,
	      	settings: {
		        arrows: false,
		        centerMode: true,
		        focusOnSelect: true,
		        centerPadding: 0,
		        slidesToShow: 1,
		        slidesToScroll: 1
	      }
	    }
  	]
  });
  
});

/*document.getElementsById('nav').onmouseover = function(event) {
	var target = event.target;
	if (target.className == 'menu-item') {
		var s = target.getElementsByClassName('submenu');
		closeMenu();
		s[0].style.display = 'block';
	}
}

document.onmouseover = function (event) {
	var target = event.target;
	console.log(event.target);
	if (target.className!='menu-item' && target.className!='submenu') {
		closeMenu();
	}
}

function closeMenu() {
	var menu = document.getElementsById('nav');
	var subm = document.getElementsByClassName('submenu');
	for (var i=0; i < subm.length; i++) {
		subm[i].style.display = "none";
	}
}
*/
