angular.module('gt.components.sub-button', [
    'gt.components.custom-button'
]).directive('subButton', function () {
    return {
        templateUrl: 'app/components/sub-button/sub-button.html',
        require: '?^customButton',
        scope: true,
        link: function ( $scope, $element, $attrs, customButton ) {

            customButton.requiredElements++;
        }
    };
}).directive('customClick', function () {
    return function ( $scope, $element, $attr ) {
        var doAction = function () {
            $scope.$eval($attr.customClick);
            $scope.$digest();
        };

        $element.bind('click', doAction);

        $scope.$on('$destroy', function(){
           $element.unbind('click', doAction)
        });
    }
});
