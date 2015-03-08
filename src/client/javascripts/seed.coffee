"use strict"

app = angular.module('seedApp',[])

app.controller("SeedController",[
  "$scope"
  ($scope)->
    $scope.body = "Hello World"
  ])
