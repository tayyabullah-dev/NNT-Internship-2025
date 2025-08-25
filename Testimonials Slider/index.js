const imagesEl = document.querySelectorAll(".images");
        const testimonialsEl = document.querySelectorAll(".testimonials");
        const authorEl = document.querySelectorAll(".author")
        let c = 0;
       
            setInterval( () => {
                imagesEl[c].classList.remove("active");
                testimonialsEl[c].classList.remove("active");
                authorEl[c].classList.remove("active")
                c= (c+1) % imagesEl.length;
                imagesEl[c].classList.add("active");
                testimonialsEl[c].classList.add("active");
                authorEl[c].classList.add("active")
               
            },2000);