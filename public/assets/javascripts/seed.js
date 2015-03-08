(function() {
  "use strict";
  var app;

  app = angular.module('seedApp', []);

  app.controller("SeedController", [
    "$scope", function($scope) {
      return $scope.body = "Hello World";
    }
  ]);

}).call(this);
