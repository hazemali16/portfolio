import logo from '../images/android-chrome-512x512.png'
import { Link } from "react-router-dom";


const DashBoardAside = () => {
  return (
    <div className="w-1/5 max-xl:fixed z-40 duration-500 max-xl:w-4/5 max-xl:-translate-x-full bg-[var(--color-primary)] min-h-screen p-10 shadow-xl mobile-navbar">
        <div className="absolute text-[var(--pragraph-color)] top-5 left-5 cursor-pointer xl:hidden" onClick={(e) => {
            e.target.parentElement.parentElement.classList.add("max-xl:-translate-x-full")
        }}>
        <i className="fa-solid fa-xmark fa-2x"></i>
        </div>        
    <div className="w-1/5 mx-auto max-xl:w-2/12 rounded-lg mb-20" style={{boxShadow: '1px 1px 5px #111'}}>
    <Link to={'/admin-dashboard'}>
        <img src={logo} alt="logo" className='rounded-lg' />
    </Link>
    </div>
    <ul className="flex flex-col gap-10 text-[var(--pragraph-color)] font-medium">
        <li className="duration-300 hover:text-[var(--heading-color)] w-fit">
            <Link to={'/admin-dashboard-hero'}>Hero Section</Link>
        </li>
        <li className="duration-300 hover:text-[var(--heading-color)] w-fit">
            <Link to={'/admin-dashboard-jobs'}>Jobs</Link>
        </li>
        <li className="duration-300 hover:text-[var(--heading-color)] w-fit">
            <Link to={'/admin-dashboard-about'}>About Section</Link>
        </li>
        <li className="duration-300 hover:text-[var(--heading-color)] w-fit">
            <Link to={'/admin-dashboard-skills'}>Skills</Link>
        </li>
        <li className="duration-300 hover:text-[var(--heading-color)] w-fit">
            <Link to={'/admin-dashboard-projects'}>Projects</Link>
        </li>
        <li className="duration-300 hover:text-[var(--heading-color)] w-fit">
            <Link to={'/admin-dashboard-messages'}>Messages</Link>
        </li>
    </ul>
</div>
  );
};

export default DashBoardAside;
