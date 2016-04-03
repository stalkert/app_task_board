'use strict';
angular.module('appTaskBoardApp')
  .directive('focusInInputColumn', function () {
    return function (scope, element) {
      var column = angular.element(element);
      var currentPencil = column.find('span.glyphicon-pencil.column');
      var currentRemove = column.find('span.glyphicon-remove.column');
      currentPencil.on('click', function () {
        column.find('input').focus();
      });
      currentRemove.on('click', function () {
        column.remove();
      });
    };
  })
  .directive('focusInInputCard', function () {
    return function (scope, element) {
      //debugger;
      var card = angular.element(element);
      var currentPencil = card.find('span.glyphicon-pencil.card');
      var currentRemove = card.find('span.glyphicon-remove.card');
      var currentBgColor = card.find('span.glyphicon-tint.card');
      currentPencil.on('click', function () {
        card.find('input[name=card]').focus();
      });
      currentRemove.on('click', function () {
        card.remove();
      });
      currentBgColor.on('click', function () {
        card.find('input[name=color]').focus();
      });

    };
  });


