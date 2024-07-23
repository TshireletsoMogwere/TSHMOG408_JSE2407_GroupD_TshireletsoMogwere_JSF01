function ecommerceStore() {
    return {
        products: [],
        filteredProducts: [],
        categories: [],
        selectedCategory: '',
        searchTerm: '',
        sortOption: 'default',
        selectedProduct: null,
        isLoading: true,
        isModalLoading: false,

        fetchProducts() {
            this.isLoading = true;
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => {
                    this.products = data;
                    this.filteredProducts = data;
                    this.categories = [...new Set(data.map(product => product.category))];
                    this.isLoading = false;
                });
        },

        updateFilteredProducts() {
            this.isLoading = true;
            setTimeout(() => {  
                let tempProducts = this.products;

                // Filter by category
                if (this.selectedCategory) {
                    tempProducts = tempProducts.filter(product => product.category === this.selectedCategory);
                }

                // Apply sorting
                if (this.sortOption === 'lowToHigh') {
                    tempProducts.sort((a, b) => a.price - b.price);
                } else if (this.sortOption === 'highToLow') {
                    tempProducts.sort((a, b) => b.price - a.price);
                }

                // Apply search term
                if (this.searchTerm) {
                    tempProducts = tempProducts.filter(product =>
                        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
                    );
                }

                this.filteredProducts = tempProducts;
                this.isLoading = false;
            }, 500); 
        },

        openModal(productId) {
            this.isModalLoading = true;
            
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(response => response.json())
                .then(data => {
                    this.selectedProduct = data;
                    this.isModalLoading = false;
                });
        },

        closeModal() {
            this.selectedProduct = null;
        }
    }
}

// Initialize Alpine
document.addEventListener('alpine:init', () => {
    Alpine.data('ecommerceStore', ecommerceStore);
});

Alpine.start();