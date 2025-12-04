// Start a WebSocket server on port 8080
Deno.serve({ port: 8080 }, (req) => {
    // server listens
    const { socket, response } = Deno.upgradeWebSocket(req); // upgrade HTTP → WebSocket

    socket.onopen = () => {
        // when client connects
        console.log("Client connected"); // log
        socket.send("Hello from Deno server"); // greet
    };

    socket.onmessage = (event) => {
        // when message received
        console.log("Received:", event.data); // print
        socket.send("Server got: " + event.data); // reply
    };

    return response; // return upgraded response
});
