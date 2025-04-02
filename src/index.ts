import express from 'express'; // Importamos la dependencia de express

const app = express(); // Inicializamos express

app.set('view engine', 'ejs'); // Utilizamos express como motor

app.set('views', './views'); // Definimos las carpetas de donde estaran las vistas: ./views (todas las rutas de ./views seran rutas para renderizar)

// Ruta principal que renderiza index.ejs
app.get('/', (req, res) => { 
  res.render('index');
});

// Configuramos el puerto, ya sea variables de environment (que puede ser configurado a traves de un .env o proporcionados por Render.com)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`); // Chequeamos que este corriendo correctamente el codigo
});
