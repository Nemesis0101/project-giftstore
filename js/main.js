"use strict";var navSlide=function(){var t=document.querySelector(".burger"),n=document.querySelector(".nav__list"),i=document.querySelectorAll(".nav__list li"),e=document.querySelectorAll(".nav__link");t.addEventListener("click",function(){n.classList.toggle("nav__list-active"),i.forEach(function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.5s ease forwards ".concat(t/7+.3,"s")}),t.classList.toggle("toggle")}),e.forEach(function(e){e.addEventListener("click",function(){n.classList.remove("nav__list-active"),t.classList.remove("toggle"),i.forEach(function(e){e.style.animation=""})})})};navSlide();