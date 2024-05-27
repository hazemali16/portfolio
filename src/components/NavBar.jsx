import { useEffect } from "react";


const NavBar = () => {
    useEffect(() => {
        let bars = document.querySelector(".bars")
        let mobileNavbar = document.querySelector(".mobile-navbar")
        let clicked = 0
        bars.onclick = () => {
            if (clicked === 0) {
                bars.children[0].style.cssText = "top: 50%; transform: translateY(-50%) rotate(45deg)"
                bars.children[1].style.opacity = "0"
                bars.children[2].style.cssText = "bottom: unset; top: 50%; transform: translateY(-50%) rotate(-45deg)"
                mobileNavbar.classList.add("show-menu")
                clicked = 1
            } else {
                bars.children[0].style.cssText = "top: 0; transform: translateY(0) rotate(0)"
                bars.children[1].style.opacity = "1"
                bars.children[2].style.cssText = "bottom: 0; top: unset; transform: translateY(0) rotate(0)"
                mobileNavbar.classList.remove("show-menu")
                clicked = 0
            }
        }

    }, [])

    return (
        <>
            <div className="fixed top-0 left-0 w-full p-5 flex justify-center z-50 bg-[var(--color-primary)] navbar duration-300">
                <div className="flex items-center justify-between w-10/12 max-sm:w-full">
                    <div className="text-3xl max-md:text-2xl text-[var(--heading-color)] font-bold">Hazem</div>
                    <ul className="flex items-center gap-5 text-white max-md:hidden desktop-menu">
                        <li className="duration-300 hover:text-[var(--heading-color)] text-[var(--heading-color)]"><div className="cursor-pointer">Home</div></li>
                        <li className="duration-300 hover:text-[var(--heading-color)]"><div className="cursor-pointer">About</div></li>
                        <li className="duration-300 hover:text-[var(--heading-color)]"><div className="cursor-pointer">Portfolio</div></li>
                        <li className="duration-300 hover:text-[var(--heading-color)]"><div className="cursor-pointer">Contact</div></li>
                    </ul>
                    <div className="bars w-7 relative h-5 cursor-pointer md:hidden">
                        <span className="absolute left-0 top-0 w-full h-1/5 bg-[var(--pragraph-color)] duration-300"></span>
                        <span className="absolute left-0  top-1/2 -translate-y-1/2 w-full h-1/5 bg-[var(--pragraph-color)] duration-300"></span>
                        <span className="absolute left-0 bottom-0 w-full h-1/5 bg-[var(--pragraph-color)] duration-300"></span>
                    </div>
                </div>
                <ul className="mobile-navbar flex gap-5 p-0 text-white flex-col absolute top-[72px] w-full left-0 shadow-2xl bg-[var(--color-primary)] z-40 h-0 overflow-hidden">
                <li className="duration-300 hover:text-[var(--heading-color)]"><div className="cursor-pointer">Home</div></li>
                <li className="duration-300 hover:text-[var(--heading-color)]"><div className="cursor-pointer">About</div></li>
                <li className="duration-300 hover:text-[var(--heading-color)]"><div className="cursor-pointer">Portfolio</div></li>
                <li className="duration-300 hover:text-[var(--heading-color)]"><div className="cursor-pointer">Contact</div></li>
            </ul>
            </div>

        </>
);
};

export default NavBar;