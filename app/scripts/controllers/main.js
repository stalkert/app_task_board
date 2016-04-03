'use strict';
angular.module('appTaskBoardApp')
  .controller('MainCtrl',['List','$rootScope',function(List,$rootScope){
    var _this = this;
    $rootScope.counterColumn = 1;
    $rootScope.countColumn = [0];
    _this.addColumn = List.addOneColumn;
    //$rootScope.counterCard = 1;
    //$rootScope.countCard = [0];
    //_this.addCard = List.addOneCard;
  }]);
