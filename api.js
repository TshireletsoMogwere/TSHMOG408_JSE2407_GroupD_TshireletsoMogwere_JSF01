fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
   .then(_data => {
        // We will use the data to populate our store
    })
   .catch(error => console.error('Error:', error));