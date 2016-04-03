'use strict';
angular.module('appTaskBoardApp')
  .factory('List', ['$rootScope', function ListFactory($rootScope) {

    return {
      addOneColumn: function () {
        //debugger;
        $rootScope.countColumn.push($rootScope.counterColumn++);
      },
      //addOneCard: function () {
      //  $rootScope.countCard.push($rootScope.counterColumn++);
      //},
      addOneCard: function (context) {
        return function () {
          context.countCard.push(context.counterCard++);
        };
      }
      //removeOneCard: function (context) {
      //  return function (count) {
      //    alert(7);
      //    context.countCard.splice(count, 1);
      //  };
      //}
    };
  }]);
