angular.module('bookmarks-app', [
    'bookmarksApp.templates',
    'mongolab-factory',
    'bookmarks-list',
    'bookmarks-form',
    'ngRoute'
]).config(function ($routeProvider, mongolabFactoryProvider) {
    mongolabFactoryProvider.setConfigs({
        collection: 'bookmarks',
        dataBase: 'kirov-db',
        apiKey: 'PcuAcq0p7LM9Xjpt1FPN6jULOn30EVae'
    });
});

angular.module('bookmarksApp.templates', []);