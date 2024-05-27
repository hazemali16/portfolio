


  try {
    fetch("http://127.0.0.1:8000/hero-data/")
    .then((response) => response.json())
    .then((result) => {
      document.querySelector('.hero_name').innerHTML = result.results[0].name
      document.querySelector('.hero_description').innerHTML = result.results[0].description
      document.querySelector('.hero_image').src = result.results[0].image
      fetch("http://127.0.0.1:8000/jobs-data/")
      .then((response) => response.json())
      .then((jobs_result) => {
        let name = document.querySelector(".name")
        let text = name.innerHTML
        const jobs = []
        jobs.push(result.results[0].name)
        for (let index = 0; index < jobs_result.results.length; index++) {
          jobs.push(jobs_result.results[index].name)
        }
      let counter = 0
      let wordIndex = 0
    setInterval(() => {
        if (counter > jobs[wordIndex].length - 1) {
          if (wordIndex < jobs.length - 1) {
            wordIndex += 1
          } else {
            wordIndex = 0
          }
          counter = 0
          name.innerHTML = ""
        } else {
          name.innerHTML += jobs[wordIndex][counter]
          counter += 1
        }
      }, 300);
      })
      .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));

    
  } catch (error) {
    
  }


const Hero = () => {
  return (
    <div className="h-screen flex items-center gap-5 justify-between overflow-hidden px-5 w-3/4 max-sm:w-full mx-auto" id="home">
        <div className="w-3/5 max-md:w-full font-bold text-white show-hero -translate-x-[110%]">
            <h4 className="text-[var(--heading-color)]"><span className="w-5 border-t border-[var(--heading-color)] me-3 h-1 inline-block"></span>HELLO</h4>
            <h1 className="text-6xl max-md:text-4xl my-5 w-fit relative leading-[1.1]">I'm <span className="name"></span><span className="text-6xl max-md:text-4xl opacity">|</span></h1>
            <p className="text-[var(--pragraph-color)] font-normal w-3/4">This Is <span className="text-[var(--heading-color)] hero_name"></span>, <span className="hero_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sunt beatae tempore consequuntur minima nisi?</span></p>
            <a href="#portfolio" className="block w-fit mt-16 bg-[var(--heading-color)] px-5 py-3 border border-[var(--heading-color)] text-[var(--color-primary)] rounded-md duration-300 hover:text-[var(--heading-color)] hover:bg-[var(--color-primary)]">Check out my work</a>
        </div>
        <div className="w-2/5 max-md:hidden show-hero translate-x-[110%]">
          <img src='' className='hero_image' alt="hero" />
        </div>
    </div>
  );
};

export default Hero;
