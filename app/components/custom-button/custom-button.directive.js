angular.module('gt.components.custom-button', []).directive('customButton', function () {
    return {
        templateUrl: 'app/components/custom-button/custom-button.html',
        scope: { text: '=' },
        transclude: true,
        controllerAs: 'ctrl',
        controller: 'CustomButtonController',
        bindToController: true,
        link: function ( $scope ) {
            $scope.$watch(function () {
                $scope.date = new Date();
            });
        }
    };
});
