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
## Sample
動作するものはWebにあげてないので、このリポジトリを`Clone`して`npm i && bower i && gulp`としてください。そうすっとサーバが立ち上がり、動作します。
