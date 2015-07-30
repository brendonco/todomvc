angular.module('todomvc')
    .directive('todoList', function todoList($templateCache,$compile) {
        'use strict';

        return {
                restrict: 'E',
                scope: true,
                templateUrl: 'todoList.html'
        };
    });
