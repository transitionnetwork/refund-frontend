//angular
var app = angular.module('reApp', 
            ['ngAnimate', 
            'ui.bootstrap',
            'ngSanitize',
            'angucomplete',
            'angularSpinner']);

//
app.config(function(usSpinnerConfigProvider){

    usSpinnerConfigProvider.setDefaults({
            color: '#007681',
            radius:10,
            width:10,
            lines:7,
            length: 0,
            top:'80%',
            left:'50%'
            });
  });

//MAIN CONTROLLER///////////////
app.controller('appCtrl',function($scope, 
                                  $http, 
                                  $log,
                                  $filter,
                                  $interval,
                                  usSpinnerService
                                  ) {

    //MAIN VARIABLES

    //JSON CALL
    $scope.dataSet = [];
    $scope.dataLength = 0;

    //ICONS
    $scope.icons = {};
    $scope.icons.webLink = false;
    $scope.icons.eDit = false;

    //CHECBOX MODEL//  
    $scope.checkboxModel = {};

    $scope.checkboxModel.grant = true;
    $scope.checkboxModel.debt = true;
    $scope.checkboxModel.equity = true;
    $scope.checkboxModel.support = true;
    $scope.checkboxModel.platform = true;
    $scope.checkboxModel.legislation = true;
    $scope.checkboxModel.profit = true;
    $scope.checkboxModel.nonprofit = true;
    $scope.checkboxModel.other = true;
    
    //MAIN SCREEN LISTS
    $scope.empList = {};
    $scope.countryList = {};

    //MAIN SELECTOR SET UP
    $scope.selector = {};

    var filterWords=["name",
                     "provider",
                     "countries",
                     "description",
                     "max"];

    filterWords.forEach(function(d,i){
                    $scope.selector[d] = "";
                });
    
    $scope.sreenResNum = 0;

    $scope.MaxFundNum = 0;
    
    //WATCHERS////////////////////

    $scope.$watch('results.length',function(nV,oV){
        $scope.sreenResNum = nV ;
    });

    //FUNCTIONS//////////////////////////

    //UPDATE SELECTOR MODEL///     
    $scope.updateIt2 = function(_key,_item){
        if(_item == "All"){
            $scope.selector = {};
        }else{
            $scope.selector[_key] = _item;
        }

    }


    //MAIN API CALL
    $scope.loadData = function(_url,_name) {
        var httpRequest = $http({
            method: 'GET',
            url: _url//,

        }).success(function(data, status) {
                
                switch(_name){
                  case "main":
                      $scope.empList = data;
                      angular.forEach($scope.empList,function(d,i){
                        //test..
                        
                        //
                        var curNum = parseInt(d.max);

                        //maxNumArr.forEach(function(dd,ii){
                        if(curNum > $scope.MaxFundNum){
                          $scope.MaxFundNum = curNum;
                          $scope.selector.max = curNum + 1000000;
                        }
                        //});

                        //MaxFundNum
                        /*console.log(":: profit: " + d.profit +
                                    " :non-profit: " + d.non_profit + 
                                    " :other: " + d.other + 
                                    " :support: " + d.supports);*/
                        //console.log("max: " + d.max);
                      });
                      


                      $scope.dataLength = $scope.empList.length;
                      
                      usSpinnerService.stop('spinner-1');
                      
                  break; 
                  case "countries":
                      var rawData = data.data;
                      
                      rawData.unshift({"name":"All"});

                      $scope.countryList = rawData;
                      
                  break; 
                }

                });

        
    };

    //INNIT/////////////////////////////////////////////////////
    var countryListUrl = 'http://api.funds.reconomy.org/v1/countries';
    var mainAPIUrl = 'http://api.funds.reconomy.org/v1/funds?format=frontend'

    $scope.loadData(mainAPIUrl,"main");
    //
    $scope.loadData(countryListUrl,"countries");
    //
    usSpinnerService.spin('spinner-1');
   

});



