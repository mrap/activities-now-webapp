'use strict';

app.controller('ActivitiesIndexController', function ($scope, Restangular) {
  console.log("FUCK");
  Restangular.all('activities').getList().then(function(activities) {
    $scope.activities = activities;
  });
  $scope.createActivity = function() {
    var newActivity = "activity['title']=\"MyTitle\""
    Restangular.all('activities').getList().then(function(activities) {
      activities.post(newActivity);
    });
  };
});

// app.controller('ActivitiesShowController', ['$scope', '$routeParams', 'Restangular', function ($scope, $routeParams, Restangular) {
//   Restangular.one('activities', $routeParams.activityId).get().then(function(activity){
//     $scope.activity = activity;
//   });
// }]);
// 
// app.controller('ActivitiesPostController', ['scope', 'Restangular', function ($scope, Restangular) {
//   
// }]);
// title
// tags = string array
