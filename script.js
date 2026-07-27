/* =========================================
   SOUTHPAW HANDMADE
   Gentle Page Interactions
========================================= */


document.addEventListener("DOMContentLoaded", () => {


    // Add animation class to elements we want to reveal

    const animatedElements = document.querySelectorAll(
        "section, .pillar, .feature-image, .feature-content, .journal article"
    );


    animatedElements.forEach(element => {

        element.classList.add("fade-section");

    });



    // Reveal sections when they enter the viewport

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );



    animatedElements.forEach(element => {

        observer.observe(element);

    });





    // Smooth scroll for internal links

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );


            if(target){

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });


});
