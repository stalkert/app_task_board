'use strict';
angular.module('appTaskBoardApp')
  .controller('CardCtrl',['List','$rootScope', function (List,$rootScope) {
    var _this = this;
    _this.cardName = "Card" + num++;
    _this.disable = true;
    _this.counterCard =1;
    _this.countCard = [0];
    //_this.addCard = List.addOneCard(_this);

    _this.toggleDisable = function(){
      _this.disable = !_this.disable;
    };
  }]);
