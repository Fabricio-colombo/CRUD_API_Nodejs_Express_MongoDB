const express = require('express');
const mongoose = require('mongoose');
const { dbPassword } = require('./config');
const Product = require('E:/DESKTOP_2/CRUD_API/models/product.model'); 

const app = express();

const url = `mongodb+srv://admincolombo:${dbPassword}@backenddb.o81nrw5.mongodb.net/?retryWrites=true&w=majority&appName=BackEndDB`;

mongoose.connect(url)
  .then(() => {
    console.log('Conexão bem-sucedida ao MongoDB');
    app.listen(3000, () => {
      console.log('Servidor Express está rodando na porta 3000');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Bem-vindo à API de produtos");
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ message: 'Erro ao criar produto' });
  }
});

app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ message: 'Erro ao atualizar produto' });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    res.status(500).json({ message: 'Erro ao excluir produto' });
  }
});

