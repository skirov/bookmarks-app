angular.module('gt.components.hello-world1', [
    'ngResource'
]).directive('helloWorld1', function ( stubApi ) {
    return {
        templateUrl: 'app/components/hello-world1/custom-button.html',
        scope: true,
        link: function ( $scope ) {
            $scope.helloText = stubApi.get();
        }
    };
}).factory('stubApi', function ( $resource ) {
    return $resource('app/components/hello-world1/stub.json');
})
