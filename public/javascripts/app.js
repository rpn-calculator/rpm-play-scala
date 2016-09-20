angular.module('components', []);

angular.module('lookUp', []);

angular.module('osprey', [
    'ngRoute',
    'components',
    'lookUp'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/js/lookUp/lookUp.html',
            controller: 'LookUpController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);
