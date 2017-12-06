﻿angular.module("umbraco").controller("Dexmoor.SpecialBusinessHours.controller",
  function ($scope) {
    if (!$scope.model.value) {
      $scope.model.value = [];
    };

    $scope.generateGuid = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    $scope.newDate = {
      id: "",
      date: "",
      isOpen: true,
      hoursOfBusiness: []  }

    $scope.newHoursOfBusiness = {
        id: "",
        opensAt: "",
        closesAt: ""
    }

    $scope.openCheck = function (date) {
        if (date.isOpen) {
        date.hoursOfBusiness = [];
        date.isOpen = false;
      } else {
            date.isOpen = true;
        $scope.addHours(date.hoursOfBusiness);
      }
    }

    $scope.addNewDate = function () {
      var newDate = angular.copy($scope.newDate);
      newDate.id = $scope.generateGuid();
      var newHoursOfBusiness = angular.copy($scope.newHoursOfBusiness);
      newHoursOfBusiness.id = $scope.generateGuid();
      newDate.hoursOfBusiness.push(newHoursOfBusiness);
      $scope.model.value.push(newDate);
    };

    $scope.addHours = function (date)
    {
      if (!angular.isArray(date.hoursOfBusiness)) {
        date.hoursOfBusiness = [];
      }
      var newHoursOfBusiness = angular.copy($scope.newHoursOfBusiness);
      newHoursOfBusiness.id = $scope.generateGuid();
      date.push(newHoursOfBusiness);
    }

    $scope.deleteHours = function (index, parentIndex) {
      $scope.model.value[parentIndex].hoursOfBusiness.splice(index, 1);
    }


    $scope.deleteDate = function (index) {
      $scope.model.value.splice(index, 1);
      if (!angular.isArray($scope.model.value)) {
        $scope.model.value = [];
      }
    }


    $scope.removeOldDates = function(){
          var temp = [];
          for (var i = 0; i < $scope.model.value.length; i++) {
             var date = Date.parse($scope.model.value[i].date);

             if (date > new Date()) {
                  temp.push($scope.model.value[i]);
              }
          }

          $scope.model.value = temp;
    }

    $scope.removeOldDates();
  }
);




