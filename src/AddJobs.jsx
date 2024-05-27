import { useEffect } from "react";

import DashBoardAside from "./components/DashBoardAside";
import DashBoardNavBar from "./components/DashBoardNavBar";
import { useParams } from "react-router-dom";


const AddJobs = () => {
    const params = useParams();

    useEffect(() => {
        if (params.jobId) {
            fetch(`http://127.0.0.1:8000/jobs/${params.jobId}`,
            {headers : {"Authorization" : "Token ad7009de198e724b98f0354298eb64a2450bbaaa"},}
        )
            .then((response) => response.json())
            .then((result) => {
                document.querySelector(".job_name").value = result.name
                document.querySelector(".job_title").innerHTML = `Edit Job`
                document.querySelector(".job_submit").value = "Save"
            })
            .catch((error) => console.error(error));
        }
    }, [params.jobId]);
    if (window.sessionStorage.getItem("token")) {
        return (
            <div className="flex min-h-screen bg-[var(--color-secondary)]">
                <DashBoardAside />
                <div className="w-4/5 max-xl:w-full">
                    <DashBoardNavBar />
                    <div className="p-10">
                        <h1 className="border-b text-[var(--pragraph-color)] pb-5 text-3xl mb-10 mt-20 flex justify-between items-center job_title">
                            Add a New Job
                        </h1>
                        <form
                        className="form-data"
                            action=""
                            onSubmit={(e) => {
                                e.preventDefault();
                                let name = e.target.children[0].children[1].value;
                                const myHeaders = new Headers();
                                myHeaders.append(
                                    "Authorization",
                                    `Token ${window.sessionStorage.getItem("token")}`
                                );
                                        const formdata = new FormData();
                                        formdata.append("name", name);
                                        if (!params.jobId) {
                                            const requestOptions = {
                                                method: "POST",
                                                headers: myHeaders,
                                                body: formdata,
                                                redirect: "follow",
                                            };
                                            fetch("http://127.0.0.1:8000/jobs/", requestOptions)
                                            .then((response) => response.text())
                                            .then((result) => window.location.pathname = "/admin-dashboard-jobs")
                                            .catch((error) => console.error(error));
                                        } else {
                                            const requestOptions = {
                                                method: "PUT",
                                                headers: myHeaders,
                                                body: formdata,
                                                redirect: "follow",
                                            };
                                            fetch(`http://127.0.0.1:8000/jobs/${params.jobId}`, requestOptions)
                                            .then((response) => response.text())
                                            .then((result) => window.location.pathname = "/admin-dashboard-jobs")
                                            .catch((error) => console.error(error));
                                        }
                            }}
                        >
                            <div className="mb-5 flex flex-col gap-3 text-[var(--pragraph-color)]">
                                <label className="" htmlFor="">
                                    Your Job's Name
                                </label>
                                <input
                                    required
                                    className="rounded-xl bg-[var(--color-primary)] border-none outline-none px-5 py-3 job_name"
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <input
                                type="submit"
                                value="Add"
                                className="job_submit mt-10 font-bold w-fit block px-16 cursor-pointer py-3 text-[var(--color-secondary)] rounded-lg border border-[var(--heading-color)] duration-500 hover:text-[var(--heading-color)] hover:bg-[var(--color-secondary)] bg-[var(--heading-color)]"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    } else {
        window.location.pathname = "/admin-login";
    }
};

export default AddJobs;
