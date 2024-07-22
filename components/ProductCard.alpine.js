export default {
    props: ['product'],
    template() {
        return `
            <div class="bg-white rounded shadow-md p-4">
                <h2 class="text-lg font-bold">{{ product.name }}</h2>
                <p class="text-gray-600">{{ product.email }}</p>
                <p class="text-gray-600">{{ product.address.city }}</p>
                <p class="text-gray-600">{{ product.address.street }}</p>
            </div>
        `;
    }
}