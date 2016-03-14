angular.module('gt.components.sub-button', [
    'gt.components.custom-button'
]).directive('subButton', function () {
    return {
        templateUrl: 'app/components/sub-button/sub-button.html',
        require: '?^customButton',
        link: function ( $scope, $element, $attrs, customButton ) {
            customButton.requiredElements++;
        }
    };
});
