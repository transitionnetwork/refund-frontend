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

    //INFO ROLLOVER ARRAY:
    $scope.infoHover = {};
    //LH
    $scope.infoHover.provider = "Fund Provider: To search the database for a specific fund provider enter the name of the fund provider here.";
    $scope.infoHover.countries = "Country: To find funds only available to projects in your country choose from the drop down list below.";
    $scope.infoHover.desc =  "Description Search: Please enter keywords as text to filter the list to find a fund that have your keyword in their textual description.";
    $scope.infoHover.fType = "Fund Name / Type: To search for a specific fund name enter the name of fund here."; 
    $scope.infoHover.specLoc = "Specific Location: Please enter keywords as text to filter the list to find a fund that is specific to your location.";
    $scope.infoHover.maxFund = "Maximum Fund: Please enter maximum fund size."
    //RH
    $scope.infoHover.grant = "Grant: Money that you don't need to repay, but normally do need to spend in accordance with the wishes of the funder.";
    $scope.infoHover.debt = "Debt: Money that you do need to repay, normally with some interest and over a specified term";
    $scope.infoHover.equity = "Equity: Money that is invested in the enterprise (normally as shares), may be withdrawn at some point in the future and normally gives rights to the investor to receive a share of any profits. Equity also normally gives some degree of control over the enterprise."; 
    $scope.infoHover.support = "Business Support: Support from organisations in the form of investment readiness, business planning, financial advice and other areas that enable you to move towards developing your business.";
    $scope.infoHover.platform = "Funding Platform: a platform (on or offline) that helps you access finance by promoting your project to large number of people/organisations who may be interested in investing.";
    $scope.infoHover.legislation = "Government Incentives: Incentive schemes provided by the UK Government to support organisations in raising finance to grow your business.";
    //TABLE
    $scope.infoHover.providerT = "Fund Provider & Fund Name: Click on any of the links below to get more detail.";
    $scope.infoHover.fundT = "Funding Types: The shaded circles show which funding types the providers are able to provide.";
    $scope.infoHover.lastUp = "Last Updated: When the fund details were last edited / adjusted.";
    $scope.infoHover.countryT = "Country: The country or countries for which each fund is relevant";

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

    $scope.splashOn = true;
    //$scope.scrnScroll = "overflow:hidden";

    $scope.splashGo = function(d){
        //$scope.scrnScroll = "overflow:auto";
        $scope.splashOn = false;
        console.log("GO!");
    }
    
    //WATCHERS////////////////////

    $scope.$watch('results.length',function(nV,oV){
        $scope.sreenResNum = nV ;

    });

    //FUNCTIONS//////////////////////////
    $scope.orderSort = 'provider';
    
    //$scope.orderSort.provider = true;
    //$scope.orderSort.type = true;

    $scope.changeOrder = function(_d){
        /*
        if ($scope.orderSort[_d]== true ){
            $scope.orderSort[_d] = false;
        }else{
            $scope.orderSort[_d] = true;
        }
        */
        $scope.orderSort = _d;
        
    }
    

    //UPDATE SELECTOR MODEL///     
    $scope.updateIt2 = function(_key,_item){
        if(_item == "All"){
            $scope.selector = {};
            $scope.selector.max = 16000000;//?
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

                      //console.log("DATA : " + JSON.stringify($scope.empList) );
                      
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

                      //$scope.countryList = rawData;
                      //manula overwrite..
                      $scope.countryList = [
                                            {
                                                "name": "All"
                                            },
                                            {
                                                "name": "England"
                                            },
                                            {
                                                "name": "Scotland"
                                            },
                                            {
                                                "name": "Wales"
                                            },
                                            {
                                                "name": "Ireland"
                                            }
                                        ];

                      //console.log(":->> raw: " + JSON.stringify(rawData) ) ;
                      
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



