'use strict';

/**
 * @ngdoc function
 * @name appTaskBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appTaskBoardApp
 */
angular.module('appTaskBoardApp')
  .controller('MainCtrl', function () {
    var _this = this;
    _this.titleName = "Column1";
    _this.disable = true;
    _this.toggleDisable = function(){
      _this.disable = !_this.disable;
      };
  });
