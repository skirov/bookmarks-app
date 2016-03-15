angular.module('gdansk-training', [
    'gt.components.hello-world',
    'gt.components.hello-world1',
    'gt.components.custom-button',
    'gt.components.sub-button',
    'gt.components.form-sample',

    'gdanskTraining.templates',
    'gdanskTraining-constant',
    'package-version'
]).run(function ( $log, gdanskTrainingVersion, $rootScope ) {
    $rootScope.field1 = 'root';
    if ( !gdanskTrainingVersion ) { return; }
    $log.info('app version: ' + gdanskTrainingVersion);
}).directive('gdanskTraining', function () {
    return { templateUrl: 'app/app.module.html' };
});

angular.module('gdanskTraining.templates', []);

try {
    angular.module('gdanskTraining-constant');
} catch ( error ) {
    angular.module('gdanskTraining-constant', []).constant('gdanskTrainingVersion', null);
}
