import { useEffect, useState } from "react";

import DashBoardAside from "./components/DashBoardAside";
import DashBoardNavBar from "./components/DashBoardNavBar";
import { Link } from "react-router-dom";

const DashBoardJobs = () => {
    const [jobs, setJobs] = useState([])
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
                        `http://127.0.0.1:8000/jobs/`,
                        requestOptions
                    )
                        .then((response) => response.json())
                        .then((result) => {
                            if (!result.results[0]) {
                                document.querySelector(".jobs_table").style.display = "none"
                            } else {
                                setJobs(result.results)
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
                            Jobs
                            <Link to={'/admin-dashboard-add-job'} className="bg-green-400 text-base px-3 py-1 border border-green-400 duration-300 hover:text-green-400 hover:bg-[var(--pragraph-color)] cursor-pointer rounded-md"><i className="fa-solid fa-plus"></i></Link>
                        </h1>
                        <table className="jobs_table mt-10 shadow-xl block rounded-lg bg-[var(--color-primary)]" style={{boxShadow: "-2px -2px 5px rgb(0 0 0 / 10%)"}}>
                            <thead className="block bg-[var(--color-secondary)] text-white border-b border-[var(--pragraph-color)]">
                            <tr className="flex p-3">
                                <th className="block w-1/2 text-left">Name</th>
                                <th className="block w-1/2 text-left">Acthons</th>
                            </tr>
                            </thead>
                            <tbody className="block text-white">
                            {jobs.map((job) => {
                            return <tr className="flex  p-3 mb-3 border-b border-[var(--color-secondary)]" key={job.id}>
                            <td className="flex items-center w-1/2">{job.name}</td>
                            <td className="flex gap-5 text-lg items-center w-1/2">
                                <Link to={`/admin-dashboard-jobs/${job.id}`} className="text-blue-500"><i className="fa-solid fa-pen-to-square"></i></Link>
                                <div
                            onClick={() => {
                                // eslint-disable-next-line no-restricted-globals
                                let confirmMsg = confirm(
                                    `Are You That You Want To Delete This Job "${job.name}" ?`
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
                                                `http://127.0.0.1:8000/jobs/${job.id}`,
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

export default DashBoardJobs;
