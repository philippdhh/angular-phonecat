'use strict';

/* Controllers */

var phonecatApp = new angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
        {

            'name': 'iPhone',
            'snippet': 'Gutes Telefongerät!'
        },
        {
            'name': 'Samsung Quatsch',
            'snippet': 'Für die Tonne!'
        }
    ];
    $scope.persons = [
        {
            'firstName': 'Philipp',
            'lastName': 'Dudda'
        }
    ];
    $scope.currentPerson = "Hallo";
});

phonecatApp.controller('NameListCtrl', function ($scope) {
    $scope.persons = [
        {
            'firstName': 'Philipp',
            'lastName': 'Dudda'
        },
        {
            'firstName': 'Renate',
            'lastName': 'Mustermann'
        }
    ];
    $scope.currentPerson = "Hallo";
});