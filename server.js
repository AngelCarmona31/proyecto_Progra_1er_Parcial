import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Esto sirve toda tu carpeta actual para que cargue los estilos e imágenes del HTML
app.use(express.static(__dirname));

// Ruta principal que muestra tu index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Tu ruta de los datos en JSON para el punto extra
app.get('/users', (req, res) => {
    res.json([
        { servicio: "Gestión de Inventario", icon: "invntario.png" }, 
        { servicio: "Gestión de Clientes", icon: "cliente.png" },
        { servicio: "Gestión de Empleados", icon: "empleados.png" },
        { servicio: "Gestión de Ventas", icon: "ventas.png" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});