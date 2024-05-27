import { useEffect } from "react";

import DashBoardAside from "./components/DashBoardAside";
import DashBoardNavBar from "./components/DashBoardNavBar";
import { useParams } from "react-router-dom";

const AddSkills = () => {
    const params = useParams();

    useEffect(() => {
        if (params.skillId) {
            fetch(`http://127.0.0.1:8000/skills/${params.skillId}`,
            {headers : {"Authorization" : "Token ad7009de198e724b98f0354298eb64a2450bbaaa"},}
        )
            .then((response) => response.json())
            .then((result) => {
                document.querySelector(".skill_name").value = result.name
                document.querySelector(".skill_title").innerHTML = `Edit Skill`
                document.querySelector(".skill_image").src = result.image
                document.querySelector(".skill_image_name").innerHTML = result.image_name
                document.querySelector(".skill_image_data").innerHTML = result.image_size + " - " + result.image_type
                document.querySelector(".skill_image").classList.remove("hidden")
                document.querySelector(".skill_submit").value = "Save"
                document.querySelector(".skill-image-input").removeAttribute(
                    "required"
                );
            })
            .catch((error) => console.error(error));
        }
        let uploadHeroImage = document.querySelector(".upload-skill-image");
        let heroImageInput = document.querySelector(".skill-image-input");
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
    }, [params.skillId]);
    if (window.sessionStorage.getItem("token")) {
        return (
            <div className="flex min-h-screen bg-[var(--color-secondary)]">
                <DashBoardAside />
                <div className="w-4/5 max-xl:w-full">
                    <DashBoardNavBar />
                    <div className="p-10">
                        <h1 className="border-b text-[var(--pragraph-color)] pb-5 text-3xl mb-10 mt-20 flex justify-between items-center skill_title">
                            Add a New Skill
                        </h1>
                        <form
                        className="form-data"
                            action=""
                            onSubmit={(e) => {
                                e.preventDefault();
                                let name = e.target.children[0].children[1].value;
                                let image =
                                e.target.children[1].children[0].children[1].children[1]
                                    .files[0];
                            let image_name =
                                e.target.children[1].children[0].children[1].children[2]
                                    .children[0].innerHTML;
                            let image_size =
                                e.target.children[1].children[0].children[1].children[2]
                                    .children[1].innerHTML;
                            let image_type =
                                e.target.children[1].children[0].children[1].children[2]
                                    .children[1].innerHTML;
                                    image_size = image_size.slice(0, image_size.indexOf("-"));
                                    image_type = image_type.slice(image_type.indexOf("-") + 1);
                                const myHeaders = new Headers();
                                myHeaders.append(
                                    "Authorization",
                                    `Token ${window.sessionStorage.getItem("token")}`
                                );
                                        const formdata = new FormData();
                                        formdata.append("name", name);
                                            if (image) {
                                                formdata.append("image", image);
                                            }
                                        formdata.append("image_name", image_name);
                                        formdata.append("image_size", image_size);
                                        formdata.append("image_type", image_type);
                                        if (!params.skillId) {
                                            const requestOptions = {
                                                method: "POST",
                                                headers: myHeaders,
                                                body: formdata,
                                                redirect: "follow",
                                            };
                                            fetch("http://127.0.0.1:8000/skills/", requestOptions)
                                            .then((response) => response.text())
                                            .then((result) => window.location.pathname = "/admin-dashboard-skills")
                                            .catch((error) => console.error(error));
                                        } else {
                                            const requestOptions = {
                                                method: "PUT",
                                                headers: myHeaders,
                                                body: formdata,
                                                redirect: "follow",
                                            };
                                            fetch(`http://127.0.0.1:8000/skills/${params.skillId}`, requestOptions)
                                            .then((response) => response.text())
                                            .then((result) => window.location.pathname = "/admin-dashboard-skills")
                                            .catch((error) => console.error(error));
                                        }
                            }}
                        >
                            <div className="mb-5 flex flex-col gap-3 text-[var(--pragraph-color)]">
                                <label className="" htmlFor="">
                                    Your Skill's Name
                                </label>
                                <input
                                    required
                                    className="rounded-xl bg-[var(--color-primary)] border-none outline-none px-5 py-3 skill_name"
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div className="mb-5 flex flex-col gap-3 text-[var(--pragraph-color)]">
                                <div className="mt-8">
                                    <h3 className="text-2xl block mb-5">Image</h3>
                                    <div className="rounded-lg outline-none bg-[var(--color-primary)] p-10 resize-none min-h-40 flex justify-center max-lg:flex-col items-center gap-10 cursor-pointer upload-skill-image">
                                        <img className="min-w-32 h-60 hidden skill_image" src="" alt="About" />
                                        <input
                                            type="file"
                                            className="rounded-lg outline-none bg-[var(--color-primary)] p-5 cursor-pointer hidden skill-image-input"
                                            name="image"
                                            required
                                            accept="image/*"
                                        />
                                        <div>
                                            <h4 className="text-lg mb-3 font-semibold skill_image_name"></h4>
                                            <p className="skill_image_data"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="submit"
                                value="Add"
                                className="skill_submit mt-10 font-bold w-fit block px-16 cursor-pointer py-3 text-[var(--color-secondary)] rounded-lg border border-[var(--heading-color)] duration-500 hover:text-[var(--heading-color)] hover:bg-[var(--color-secondary)] bg-[var(--heading-color)]"
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

export default AddSkills;
