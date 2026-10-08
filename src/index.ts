import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta para ver todos los productos
app.get('/api/productos', async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM productos');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// Ruta para agregar un nuevo producto
app.post('/api/productos', async (req: Request, res: Response) => {
  try {
    const { nombre, precio, stock } = req.body;
    const [result] = await pool.execute(
      'INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)',
      [nombre, precio, stock || 0]
    );
    res.status(201).json({ mensaje: 'Producto agregado', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al guardar el producto' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor de Punto de Venta corriendo en http://localhost:${PORT}`);
});