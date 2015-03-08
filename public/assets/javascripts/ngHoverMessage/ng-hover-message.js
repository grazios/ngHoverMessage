(function() {
  "use strict";
  var app;

  app = angular.module('ngHoverMessage', ["template/nghm-message.html"]);

  app.controller("ngHoverMessageController", ["$scope", function($scope) {}]);

  app.directive("ngHoverMessage", function() {
    return {
      restrict: 'A',
      scope: {
        message: "="
      },
      controller: 'ngHoverMessageController',
      templateUrl: 'template/nghm-message.html',
      link: function(scope, element, attr, controller) {
        return element.addClass("nghm_element");
      }
    };
  });

  angular.module("template/nghm-message.html", []).run([
    "$templateCache", function($templateCache) {
      return $templateCache.put("template/nghm-message.html", "<div class=\"nghm_message_wrap\">\n  <p>\n    {{ message }}\n  </p>\n</div>");
    }
  ]);

}).call(this);
