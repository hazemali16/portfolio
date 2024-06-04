import { useEffect, useState } from 'react';



const Portfolio = () => {
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  let desktopMenu = document.querySelector(".desktop-menu")
  let mobileNavbar = document.querySelector(".mobile-navbar")
  let checkPorfolio = document.querySelector(".check-porfolio")
  let goUp = document.querySelector(".go-up")
  let about = document.querySelector(".about")
  let portfolio = document.querySelector(".portfolio")
  let contact = document.querySelector(".contact")

  // let skills = new Set()
  useEffect(() => {
    fetch("https://hazem1portfolio.pythonanywhere.com/projects-data/")
    .then((response) => response.json())
    .then((projects_result) => {
      setProjects(projects_result.results);
      setTimeout(() => {
        checkPorfolio.onclick = () => {
          window.scrollTo({
            top: portfolio.offsetTop,
            left: 0,
            behavior: "smooth", 
          })
        }
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
      }, 1000);
    })
    .catch((error) => console.error(error));
    fetch("https://hazem1portfolio.pythonanywhere.com/skills-data/")
    .then((response) => response.json())
    .then((result) => {  setSkills(result.results)  })
    .catch((error) => console.error(error))

  }, [])

  return (
  <div className="px-5 w-3/4 max-sm:w-full mx-auto min-h-screen flex gap-20 items-center flex-col py-20 overflow-hidden portfolio" id='portfolio'>
    <h2 className="text-[var(--heading-color)] text-3xl font-bold -translate-y-32 duration-500">Some Things I've Built</h2>
    <div className="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-md:grid-cols-1">
      {projects.map((project) => {
        return(
          <div className="shadow-lg rounded-lg translate-y-10 opacity-0 duration-300" key={project.id}>
          <div className="relative h-[300px]">
            <img src={project.image} alt="project" className='w-full rounded-t-lg' />
            <a href={project.link} target='_blank' rel="noreferrer" className="text-[var(--color-primary)] duration-300 border border-[var(--heading-color)] hover:text-[var(--heading-color)] hover:bg-[var(--color-primary)] w-8 h-8 absolute top-2 right-2 bg-[var(--heading-color)] flex justify-center items-center rounded shadow-2xl">
            <i className="fa-solid fa-eye"></i>
            </a>
          </div>
          <div className="p-5">
            <h3 className='text-2xl text-white font-bold'>{project.title}</h3>
            <div className="flex flex-col justify-between min-h-[250px]">
            <p className="my-5 text-[var(--pragraph-color)]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 project_skills">
              {project.skills.map(skill => <span key={skill} className='text-[var(--heading-color)]'>{skills.map(ele => {
                if (ele.id === skill) {
                  return ele.name
                }else {
                  return ""
                }
                })}</span>)}
            </div>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  </div>
);
};

export default Portfolio;
