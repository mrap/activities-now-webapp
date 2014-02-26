'use strict';

// ===== Welcome Screen Controller ======
app.controller('WelcomeScreenController', ['$scope', function($scope) {
}]);
// ===== / Welcome Screen Controller ======


// ===== Home Screen Controller ======
app.controller('HomeScreenController', ['$scope', 'activityService', 'Restangular', function($scoped, activityService, Restangular) {
  $scoped.activities = activityService.allActivities();
  $scoped.setMainActivity = function(activityId) {
    activityService.setMainActivity(activityId);
  }
  $scoped.sendBeacon = function() {
    var newActivity = { title: $scoped.newActivityTitle }
    Restangular.all('activities').post(newActivity);
  }
}]);
// ===== / Home Screen Controller ======


// ===== DETAILS Screen Controller ======
app.controller('DetailsScreenController', ['$scope', 'activityService', function($scope, activityService) {
  var updateMainActivity = function() {
    $scope.activity = activityService.getMainActivity();
    activityService.registerObserverCallback(updateMainActivity);
  }
  $scope.activity = activityService.getMainActivity();
  activityService.registerObserverCallback(updateMainActivity);
}]);
// ===== / DETAILS Screen Controller ======

// ===== BEACON CREATE Screen Controller ======
app.controller('CreateBeaconController', ['$scope', function($scope) {
}]);
// ===== / BEACON CREATE Screen Controller ======


// ===== BEACON FOUND Screen Controller ======
app.controller('BeaconFoundController', ['$scope', function($scope) {
}]);
// ===== / BEACON FOUND Screen Controller ======


// ===== BEACON JOIN Screen Controller ======
app.controller('BeaconJoinController', ['$scope', function($scope) {
}]);
// ===== / BEACON JOIN Screen Controller ======


// ===== BEACON JOIN Screen Controller ======
app.controller('InboxScreenController', ['$scope', function($scope) {
}]);
// ===== / BEACON JOIN Screen Controller ======
