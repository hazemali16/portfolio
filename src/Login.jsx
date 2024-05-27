import logo from './images/android-chrome-512x512.png'
const Login = () => {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] flex justify-center py-20" id='contact'>
    <div className="px-5 w-3/4 max-sm:w-full mx-auto flex flex-col items-center">
        <div className="mt-20 shadow-xl w-1/3 max-lg:w-2/3 max-md:w-full min-h-96 bg-[var(--color-primary)] rounded-lg p-10">
        <div className="w-1/6 mx-auto rounded-lg" style={{boxShadow: '1px 1px 5px #111'}}>
            <img src={logo} alt="logo" className='rounded-lg' />
        </div>
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            let username = e.target.children[0].children[1].value
            let password = e.target.children[1].children[1].value
            fetch("http://127.0.0.1:8000/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            }).then((data) => data.json()).then((data) => {
                if (data.token) {
                    window.sessionStorage.setItem("token", data.token)
                    window.location.pathname = '/admin-dashboard'
                } else {
                    alert(data.error)
                }
            })
        }}>
            <div className="flex flex-col gap-2 mt-5">
                <label className="text-[var(--heading-color)] cursor-pointer" htmlFor="username">User Name</label>
                <input id="username" className="outline-none border-none rounded-xl bg-[var(--color-secondary)] text-white px-5 py-3" name="username" required type="text" />
            </div>
            <div className="flex flex-col gap-2 mt-5">
                <label className="text-[var(--heading-color)] cursor-pointer" htmlFor="password">Password</label>
                <input id="password" className="outline-none border-none rounded-xl bg-[var(--color-secondary)] text-white px-5 py-3" name="password" required type="password" />
            </div>
            <input type="submit" value="Login" className="mt-10 font-bold w-fit block px-16 cursor-pointer py-3 text-[var(--color-secondary)] mx-auto rounded-lg border border-[var(--heading-color)] duration-500 hover:text-[var(--heading-color)] hover:bg-[var(--color-secondary)] bg-[var(--heading-color)]" />
        </form>
        </div>
    </div>
</div>
);
};

export default Login;
