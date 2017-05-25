module.exports = {
    name: 'ProductService',
    func: function ($http) {

        const searchResults = [];

        return {
            getAllItems(){

                return $http.get('https://tiy-28202.herokuapp.com/shop/items').then(function(response){
                    return response.data;
                })

            },

            addSearchResults(searchString) {

                $http.get('https://tiy-28202.herokuapp.com/shop/search?q=' + searchString).then(function (response) {
                    console.log(response);
                    for(let i = 0; i < response.data.length; i++){
                        searchResults.push(response.data[i]);
                    }
                });
            },

            getSearchResults() {
                return searchResults;
            },

            getOneItem(id){
                    const detail = {};

                    $http.get('https://tiy-28202.herokuapp.com/shop/items/' + id).then(function (response) {
                    
                    console.log(response.data);
                    angular.copy(response.data, detail);

                });

                return detail;

            },

        };
    },
};



