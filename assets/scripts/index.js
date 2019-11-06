
        let counter_adults = document.getElementById('counter_adults');
        let counter_children = document.getElementById('counter_children');
       // console.log(counter);

        let button = document.getElementsByClassName('counter__btn');
      

       
        button[0].addEventListener("click", () => {
        	if(counter_adults.innerText>=1){
          		counter_adults.innerText-=1
        	}
         });

        button[1].addEventListener("click", () => {
        	let x = parseInt(counter_adults.innerText);
        	counter_adults.innerText=++x;
        	});

        button[2].addEventListener("click", () => {
        	if(counter_children.innerText>=1){
          		counter_children.innerText-=1
        	}
         });

        button[3].addEventListener("click", () => {
        	let x = parseInt(counter_children.innerText);
        	counter_children.innerText=++x;
        	});