import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});