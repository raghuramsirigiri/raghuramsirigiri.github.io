// const menu = document.querySelector('.menu');
// const close = document.querySelector('.close');
// const nav = document.querySelector('nav');
// const body = document.querySelector("body");



$(document).ready(function(){
    
    $(".menu").click(function(){
        $("nav").toggleClass("open-nav");
        console.log(1);
    });

    $(".close").click(function(){
        $("nav").toggleClass("open-nav");
    });
    
    
    $(".trigger").click(function(){
        // console.log($(this).data("modal"));
        $("body").css('overflow', 'hidden');
        let tar = $(this).data("modal");
        $(tar).toggleClass("show-modal");
    });

    $(".close-button").click(function(){
        $("body").css('overflow', 'auto');
        $(this).parent().parent().parent().toggleClass("show-modal");
    });



  });

// menu.addEventListener('click', () => {
//     nav.classList.toggle('open-nav')
// })

// close.addEventListener('click', () => {
//     nav.classList.toggle('open-nav')
// })


// $(document).ready(function(){
//     $(".trigger").click(function(){
//     //   $("#myModal").modal();
//     console.log(1);
//     });
//   });




// function toggleModal(e) {
//     const tar = e.target.getAttribute('data-modal');
//     if(tar){
//         body.style.overflow = "hidden";
//         document.getElementById(tar).classList.toggle("show-modal");
//     }else{
//         body.style.overflow = "auto";
//         e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle("show-modal");
//     }
// }

// function windowOnClick(event) {
//     console.log(event.target.classList[0]);
//     if (event.target.classList[0] === "modal") {
//         event.target.classList.toggle("show-modal");
//     }
// }

// document.querySelectorAll('.trigger').forEach(item => {
//     item.addEventListener("click", toggleModal);
// })

// document.querySelectorAll('.close-button').forEach(item => {
//     item.addEventListener("click", toggleModal);
// })

// window.addEventListener("click", windowOnClick);
