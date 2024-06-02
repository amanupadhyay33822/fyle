// function redirectToURL(url) {
//     window.open(url, '_blank');
// }
// function changeImage(newSrc) {
//     document.getElementById('project-image').src = newSrc;
// }
// function preloadImage(url) {
//     var img = new Image();
//     img.src = url;
// }

// function changeImage(newSrc) {
//     var projectImage = document.getElementById('project-image');
//     projectImage.style.opacity = '0'; // Hide the image while loading

//     setTimeout(function() {
//         projectImage.src = newSrc;
//         projectImage.style.opacity = '1'; // Show the image after loading
//     }, 0); // Instantly change the image source
// }
// document.addEventListener("DOMContentLoaded", function () {
//     const serviceItems = document.querySelectorAll(".service-item");
//     const dots = document.querySelectorAll(".dot");

//     function updateDots(index) {
//         dots.forEach((dot) => {
//             dot.classList.remove("active");
//         });
//         dots[index].classList.add("active");
//     }

//     serviceItems.forEach((item) => {
//         item.addEventListener("click", (event) => {
//             event.preventDefault(); // Prevent the default action
//             const index = item.getAttribute("data-index");
//             updateDots(index);
//         });
//     });

//     dots.forEach((dot) => {
//         dot.addEventListener("click", (event) => {
//             event.preventDefault(); // Prevent the default action
//             const index = dot.getAttribute("data-index");
//             updateDots(index);

//             serviceItems.forEach((item) => {
//                 item.classList.remove("highlighted");
//                 if (item.getAttribute("data-index") === index) {
//                     item.classList.add("highlighted");
//                 }
//             });
//         });
//     });

//     // Update href attribute of read more button
//     const readMoreButton = document.querySelector('.read-more-button');
//     readMoreButton.href = "https://www.fylehq.com";
// });


function redirectToURL(url) {
    window.open(url, '_blank');
}

function changeImage(newSrc) {
    var projectImage = $('#project-image');
    projectImage.css('opacity', '0'); // Hide the image while loading

    setTimeout(function() {
        projectImage.attr('src', newSrc);
        projectImage.css('opacity', '1'); // Show the image after loading
    }, 0); // Instantly change the image source
}

function preloadImage(url) {
    var img = new Image();
    img.src = url;
}

$(document).ready(function () {
    const serviceItems = $(".service-item");
    const dots = $(".dot");

    function updateDots(index) {
        dots.removeClass("active");
        dots.eq(index).addClass("active");
    }

    serviceItems.on("click", function (event) {
        event.preventDefault(); // Prevent the default action
        const index = $(this).data("index");
        updateDots(index);
    });

    dots.on("click", function (event) {
        event.preventDefault(); // Prevent the default action
        const index = $(this).data("index");
        updateDots(index);

        serviceItems.removeClass("highlighted");
        serviceItems.each(function () {
            if ($(this).data("index") === index) {
                $(this).addClass("highlighted");
            }
        });
    });

    // Update href attribute of read more button
    $('.read-more-button').attr('href', 'https://www.fylehq.com');
});
