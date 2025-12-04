import { WebSocketServer } from "ws"; // WebSocket server

const wss = new WebSocketServer({ port: 8080 }); // start server on port 8080

wss.on("connection", (ws) => {
    // when client connects
    console.log("Client connected"); // log connection

    ws.on("message", (msg: any) => {
        // when server gets message
        console.log("Received:", msg.toString()); // print message
        ws.send("Server got: " + msg); // send back reply
    });

    ws.send("Hello from server"); // greet on connect
});

console.log("WebSocket server running on ws://localhost:8080"); // info
