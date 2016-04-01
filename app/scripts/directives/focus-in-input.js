'use strict';
angular.module('appTaskBoardApp')
  .directive('focusInInput', function () {
    return function (scope, element) {
      //debugger;
      var column =angular.element(element);
      var currentPencil = column.find('span.glyphicon-pencil');

      var currentRemove = column.find('span.glyphicon-remove');
      currentPencil.on('click', function () {
        column.find('input').focus();
      });
      currentRemove.on('click', function () {
        //debugger;
        column.remove();
      });
    };
  });

