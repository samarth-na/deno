import WebSocket from "ws"; // WebSocket client

const ws = new WebSocket("ws://localhost:8080"); // connect to server

ws.on("open", () => {
    // fires when connection ready
    console.log("Connected to server"); // log
    ws.send("Hello server"); // send message
});

ws.on("message", (msg) => {
    // receive messages
    console.log("Received:", msg.toString()); // print server reply
});
