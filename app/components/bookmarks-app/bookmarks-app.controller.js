angular.module('bookmarks-app').controller('BookmarksApp', function ($scope, mongolabFactory) {

    var that = this;
    $scope.bookmarksList = [];
    $scope.tagsList = {};

    $scope.bookmarkModel = {
        url : '',
        title : '',
        tags : ''
    };

    $scope.currentTag = 'none';

    this.getAllBookmarks = function() {
        return mongolabFactory.query().$promise;
    };

    this.deleteBookmark = function (bookmark) {
        mongolabFactory.remove({id: bookmark._id.$oid}, function (data) {
            $scope.bookmarksList = $scope.bookmarksList.filter(function (bm) {
                return bm._id.$oid !== data._id.$oid;
            });

            bookmark.tags.forEach(function (tag) {
                var bookmarksInTag = $scope.tagsList[tag];
                if(bookmarksInTag.length == 1) {
                    delete $scope.tagsList[tag];
                    return;
                }
                bookmarksInTag.forEach(function(bookmarkInTag, index) {
                    if(bookmarkInTag._id.$oid == data._id.$oid) {
                        $scope.tagsList[tag].splice(index, 1);
                        return;
                    }
                })
            });
        });
    };

    this.editBookmark = function(bookmark) {
        if(!(bookmark.tags instanceof String)) {
            bookmark.tags = bookmark.tags.split(',');
            that.createTags(bookmark);
        }
        mongolabFactory.update({id: bookmark._id.$oid}, bookmark).$promise.then(function (data) {
            var data = data.toJSON();
            that.mapTags(data.tags, data);
            $scope.bookmarksList.forEach(function(bm) {
                if(bm._id.$oid == bookmark._id.$oid) {
                    angular.extend(bm, data);
                }
            });
            that.clearForm();
        });
    };

    this.saveBookmark = function(bookmark) {
        bookmark.tags = bookmark.tags.split(',');
        that.createTags(bookmark);
        mongolabFactory.save(bookmark, function (data) {
            that.mapTags(data.tags, data);
            $scope.bookmarksList.push(data.toJSON());
            that.clearForm();
        });
    };

    this.fillForm = function(bookmarkFromList) {
        angular.extend($scope.bookmarkModel, bookmarkFromList);
    };

    this.clearForm = function () {
        $scope.bookmarkModel = {
            url : '',
            title : '',
            tags : ''
        };
    };

    this.mapTags = function(tags, bookmark) {
        if(!tags) {
            return {};
        }

        tags.forEach(function(tag) {
            if(!$scope.tagsList[tag]) {
                $scope.tagsList[tag] = [bookmark]
            } else {
                $scope.tagsList[tag].push(bookmark);
            }
        });
    };

    this.createTags = function(bookmark) {
        bookmark.tags.filter(function (tag) {
            var _tag = tag.trim();
            return _tag.length !== 0;
        }).map(function(tag) {
            return tag.trim();
        });
    };

    this.filterByTag = function(tagTitle, bookmarksForTag) {
        $scope.currentTag = tagTitle;
        $scope.bookmarksList = bookmarksForTag;
    };

    this.getAllBookmarks().then(function (data) {
        $scope.bookmarksList = data;
        data.forEach(function(bookmark) {
            that.mapTags(bookmark.tags, bookmark);
        });
    });
});