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


## Settings
### Templates
template/nghm-message.html  
対象の要素にカーソルをhoverしたときに現れる要素。DOMに実際に挿入される。
```
<div class="nghm_message_wrap">
  <p>
    {{ message }}
  </p>
</div>
```
### CSS
`.nghm_element` : ng-hover-messageを追加したElementに追加されるClass。このDirectiveがやってるのはこのClass追加とあとDOMの自動挿入だけやで  
`.nghm_message_wrap` : Template参照
