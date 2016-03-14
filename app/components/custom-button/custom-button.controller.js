angular.module('gt.components.custom-button').controller('CustomButtonController', function () {
    this.realButtonText = '[[' + this.text + ']]';

    this.requiredElements = 0;
});
