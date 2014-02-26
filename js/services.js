'use strict';

var apiUrl = 'http://activities-now.herokuapp.com/';
// var apiUrl = 'http://mrap.local:3000/';

app.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl(apiUrl);
}]);

app.service('activityService', function(Restangular) {
    var mainActivity = {};
    var observerCallbacks = [];

    var notifyObservers = function() {
      angular.forEach(observerCallbacks, function(callback){ 
        callback();
      });
    };

    this.registerObserverCallback = function(callback) {
      observerCallbacks.push(callback);
    };
    this.setMainActivity = function(activityId) {
      mainActivity = this.getActivity(activityId);
      notifyObservers();
    };
    this.getMainActivity = function() {
      return mainActivity;
    };
    this.allActivities = function() {
      return Restangular.all('activities').getList().$object;
    };
    this.createActivity = function(newActivity, successCallback, failureCallback) {
      return Restangular.all('activities').post(newActivity).then(successCallback, failureCallback);
    };
    this.getActivity = function(activityId) {
      return Restangular.one('activities', activityId).get().$object;
    };
});
