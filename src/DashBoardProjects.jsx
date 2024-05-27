import { useEffect, useState } from "react";

import DashBoardAside from "./components/DashBoardAside";
import DashBoardNavBar from "./components/DashBoardNavBar";
import { Link } from "react-router-dom";


const DashBoardProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
                    const myHeaders = new Headers();
                    myHeaders.append(
                        "Authorization",
                        `Token ${window.sessionStorage.getItem("token")}`
                    );
                    const requestOptions = {
                        method: "GET",
                        headers: myHeaders,
                        redirect: "follow",
                    };
                    fetch(
                        `https://hazem1portfolio.pythonanywhere.com/projects/`,
                        requestOptions
                    )
                        .then((response) => response.json())
                        .then((result) => {

                            if (!result.results[0]) {
                                document.querySelector(".projects_table").style.display = "none"
                            } else {
                                setProjects(result.results)
                            }
                        })
                        .catch((error) => console.error(error));
    }, []);
    if (window.sessionStorage.getItem("token")) {
        return (
            <div className="flex min-h-screen bg-[var(--color-secondary)]">
                <DashBoardAside />
                <div className="w-4/5 max-xl:w-full">
                    <DashBoardNavBar />
                    <div className="p-10">
                        <h1 className="border-b text-[var(--pragraph-color)] pb-5 text-3xl mb-10 mt-20 flex justify-between items-center">
                            Projects
                            <Link to={'/admin-dashboard-add-project'} className="bg-green-400 text-base px-3 py-1 border border-green-400 duration-300 hover:text-green-400 hover:bg-[var(--pragraph-color)] cursor-pointer rounded-md"><i className="fa-solid fa-plus"></i></Link>
                        </h1>
                        <table className="projects_table mt-10 shadow-xl block rounded-lg bg-[var(--color-primary)]" style={{boxShadow: "-2px -2px 5px rgb(0 0 0 / 10%)"}}>
                            <thead className="block bg-[var(--color-secondary)] text-white border-b border-[var(--pragraph-color)]">
                            <tr className="flex p-3">
                                <th className="block w-1/3 text-left">Title</th>
                                <th className="block w-1/3 text-left">Link</th>
                                <th className="block w-1/3 text-left">Image</th>
                                <th className="block w-1/3 text-left">Acthons</th>
                            </tr>
                            </thead>
                            <tbody className="block text-white">
                            {projects.map((project) => {
                            return <tr className="flex  p-3 mb-3 border-b border-[var(--color-secondary)]" key={project.id}>
                            <td className="flex w-1/4 items-center">{project.title}</td>
                            <td className="flex w-1/4 items-center">{project.link}</td>
                            <td className="flex w-1/4 items-center"><img className="w-20" src={project.image} alt={project.image_name} /></td>
                            <td className="flex gap-5 items-center text-lg w-1/4">
                                <Link to={`/admin-dashboard-projects/${project.id}`} className="text-blue-500"><i className="fa-solid fa-pen-to-square"></i></Link>
                                <div
                            onClick={() => {
                                // eslint-disable-next-line no-restricted-globals
                                let confirmMsg = confirm(
                                    `Are You That You Want To Delete This Project "${project.title}" ?`
                                );
                                if (confirmMsg === true) {
                                            const myHeaders = new Headers();
                                            myHeaders.append(
                                                "Authorization",
                                                `Token ${window.sessionStorage.getItem("token")}`
                                            );
                                            const requestOptions = {
                                                method: "DELETE",
                                                headers: myHeaders,
                                                redirect: "follow",
                                            };
                                            fetch(
                                                `https://hazem1portfolio.pythonanywhere.com/projects/${project.id}`,
                                                requestOptions
                                            )
                                                .then((response) => response.text())
                                                .then((result) => window.location.reload())
                                                .catch((error) => console.error(error));
                                        }
                            }}
                            className="cursor-pointer text-red-500"
                        >
                            <i className="fa-regular fa-trash-can"></i>
                        </div>
                            </td>
                        </tr>
                            })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    } else {
        window.location.pathname = "/admin-login";
    }
};

export default DashBoardProjects;
