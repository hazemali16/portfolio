import { useEffect, useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  useEffect(() => {
    let goUp = document.querySelector(".go-up")
    let navbar = document.querySelector(".navbar")
    let desktopMenu = document.querySelector(".desktop-menu")
    let mobileNavbar = document.querySelector(".mobile-navbar")
    let about = document.querySelector(".about")
    let portfolio = document.querySelector(".portfolio")
    let contact = document.querySelector(".contact")
    setTimeout(() => {
      let scrollWraper = document.querySelector(".scroll-wraper")
      let height = scrollWraper.getBoundingClientRect().height 
      let speed = 0.05
      let offset = 0
      document.body.style.height = Math.floor(height) + "px"
      function smoothScroll() {
        offset += (window.scrollY - offset) * speed
        var scroll = "translateY(-" + offset + "px) translateZ(0)";
        scrollWraper.style.transform = scroll;
        let callScroll = requestAnimationFrame(smoothScroll)
      }
      smoothScroll()
      goUp.onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth", 
        })
      }
      desktopMenu.children[0].onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth", 
        })
      }
      desktopMenu.children[1].onclick = () => {
        window.scrollTo({
          top: about.offsetTop,
          left: 0,
          behavior: "smooth", 
        })
      }
          desktopMenu.children[2].onclick = () => {
        window.scrollTo({
          top: portfolio.offsetTop,
          left: 0,
          behavior: "smooth", 
        })
      }
      desktopMenu.children[3].onclick = () => {
        window.scrollTo({
          top: contact.offsetTop,
          left: 0,
          behavior: "smooth", 
        })
      }
      mobileNavbar.children[0].onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth", 
        })
      }
      mobileNavbar.children[1].onclick = () => {
        window.scrollTo({
          top: about.offsetTop,
          left: 0,
          behavior: "smooth", 
        })
      }
          mobileNavbar.children[2].onclick = () => {
        window.scrollTo({
          top: portfolio.offsetTop,
          left: 0,
          behavior: "smooth", 
        })
      }
      mobileNavbar.children[3].onclick = () => {
        window.scrollTo({
          top: contact.offsetTop,
          left: 0,
          behavior: "smooth", 
        })
      }
    }, 3000);

    window.onscroll = () => {
      if (window.scrollY >= 10) {
          navbar.classList.add("shadow-lg")
          if (window.scrollY < about.offsetTop - 700) 
          {
            for (let i = 0; i < desktopMenu.children.length; i++) {
              desktopMenu.children[i].classList.remove("text-[var(--heading-color)]")
            }
            desktopMenu.children[0].classList.add("text-[var(--heading-color)]")
          }
          if (window.scrollY >= about.offsetTop - 700) 
          {
            for (let i = 0; i < desktopMenu.children.length; i++) {
              desktopMenu.children[i].classList.remove("text-[var(--heading-color)]")
            }
            desktopMenu.children[1].classList.add("text-[var(--heading-color)]")
            about.classList.remove("opacity-0")
            about.classList.remove("translate-y-10")
            about.children[1].children[0].classList.remove("-translate-x-full")
            about.children[1].children[1].classList.remove("opacity-0")
            about.children[1].children[1].classList.remove("translate-y-10")
            about.children[1].children[2].classList.remove("-translate-x-full")
            for (let i = 0; i < about.children[1].children[3].children.length; i++) {
              about.children[1].children[3].children[i].style.cssText = `transition-delay: ${(.3 * (i + 1)) + .9}s;`
              about.children[1].children[3].children[i].classList.remove("translate-y-10")
              about.children[1].children[3].children[i].classList.remove("opacity-0")
            }
          }
          if (window.scrollY < portfolio.offsetTop - 700) 
          {
            goUp.classList.add("opacity-0")
          }
          if (window.scrollY >= portfolio.offsetTop - 700) {
            goUp.classList.remove("opacity-0")
            for (let i = 0; i < desktopMenu.children.length; i++) {
              desktopMenu.children[i].classList.remove("text-[var(--heading-color)]")
            }
            desktopMenu.children[2].classList.add("text-[var(--heading-color)]")
            portfolio.children[0].classList.remove("-translate-y-32")
            for (let i = 0; i < portfolio.children[1].children.length; i++) {
              portfolio.children[1].children[i].style.cssText = `transition-delay: ${(.3 * (i + 1)) + .3}s;`
              portfolio.children[1].children[i].classList.remove("translate-y-10")
              portfolio.children[1].children[i].classList.remove("opacity-0")              
            }
          }
          if (window.scrollY >= contact.offsetTop - 700) {
            for (let i = 0; i < desktopMenu.children.length; i++) {
              desktopMenu.children[i].classList.remove("text-[var(--heading-color)]")
            }
            desktopMenu.children[3].classList.add("text-[var(--heading-color)]")
            contact.classList.remove("opacity-0")
            contact.classList.remove("translate-y-10")
            contact.children[0].classList.remove("-translate-y-32")
            for (let i = 0; i < contact.children[1].children.length - 1; i++) {
              contact.children[1].children[i].classList.remove("-translate-x-[130%]")
            }
            contact.children[1].children[4].classList.remove("translate-y-32")
            setTimeout(() => {
              contact.children[1].children[4].classList.remove("delay-[1.6s]")
            }, 1600);
          }
      } else {
        navbar.classList.remove("shadow-lg")
      }
  }
  

  }, [])
  return (
    <>
    <div className="cursor-pointer go-up fixed w-10 h-10 flex justify-center items-center font-bold rounded-lg z-10 right-5 bottom-5 text-[var(--heading-color)] shadow-2xl bg-[#00000066] border border-[#00000066] duration-300 hover:bg-[var(--heading-color)] hover:text-[#000000] opacity-0"><i className="fa-solid fa-angle-up"></i></div>
    <NavBar />
    <div className="fixed top-0 left-0 overflow-hidden scroll-wraper">
    <Hero />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
    </>
  )
};

export default Home;
