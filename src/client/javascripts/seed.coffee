"use strict"

app = angular.module('seedApp',[
  'ngHoverMessage'
  ])

app.controller("SeedController",[
  "$scope"
  ($scope)->
    $scope.body = "Hello World"
    $scope.message = "Message"
  ])
