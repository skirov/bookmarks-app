angular.module('gt.components.hello-world', [
]).directive('helloWorld', function () {
    return {
        templateUrl: 'app/components/hello-world/hello-world.html',
        link: function ($scope) {
            $scope.helloText = 'hello kitty ^_^';
        }
    };
});
