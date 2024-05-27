import { useEffect, useState } from "react";

import DashBoardAside from "./components/DashBoardAside";
import DashBoardNavBar from "./components/DashBoardNavBar";
import { useParams } from "react-router-dom";

const AddProjects = () => {
    const params = useParams();
    const [skills, setSkills] = useState([])


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
            `https://hazem1portfolio.pythonanywhere.com/skills/`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setSkills(result.results)
            })
            .catch((error) => console.error(error));
        if (params.projectId) {
            fetch(`https://hazem1portfolio.pythonanywhere.com/projects/${params.projectId}`, {
                headers: {
                    Authorization: `Token ${window.sessionStorage.getItem("token")}`,
                },
            })
                .then((response) => response.json())
                .then((result) => {
                    document.querySelector(".project_name").value = result.title;
                    document.querySelector(".project_description").value = result.description;
                    document.querySelector(".project_link").value = result.link;
                    for (let index = 0; index < result.skills.length; index++) {
                        document.querySelector(`#project_skills option[value="${result.skills[index]}"]`).selected = true;
                        
                    }
                    document.querySelector(".project_title").innerHTML = `Edit Project`;
                    document.querySelector(".project_image").src = result.image;
                    document.querySelector(".project_image_name").innerHTML =
                        result.image_name;
                    document.querySelector(".project_image_data").innerHTML =
                        result.image_size + " - " + result.image_type;
                    document.querySelector(".project_image").classList.remove("hidden");
                    document.querySelector(".project_submit").value = "Save";
                    document
                        .querySelector(".project-image-input")
                        .removeAttribute("required");
                })
                .catch((error) => console.error(error));
        }
        let uploadHeroImage = document.querySelector(".upload-project-image");
        let heroImageInput = document.querySelector(".project-image-input");
        uploadHeroImage.onclick = () => {
            heroImageInput.click();
            heroImageInput.addEventListener("change", function () {
                const file = heroImageInput.files[0];
                const reader = new FileReader();
                reader.addEventListener("load", function () {
                    uploadHeroImage.children[0].src = reader.result;
                    uploadHeroImage.children[0].classList.remove("hidden");
                    uploadHeroImage.children[2].children[0].innerHTML = file.name;
                    uploadHeroImage.children[2].children[1].innerHTML =
                        Math.round(file.size / 1024) < 1024
                            ? (file.size / 1024).toFixed(1) + "KB - " + file.type
                            : (file.size / (1024 * 1024)).toFixed(1) + "MB - " + file.type;
                });
                if (file) {
                    reader.readAsDataURL(file);
                }
            });
        };
    }, [params.projectId]);
    if (window.sessionStorage.getItem("token")) {
        return (
            <div className="flex min-h-screen bg-[var(--color-secondary)]">
                <DashBoardAside />
                <div className="w-4/5 max-xl:w-full">
                    <DashBoardNavBar />
                    <div className="p-10">
                        <h1 className="border-b text-[var(--pragraph-color)] pb-5 text-3xl mb-10 mt-20 flex justify-between items-center project_title">
                            Add a New Project
                        </h1>
                        <form
                            className="form-data"
                            action=""
                            onSubmit={(e) => {
                                e.preventDefault();
                                let title = e.target.children[0].children[1].value;
                                let link = e.target.children[1].children[1].value;
                                let description = e.target.children[2].children[1].value;
                                let skills = e.target.children[3].children[1].selectedOptions;
                                let image =
                                    e.target.children[4].children[0].children[1].children[1]
                                        .files[0];
                                let image_name =
                                    e.target.children[4].children[0].children[1].children[2]
                                        .children[0].innerHTML;
                                let image_size =
                                    e.target.children[4].children[0].children[1].children[2]
                                        .children[1].innerHTML;
                                let image_type =
                                    e.target.children[4].children[0].children[1].children[2]
                                        .children[1].innerHTML;
                                image_size = image_size.slice(0, image_size.indexOf("-"));
                                image_type = image_type.slice(image_type.indexOf("-") + 1);
                                const myHeaders = new Headers();
                                myHeaders.append(
                                    "Authorization",
                                    `Token ${window.sessionStorage.getItem("token")}`
                                );
                                const formdata = new FormData();
                                formdata.append("title", title);
                                formdata.append("link", link);
                                console.log(formdata);

                                formdata.append("description", description);
                                for (let index = 0; index < skills.length; index++) {
                                    console.log(skills[index].value);
                                    formdata.append("skills", skills[index].value);
                                }
                                if (image) {
                                    formdata.append("image", image);
                                }
                                formdata.append("image_name", image_name);
                                formdata.append("image_size", image_size);
                                formdata.append("image_type", image_type);
                                if (!params.projectId) {
                                    const requestOptions = {
                                        method: "POST",
                                        headers: myHeaders,
                                        body: formdata,
                                        redirect: "follow",
                                    };
                                    fetch("https://hazem1portfolio.pythonanywhere.com/projects/", requestOptions)
                                        .then((response) => response.text())
                                        .then(
                                            (result) =>
                                                window.location.pathname = "/admin-dashboard-projects"
                                        )
                                        .catch((error) => console.error(error));
                                } else {
                                    const requestOptions = {
                                        method: "PUT",
                                        headers: myHeaders,
                                        body: formdata,
                                        redirect: "follow",
                                    };
                                    fetch(
                                        `https://hazem1portfolio.pythonanywhere.com/projects/${params.projectId}`,
                                        requestOptions
                                    )
                                        .then((response) => response.text())
                                        .then(
                                            (result) =>
                                                (window.location.pathname = "/admin-dashboard-projects")
                                        )
                                        .catch((error) => console.error(error));
                                }
                            }}
                        >
                            <div className="mb-5 flex flex-col gap-3 text-[var(--pragraph-color)]">
                                <label className="" htmlFor="">
                                    Your Project's Title
                                </label>
                                <input
                                    required
                                    className="rounded-xl bg-[var(--color-primary)] border-none outline-none px-5 py-3 project_name"
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div className="mb-5 flex flex-col gap-3 text-[var(--pragraph-color)]">
                                <label className="" htmlFor="">
                                    Your Project's Link
                                </label>
                                <input
                                    required
                                    className="rounded-xl bg-[var(--color-primary)] border-none outline-none px-5 py-3 project_link"
                                    type="url"
                                    name="name"
                                />
                            </div>
                            <div className="mb-5 flex flex-col gap-3 text-[var(--pragraph-color)]">
                                <label className="" htmlFor="">
                                    Description
                                </label>
                                <textarea
                                    required
                                    className="rounded-xl bg-[var(--color-primary)] border-none outline-none px-5 py-3 resize-none h-40 project_description"
                                    name="description"
                                    id=""
                                ></textarea>
                            </div>
                            <div className="mb-5 flex flex-col gap-3 text-[var(--pragraph-color)]">
                                <label className="" htmlFor="project_skills">
                                    Skills
                                </label>
                                <select
                                    name="skills"
                                    required
                                    id="project_skills"
                                    multiple
                                    className="rounded-xl bg-[var(--color-primary)] border-none outline-none p-5"
                                >
                                    {skills.map((skill) => {
                                    return <option className="bg-[var(--color-secondary)] p-3 mb-3 cursor-pointer" value={skill.id} key={skill.id}>{skill.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className="mb-5 flex flex-col gap-3 text-[var(--pragraph-color)]">
                                <div className="mt-8">
                                    <h3 className="text-2xl block mb-5">Image</h3>
                                    <div className="rounded-lg outline-none bg-[var(--color-primary)] p-10 resize-none min-h-40 flex justify-center max-lg:flex-col items-center gap-10 cursor-pointer upload-project-image">
                                        <img
                                            className="min-w-32 h-60 hidden project_image"
                                            src=""
                                            alt="About"
                                        />
                                        <input
                                            type="file"
                                            className="rounded-lg outline-none bg-[var(--color-primary)] p-5 cursor-pointer hidden project-image-input"
                                            name="image"
                                            required
                                            accept="image/*"
                                        />
                                        <div>
                                            <h4 className="text-lg mb-3 font-semibold project_image_name"></h4>
                                            <p className="project_image_data"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <input
                                type="submit"
                                value="Add"
                                className="project_submit mt-10 font-bold w-fit block px-16 cursor-pointer py-3 text-[var(--color-secondary)] rounded-lg border border-[var(--heading-color)] duration-500 hover:text-[var(--heading-color)] hover:bg-[var(--color-secondary)] bg-[var(--heading-color)]"
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

export default AddProjects;
//<select name="skills" required="" aria-describedby="id_skills_helptext" id="id_skills" multiple="">
//<option value="3">Tailwind CSS</option>

//</select>
