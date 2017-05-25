module.exports = {
    name: 'CartService',
    func: function ($http) {

        const cartItems = [];

        return {
            addToCart(item){
                cartItems.push(item);
            },

            getCart(){
                return cartItems;
            },
        };
    },
};