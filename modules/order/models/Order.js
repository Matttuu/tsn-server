/* Er endnu ikke udviklet til brug hverken på server eller i klient */

import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  productAmount: {
    type: Number,
    requried: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Order = model('order', OrderSchema);

module.exports = Order;
