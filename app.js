"use strict";

import CatalogueController from './controllers/CatalogueController';
import PhoneController from './controllers/PhoneController';

//начальная инициализация модулей приложения
angular.module('MyApplication.controllers', []);

//Регистрация модуля CatalogueController
angular
    .module('MyApplication.controllers')
    .controller('CatalogueController', ['$scope', CatalogueController]);

//Регистрация модуля PhoneController
angular
    .module('MyApplication.controllers')
    .controller('PhoneController', ['$scope', '$routeParams' , '$http' , PhoneController]);

//Подключение подулей в приложение
let app = angular.module('MyApplication',[
    'MyApplication.controllers',
    'ngRoute'
]);

//конфигурация маршрутизации
app.config(['$routeProvider' , '$locationProvider' , function ($routeProvider , $locationProvider){

        $locationProvider.html5Mode(true);

        //маршрут для основной страницы каталога
        $routeProvider.when('/' , {

            templateUrl: 'templates/catalogue.html',
            controller: ['$scope', CatalogueController]

        });

        //маршрут для просмотра деталей выбранного телефона
        $routeProvider.when('/phones/:phoneID', {

            templateUrl: 'templates/details.html',
            controller: ['$scope', '$routeParams' , '$http' , PhoneController]

        });

}]
);//app.config

app.run(['$rootScope'] , function ($rootScope){

    console.log('Welcome, My First Angular App!')

}
);//app.run