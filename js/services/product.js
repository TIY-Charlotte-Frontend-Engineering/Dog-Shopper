
module.exports = {

    name:'ProductService', 
    func: function ($http) {

        const searchResults = [];

        return {
            addSearchResults(searchString) {

                $http.get('https://tiy-28202.herokuapp.com/shop/search?q=' + searchString).then(function (response) {
                    // populate 'searchResults' using the results from the get request
                });
            },

            getSearchResults() {
                return searchResults;
            }
        };
    }, 
}

module.export = {
    name: 'ProductService',
    func: function ($http) {

        const searchResults = [];

        return {
            addSearchResults(searchString) {

                $http.get('https://tiy-28202.herokuapp.com/shop/search?q=' + searchString).then(function (response) {
                    // populate 'searchResults' using the results from the get request
                });
            },

            getSearchResults() {
                return searchResults;
            }
        };
    },
};


