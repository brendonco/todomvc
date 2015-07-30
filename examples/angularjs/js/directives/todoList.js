angular.module('todomvc')
    .directive('todoList', function todoList($templateCache,$compile) {
        'use strict';

        return {
                restrict: 'EA',
                scope: true,
                templateUrl: 'todoList.html'
        };
    });
