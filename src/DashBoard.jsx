import { Link } from "react-router-dom";
import DashBoardAside from "./components/DashBoardAside";
import DashBoardNavBar from "./components/DashBoardNavBar";


const DashBoard = () => {
    if (window.sessionStorage.getItem("token")) {
        return (
            <div className="flex min-h-screen bg-[var(--color-secondary)]">
                <DashBoardAside />
                <div className="w-4/5 max-xl:w-full">
                    <DashBoardNavBar />
                <div className="p-10 mt-20">
                <h2 className="bg-green-300 p-3 mb-20">welcome to your dashborad!</h2>
                <h1 className="border-b text-[var(--pragraph-color)] pb-5 text-3xl mb-10">Sections</h1>
                    <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                        <Link to={'/admin-dashboard-hero'} className="shadow-x bg-[var(--color-primary)] p-10 text-[var(--pragraph-color)] font-medium">
                            <h3>Hero</h3>
                            <div className="rounded-full px-2 py-1 border w-fit mt-5">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </Link>
                        <Link to={'/admin-dashboard-jobs'} className="shadow-x bg-[var(--color-primary)] p-10 text-[var(--pragraph-color)] font-medium">
                            <h3>Jobs</h3>
                            <div className="rounded-full px-2 py-1 border w-fit mt-5">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </Link>
                        <Link to={'/admin-dashboard-about'} className="shadow-x bg-[var(--color-primary)] p-10 text-[var(--pragraph-color)] font-medium">
                            <h3>About</h3>
                            <div className="rounded-full px-2 py-1 border w-fit mt-5">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </Link>
                        <Link to={'/admin-dashboard-skills'} className="shadow-x bg-[var(--color-primary)] p-10 text-[var(--pragraph-color)] font-medium">
                            <h3>Skills</h3>
                            <div className="rounded-full px-2 py-1 border w-fit mt-5">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </Link>
                        <Link to={'/admin-dashboard-projects'} className="shadow-x bg-[var(--color-primary)] p-10 text-[var(--pragraph-color)] font-medium">
                            <h3>Projects</h3>
                            <div className="rounded-full px-2 py-1 border w-fit mt-5">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </Link>
                        <Link to={'/admin-dashboard-messages'} className="shadow-x bg-[var(--color-primary)] p-10 text-[var(--pragraph-color)] font-medium">
                            <h3>Message</h3>
                            <div className="rounded-full px-2 py-1 border w-fit mt-5">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        );
    } else {
        window.location.pathname = '/admin-login'
    }
};

export default DashBoard;
