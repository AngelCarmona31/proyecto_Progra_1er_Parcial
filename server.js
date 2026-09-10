import http from 'http';

export const server = http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case "/users":
            res.writeHead(200, "ok", { "content-type": "application/json" });
            res.end(JSON.stringify([
            { servicio: "Gestión de Inventario", icon: "invntario.png" }, 
            { servicio: "Gestión de Clientes", icon: "cliente.png" },
            { servicio: "Gestión de Empleados", icon: "empleados.png" },
            { servicio: "Gestión de Ventas", icon: "ventas.png" }
]));
            break;
        case "/home":
            res.writeHead(200, "ok", { "content-type": "text/html" });
            res.end("<h1>Hola</h1>");
            break;
        default:
            res.statusCode = 404;
            res.end("not found");
            break;
    }
});

server.listen(3000, () => {
    console.log("server running on port: 3000");
});