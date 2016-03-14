angular.module('gt.components.custom-button', [
]).directive('customButton', function () {
    return {
        templateUrl: 'app/components/custom-button/custom-button.html',
        scope: { text: '=' },
        controller: 'CustomButtonController',
        controllerAs: 'ctrl',
        transclude: true,
        bindToController: true
    };
});
