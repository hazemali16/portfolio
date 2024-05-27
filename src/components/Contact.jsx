
const Contact = () => {
    return (
        <div className="min-h-screen bg-[var(--color-secondary)] flex justify-center py-20" id='contact'>
        <div className="px-5 w-3/4 max-sm:w-full mx-auto flex flex-col items-center">
            <div className="mt-20 shadow-xl w-1/2 max-lg:w-3/4 max-md:w-full min-h-96 bg-[var(--color-primary)] rounded-lg p-10 overflow-hidden opacity-0 translate-y-10 contact duration-1000">
            <h2 className="text-[var(--heading-color)] text-3xl font-bold text-center -translate-y-32 duration-500 delay-500">Just Say Hello!</h2>
            <form 
            onSubmit={(e) => {
                e.preventDefault()
                let name = e.target.children[0].children[1].value;
                let email = e.target.children[1].children[1].value;
                let phone = e.target.children[2].children[1].value;
                let content = e.target.children[3].children[1].value;
                const myHeaders = new Headers();
                const formdata = new FormData();
                formdata.append("name", name);
                formdata.append("email", email);
                formdata.append("phone", phone);
                formdata.append("content", content);
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: formdata,
                    redirect: "follow",
                };
                fetch("https://hazem1portfolio.pythonanywhere.com/messages/", requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.error(error));
            }}
            action="">
                <div className="flex flex-col gap-2 mt-5 duration-500 -translate-x-[130%] delay-700">
                    <label className="text-[var(--heading-color)] cursor-pointer" htmlFor="name">Name</label>
                    <input id="name" className="outline-none border-none rounded-xl bg-[var(--color-secondary)] text-white px-5 py-3" name="name" required type="text" />
                </div>
                <div className="flex flex-col gap-2 mt-5 duration-500 -translate-x-[130%] delay-1000">
                    <label className="text-[var(--heading-color)] cursor-pointer" htmlFor="email">Email</label>
                    <input id="email" className="outline-none border-none rounded-xl bg-[var(--color-secondary)] text-white px-5 py-3" name="email" required type="email" />
                </div>
                <div className="flex flex-col gap-2 mt-5 duration-500 -translate-x-[130%] delay-[1.2s]">
                    <label className="text-[var(--heading-color)] cursor-pointer" htmlFor="phone">Phone Number</label>
                    <input id="phone" className="outline-none border-none rounded-xl bg-[var(--color-secondary)] text-white px-5 py-3" name="phone" required type="phone" />
                </div>
                <div className="flex flex-col gap-2 mt-5 duration-500 -translate-x-[130%] delay-[1.4s]">
                    <label className="text-[var(--heading-color)] cursor-pointer" htmlFor="message">Message</label>
                    <textarea id="message" name="message" className="outline-none border-none rounded-xl bg-[var(--color-secondary)] text-white px-5 py-3 resize-none h-40" required></textarea>
                </div>
                <input type="submit" value="Send" className="translate-y-32 delay-[1.6s] mt-10 font-bold w-fit block px-16 cursor-pointer py-3 text-[var(--color-secondary)] mx-auto rounded-lg border border-[var(--heading-color)] duration-500 hover:text-[var(--heading-color)] hover:bg-[var(--color-secondary)] bg-[var(--heading-color)]" />
            </form>
            </div>
        </div>
    </div>
    );
};

export default Contact;
