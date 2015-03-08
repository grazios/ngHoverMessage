(function() {
  "use strict";
  var app;

  app = angular.module('seedApp', ['ngHoverMessage']);

  app.controller("SeedController", [
    "$scope", function($scope) {
      $scope.body = "Hello World";
      return $scope.message = "Message";
    }
  ]);

}).call(this);
