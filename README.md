# FE-EventStream
Acessing the data from node api /events using the everntsource to display the content. 

npm install --- use --force incase of any incompatability

refer https://github.com/JaveedShaiks/server-eventStream 

Start above node.js api  before starting the FE application

use the eventsource to access the api and to display the content in the timeinterval simlar to the live commentry of any match

sample code how accessing the eventsource feeds data

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
