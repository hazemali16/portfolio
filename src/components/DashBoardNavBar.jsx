
import { useEffect } from "react";


const DashBoardNavBar = () => {
  useEffect(() => {
    let bars = document.querySelector(".bars")
    let mobileNavbar = document.querySelector(".mobile-navbar")
    bars.onclick = () => {
        mobileNavbar.classList.remove("max-xl:-translate-x-full")
    }
}, [])
  return (
    <div className="shadow-xl bg-[var(--color-primary)] p-5 flex justify-between items-center xl:flex-row-reverse fixed w-full z-10">
    <div className="bars cursor-pointer xl:hidden text-[var(--pragraph-color)]">
    <i className="fa-solid fa-bars fa-2x"></i>
    </div>
    <div className="cursor-pointer">
    </div>
</div>
  );
};

export default DashBoardNavBar;
