const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/ProductController');

router
  .get('/create', ProductController.createProduct)
  .post('/create', ProductController.createProductPost)
  .post('/remove/:id', ProductController.removeProduct)
  .get('/edit/:id', ProductController.editProduct)
  .post('/edit', ProductController.editProductPost)
  .get('/:id', ProductController.showOneProduct)
  .get('/', ProductController.showProducts)
;

module.exports = router;