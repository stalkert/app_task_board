'use strict';
angular.module('appTaskBoardApp')
  .directive('card', function () {
    var num = 1;
    return {
      scope: {
        count: '=',
        removeCard: '=',
        bgcolor: '='
      },
      restrict: 'E',
      templateUrl: 'views/card.html',
      controller: function () {
        var _this = this;
        _this.cardName = "Card" + num++;
        _this.disable = true;
        _this.disableColor = true;
        _this.toggleDisable = function () {
          _this.disable = !_this.disable;
        };
        _this.toggleDisableColor = function () {
          _this.disableColor = !_this.disableColor;
        };
      },
      controllerAs: 'ctrl2',
      link: function ($scope, element) {
        angular.element(element).find('span.glyphicon-remove.card').on('click', function () {
          $scope.removeCard($scope.count);
        });
      }
    };
  });
