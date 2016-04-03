'use strict';
angular.module('appTaskBoardApp')
  .directive('column',['List', function (List) {
    var num = 1;
    return{
      //scope:{},

      restrict: 'E',
      templateUrl:'views/column.html',
      controller:function(){
        var _this = this;
        _this.titleName = "Column"+ num++;

        _this.disable = true;
        _this.toggleDisable = function(){
          _this.disable = !_this.disable;
        };
        _this.counterCard =1;
        _this.countCard = [0];
        //_this.addCard = function () {
        //  //debugger;
        //  _this.countCard.push(_this.counterCard++);
        //};
        _this.addCard = List.addOneCard(_this);
        _this.removeCard = function(count){
         // debugger;
          _this.countCard.splice(_this.countCard.indexOf(count),1);
        };
      },
      controllerAs:'ctrl'
    };
  }]);
