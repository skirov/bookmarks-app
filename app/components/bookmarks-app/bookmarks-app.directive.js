angular.module('bookmarks-app').directive('app', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/bookmarks-app/bookmarks-app.html',
        controller: 'BookmarksApp',
        bindToController: true
    };
});