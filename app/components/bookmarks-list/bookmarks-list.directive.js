angular.module('bookmarks-list', [
    'mongolab-factory',
    'bookmarks-tags'
]).directive('bookmarksList', ['mongolabFactory', function() {
   return {
       restrict: 'E',
       require: '^app',
       scope : {
           bookmarks : '=',
           currentTag : '='
       },
       templateUrl : 'app/components/bookmarks-list/bookmarks-list.html',
       link : function(scope, element, attributes, AppController) {
           scope.deleteBookmark = function(bookmark) {
               AppController.deleteBookmark(bookmark);
           };

           scope.editBookmark = function(bookmark) {
               AppController.saveBookmark(bookmark);
           };

           scope.fillForm = function(bookmark) {
               AppController.fillForm(bookmark);
           }
       }
   }
}]);