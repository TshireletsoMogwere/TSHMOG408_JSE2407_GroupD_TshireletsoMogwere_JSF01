export default {
    data() {
        return {
            products: []
        }
    },
    mounted() {
        // We will fetch the data from the API and update our products array
        fetch('https://fakestoreapi.com/products')
           .then(response => response.json())
           .then(data => {
                this.products = data;
            })
           .catch(error => console.error('Error:', error));
    },
    template() {
        return `
            <div x-for="product in products" class="w-1/2 md:w-1/3 xl:w-1/4 p-6">
                <x-component :is="'ProductCard'" :product="product"></x-component>
            </div>
        `;
    }
}