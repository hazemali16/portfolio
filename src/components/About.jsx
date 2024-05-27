import { useEffect, useState } from 'react';


const About = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch("https://hazem1portfolio.pythonanywhere.com/about-data/")
        .then((response) => response.json())
        .then((result) => {
            document.querySelector(".about_description").innerHTML = result.results[0].description
            document.querySelector(".about_image").src = result.results[0].image
        })
        .catch((error) => console.error(error));
        fetch("https://hazem1portfolio.pythonanywhere.com/skills-data/")
        .then((response) => response.json())
        .then((result) => {
            setSkills(result.results)
        })
        .catch((error) => console.error(error));
    }, [])
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] flex justify-center items-center py-20" id='about'>
        <div className="px-5 w-3/4 max-sm:w-full mx-auto flex max-lg:flex-col about translate-y-10 opacity-0 duration-1000">
            <div className="basis-2/5">
                <div className="w-3/4 mx-auto max-lg:mb-20 relative">
                <img src='' alt="me" className='rounded-lg about_image' />
                <div className="absolute bg-[var(--heading-color)] w-full h-full opacity-40 rounded-lg top-0 left-0 cursor-pointer duration-300 hover:opacity-0"></div>
                </div>
            </div>
            <div className="basis-3/5 overflow-hidden">
            <h2 className="text-[var(--heading-color)] text-3xl font-bold -translate-x-full duration-700"><span className="w-5 border-t border-[var(--heading-color)] me-3 h-1 inline-block"></span>About</h2>
            <p className='mt-10 text-[var(--pragraph-color)] leading-relaxed translate-y-10 opacity-0 duration-500 delay-700 about_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sequi odio aspernatur, veniam deserunt soluta omnis nemo iste inventore ut ea voluptatum debitis laudantium iure? A consectetur veniam accusamus nulla.</p>
            <h2 className="text-[var(--heading-color)] text-3xl font-bold mt-16 -translate-x-full duration-700 delay-700"><span className="w-5 border-t border-[var(--heading-color)] me-3 h-1 inline-block"></span>My Skills</h2>
            <div className="grid grid-cols-2 mt-10 gap-5 max-md:grid-cols-1">

                {skills.map((skill) => {
                    return (
                    <div key={skill.id} className="shadow-lg bg-[var(--color-primary)] flex gap-5 p-3 rounded-lg items-center hover:-translate-y-3 cursor-pointer translate-y-10 opacity-0 duration-500">
                        <div className="bg-slate-500 p-2 rounded-md w-10 h-10 flex justify-center items-center">
                            <img src={skill.image} alt="skill" />
                        </div>
                    <div className="text-lg text-[var(--pragraph-color)] font-bold">{skill.name}</div>
                    </div>
                )
                })}

            </div>
            </div>
        </div>
    </div>
  );
};

export default About;
