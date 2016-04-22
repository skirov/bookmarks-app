angular.module('bookmarks-form', [
    'mongolab-factory'
]).directive('bookmarksForm', ['mongolabFactory', function(mongolabFactory) {
    return {
        restrict: 'E',
        templateUrl: 'app/components/bookmarks-form/bookmarks-form.html',
        require: '^app',
        scope: {
            bookmark: '='
        },
        link: function (scope, element, attributes, controller) {
            scope.clear = function() {
                controller.clearForm();
            };

            scope.save = function() {
                controller.saveBookmark(this.bookmark);
            }

            scope.edit = function() {
                controller.editBookmark(this.bookmark);
            }
        }
    };
}]);