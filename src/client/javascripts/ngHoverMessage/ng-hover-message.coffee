"use strict"

app = angular.module('ngHoverMessage',[
  "template/nghm-message.html"
  ])
app.controller "ngHoverMessageController",[
  "$scope"
  ($scope)->
]

app.directive("ngHoverMessage",()->
  {
    restrict: 'A'
    scope:{
      message: "="
    }
    controller: 'ngHoverMessageController'
    templateUrl: 'template/nghm-message.html'
    link: (scope, element, attr, controller)->
      element.addClass("nghm_element")
  }
)


angular.module("template/nghm-message.html", []).run [
  "$templateCache"
  ($templateCache)->
    $templateCache.put("template/nghm-message.html",
    """
      <div class="nghm_message_wrap">
        <p>
          {{ message }}
        </p>
      </div>
    """
    )
]
