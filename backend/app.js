require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const messageRoutes = require('./routes/messages');
const projectRoutes = require('./routes/projects');

app.use('/api/messages', messageRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
