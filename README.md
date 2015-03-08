# ng-hover-message
hoverした時にメッセージをオーバーレイしたい。そんときいちいち要素を追加して、CSSでごにょごにょやってってやるのが面倒くさかったので作った。
##e.g.  
index.jade
```
 div(ng-hover-message message="mes")
```
hogeContoroller.coffee
```
"use strict"

app = angular.module('seedApp',[
  'ngHoverMessage'
  ])

app.controller("HogeController",[
  "$scope"
  ($scope)->
    $scope.mes = "表示したい文字"
  ])
```
