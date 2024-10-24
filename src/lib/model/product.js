import mongoose from 'mongoose';

const productModel = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    color: String,
    company: String
});

export const product = mongoose.models.products || mongoose.model('products', productModel );