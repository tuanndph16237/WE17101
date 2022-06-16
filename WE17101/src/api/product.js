import api from './axios';

const prefix = '/products';

export const getProducts = () => api.get(product);

export const getProduct = (id) => api.get(`${product}/${id}`);

export const deleteProduct = (id) => api.delete(`${product}/${id}`);

export const createProduct = (data) => api.post(product, data);

export const updateProduct = (id, data) => api.put(`${product}/${id}`, data);