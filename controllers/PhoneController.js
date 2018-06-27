"use strict";

//Контроллер для details.html

export default class PhoneController {

    constructor($scope, $routeParams , $http){

        this.$scope = $scope;

        //ищем файл .json c выбранным телефоном из catalogue
        let phoneProfile = `public/phones/${$routeParams.phoneID}.json`;

        //объект проммиса для получения файла с данными о телефоне
        $http({method: "GET", url: phoneProfile})
            .then( responce => {

                //в случае получения файла телефона данные присваиваем в $scope.phone
                $scope.phone = responce.data;

                //Установка главного первичного и главного изображения в деталях телефона
                $scope.thumbnail = $scope.phone.images[0];

            })//then
            .catch( reject =>{

                //логируем ошибку проммиса
                console.log("EXCEPTION" , reject);

            });//catch

    }//constructor


}//class PhoneController