import { useEffect, useState } from "react";

import DashBoardAside from "./components/DashBoardAside";
import DashBoardNavBar from "./components/DashBoardNavBar";
import { Link } from "react-router-dom";

const DashBoardMsg = () => {
    const [messages, setMessages] = useState([])
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
                        `https://hazem1portfolio.pythonanywhere.com/messages/`,
                        requestOptions
                    )
                        .then((response) => response.json())
                        .then((result) => {
                            setMessages(result.results)
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
                            Messages
                            
                        </h1>
                        <div className="grid grid-cols-3 gap-5">
                        {messages.map((message) => {
                            return <div className="shadow-xl block rounded-lg bg-[var(--color-primary)] p-5 text-white">
                                <h2 className="text-xl">From : {message.name}</h2>
                                <h3 className="my-3">Phone Number : {message.phone}</h3>
                                <h3>Email : {message.email}</h3>
                                <p className="mt-10">{message.content}</p>
                            </div>
                        })}
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        window.location.pathname = "/admin-login";
    }
};

export default DashBoardMsg;
