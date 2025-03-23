import React, { useEffect, useState } from "react";

export const Livecommentary = () => {
    const [messages, setMessages] = useState([]);

    const [list, setList] = useState([]);

    const fetchData = async () => {
        await fetch("http://localhost:5000/list").then(res => res.json()).then(data => setList(data))
    }

    useEffect(() => {
        const eventSource = new EventSource("http://localhost:5000/events");

        eventSource.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        fetchData();
        return () => {
            eventSource.close();
        };


    }, []);

    return (
        <div>
            <h2>Live Commentary</h2>
            <ul>
                {messages.map((msg) => (
                    <li key={msg.id}>{msg.timestamp}: {msg.message}</li>
                ))}
            </ul>

            <h2>Live new Commentary</h2>
            <ul>
                {list.map((msg,index) => (
                    <li key={index}>{msg.event}: {msg.type} : {msg.timestamp}</li>
                ))}
            </ul>
        </div>
    );
};

//export default Livecommentary;