import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Category() {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/categories', { name })
      .then(response => {
        setCategories([...categories, response.data]); 
        setName(''); 
      })
      .catch(error => {
        console.error('Error adding category:', error);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Category Management</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button type="submit">Add Category</button>
      </form>

      <h3>Available Categories:</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
