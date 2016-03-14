angular.module('gt.components.hello-world', [
    'gt.components.hello-world1'
]).directive('helloWorld', function () {
    return {
        templateUrl: 'app/components/hello-world/hello-world.html',
        scope: true,
        link: function ($scope) {
            $scope.helloText = 'hello kitty ^_^ ow';
        }
    };
});
