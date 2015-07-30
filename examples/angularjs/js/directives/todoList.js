angular.module('todomvc')
    .directive('todoList', function todoList($templateCache,$compile) {
        'use strict';

        return {
                restrict: 'EA',
                scope: true,
                templateUrl: 'todoList.html'  

                // The html tags are declared at index.html with ng-template
                // Took me awhile to know how to use it.
        };
    });
