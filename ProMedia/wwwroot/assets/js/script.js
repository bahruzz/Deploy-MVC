"use-strict"
$(document).ready(function () {


  // $(function () {
  //   console.log("geldi");
  //   $("#datepicker").datepicker();
  //   console.log("geldi");
  // });


  // MenuHeader Carousel Start Part
  $("#owl-carousel").owlCarousel(
    {
      nav: true,
      navText: [`<i class="fa fa-angle-double-left" style="font-size:36px"></i>`, `<i class="fa fa-angle-double-right" style="font-size:36px"></i>`],
      dots: false,
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    }
  );

  // MenuHeader Carousel End Part


  // Numbers Start Part

  $(".num").counterUp({ delay: 20, time: 2000 });

  // Numbers End part




  // setTimeout(function () {
  //   console.log("corusel");

  //   $("#owl-carousel2").owlCarousel({
  //     nav: true,
  //     navText: [`<i class="far fa-long-arrow-left"></i>`, `<i class="fas fa-long-arrow-right"></i>`],
  //     dots: false,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       1000: {
  //         items: 3
  //       }
  //     },
  //     loop: true,
  //     autoplay: true,
  //     autoplayTimeout: 3000,
  //     autoplayHoverPause: true
  //   }
  //   );
  // }
  //   , 3000)


  // $.ajax({
  //   type: "GET",
  //   url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors",
  //   success: function (response) {
  //     $.each(response, function (i, e) {
  //       console.log(e.id);

  //       let box = $("<div/>", {
  //         class: 'box',
  //         html: `
  //        <div class="imgbox">
  //            <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${e.image}" alt="">
  //            <div class="hover-social">
  //                               <div class="d-table">
  //                                   <div class="d-tablecell">
  //                                       <ul>
  //                                           <li> 
  //                                               <a href="#">
  //                                               <i class="fab fa-linkedin"></i>
  //                                               </a>
  //                                           </li>
  //                                           <li> 
  //                                               <a href="#">
  //                                               <i class="fab fa-twitter"></i>
  //                                               </a>
  //                                           </li>
  //                                           <li> 
  //                                               <a href="#">
  //                                               <i class="fab fa-facebook-f"></i>
  //                                               </a>
  //                                           </li>
  //                                       </ul>
  //                                   </div>
  //                               </div>
  //                           </div>
  //        </div>
  //        <div class="txtbox">
  //            <h1>${e.name}</h1>
  //            <h4>${e.profession}</h4>
  //            <p>${e.description}</p>
  //        </div>`
  //       });


  //       $("#owl-carousel2").append(box);

  //     });
  //   },
  //   error: function (response) {
  //     console.log(response);

  //   }
  // });


  setTimeout(function () {
    console.log("corusel");

    $("#owl-carousel2").owlCarousel({
      nav: true,
      navText: [`<i class="far fa-long-arrow-left"></i>`, `<i class="fas fa-long-arrow-right"></i>`],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3
        }
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    }
    );
  }
    , 3000)


  //  Patient FeedBack Carousel Start

  $("#owl-carousel3").owlCarousel(
    {
      nav: true,
      center: true,
      navText: [`<i class="fa-solid fa-arrow-left fa-lg"></i>`, `<i class="fa-solid fa-arrow-right fa-lg"></i>`],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3
        }
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    }
  );
  //  Patient FeedBack Carousel End



  // Latest News Carousel Start
  $("#owl-carousel4").owlCarousel(
    {
      nav: true,
      center: true,
      navText: [`<i class="fa-solid fa-arrow-left fa-lg"></i>`, `<i class="fa-solid fa-arrow-right fa-lg"></i>`],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3
        }
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    }
  );
  // Latest News Carousel End


  // Yuxari asagi dusen Ox Start

  $('body').append('<div id="toTop"><i class="fa-solid fa-caret-up"></i></div>');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').on('click', function () {
    $("#iframevideo").addClass("d-none");
    $("iframe").addClass("d-none");
    $('iframe').attr('src', 'a');
    $('body').removeClass('stop-scrolling')
    $("html, body").animate({ scrollTop: 0 }, 50);
    return false;
  });


  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 150) {
      $('#menu').addClass("sticky");
    }
    else {
      $('#menu').removeClass("sticky");
    }
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 150) {
      $('#menu2').addClass("sticky2");
    }
    else {
      $('#menu2').removeClass("sticky2");
    }
  });

    // Yuxari asagi dusen Ox End



  // Video Player Start Js

  $("#iconVideo").click(function () {
    $('iframe').attr('src', 'https://www.youtube.com/embed/K_3KBDFtxmI?si=XRzI4SkOA0HdijAp');
    $("#iframevideo").removeClass("d-none");
    $("iframe").removeClass("d-none");
    $('body').addClass('stop-scrolling')
  });

  $("#iframevideo").click(function () {
    $("#iframevideo").addClass("d-none");
    $("iframe").addClass("d-none");
    $('iframe').attr('src', 'a');
    $('body').removeClass('stop-scrolling')
  });

  // Video Player End Js


  // Responsivlik Start Part 

  $(".burgerMenu").click(function (e) {
    e.preventDefault();
    if ($(".header-sticky").hasClass("off")) {
      $(".header-sticky").removeClass("off");
    }
    else {
      $(".header-sticky").addClass("off");
    }
  });


  $("#dItem").click(function (e) {
    e.preventDefault();
    if ($("#dMenu").hasClass("off")) {
      $("#dMenu").removeClass("off");
    }
    else {
      $("#dMenu").addClass("off");
    }
  });


  $("#pItem").click(function (e) {
    e.preventDefault();
    if ($("#pMenu").hasClass("off")) {
      $("#pMenu").removeClass("off");
    }
    else {
      $("#pMenu").addClass("off");
    }
  });

  
  $("#bItem").click(function (e) {
    e.preventDefault();
    if ($("#bMenu").hasClass("off")) {
      $("#bMenu").removeClass("off");
    }
    else {
      $("#bMenu").addClass("off");
    }
  });

  
  $("#fItem").click(function (e) {
    e.preventDefault();
    if ($("#fMenu").hasClass("off")) {
      $("#fMenu").removeClass("off");
    }
    else {
      $("#fMenu").addClass("off");
    }
  });
  


  $(function () { $("#footer").load("footer.html") });


});

// Responsivlik End Part


$(window).on('load', function () {

  setTimeout(function () { $(".preloader").addClass("d-none"); }, 1000);

});



// Our Experst Doctors Carts Start Part
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 200,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Our Experst Doctors Carts End Part


// Pagination Start Part

const cardsPerPage = 3;
const dataContainer = document.getElementById('blog');
const pagination = document.querySelectorAll('.pagination-area');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
// const pageNumbers = document.getElementById('page-numbers'); 
const pageLinks = document.querySelectorAll('.page-link');



const cards =
  Array.from(dataContainer.getElementsByClassName('single-card actical-card'));

console.log(cards)

const totalPages = Math.ceil(cards.length / cardsPerPage);
let currentPage = 3;

function displayPage(page) {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  cards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function updatePagination() {
 
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  pageLinks.forEach((link) => {
    const page = parseInt(link.getAttribute('data-page'));
    console.log(link)
    link.parentElement.classList.toggle('active',page==currentPage  );
  });
}

// Event listener for "Previous" button 
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
    updatePagination();
  }
});

// Event listener for "Next" button 
nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayPage(currentPage);
    updatePagination();
  }
});

// Event listener for page number buttons 
pageLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = parseInt(link.getAttribute('data-page'));
    if (page !== currentPage) {
      currentPage = page;
      displayPage(currentPage);
      updatePagination();
    }
  });
});

// Initial page load 
displayPage(currentPage);
updatePagination();

// Pagination End Part



const form=document.getElementById("contactForm")

console.log(form)
form.addEventListener("submit",(e)=>{
  e.preventDefault();

  console.log("salam")

  Swal.fire({
    title: "Drag me!",
    icon: "success",
    draggable: true
  });
})
// Mesaj gondermek  html-in js kodu Start Part

// function sendEmail() {
//   Email.send({
//       Name: "name",
//       Email: "hajikhanih@code.edu.az",
//       Subject: "subject",
//       Number: 'number',
//       Message: "message"
//   })
//       .then(function (message) {  
//         Swal.fire({
//           title: "Drag me!",
//           icon: "success",
//           draggable: true
//         });
//       });
// }





