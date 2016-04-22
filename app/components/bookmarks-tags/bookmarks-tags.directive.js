angular.module('bookmarks-tags',[
]).directive('bookmarksTags', function (){
    return {
        restrict: 'E',
        templateUrl: 'app/components/bookmarks-tags/bookmarks-tags.html',
        require: '^app',
        scope : {
            tags: '='
        },
        link: function(scope, element, attributes, controller) {
            scope.$watch('tags', function(value){
                //debugger;
            });

            scope.filterByTag = function(tagTitle, bookmarksForTag) {
                controller.filterByTag(tagTitle, bookmarksForTag);
            }
        }
    }
});