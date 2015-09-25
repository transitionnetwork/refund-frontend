//angular
var app = angular.module('myApp', 
            ['ngAnimate', 
            'ui.bootstrap']);
/*
app.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
*/
//

//http://jsfiddle.net/t7kr8/211/ -- for update()
//http://jsfiddle.net/mjaric/pj5br/ --  basic loading

//https://angular-ui.github.io/bootstrap/ -- accordian

app.controller('appCtrl',function($scope, $http) {

    //JSON CALL
    $scope.dataSet = [];
    $scope.dataLength = 0;

    //MAIN VARIABLES
    $scope.icons = {};
    $scope.icons.webLink = false;
    $scope.icons.eDit = false;



    $scope.loadData = function() {
        var httpRequest = $http({
            method: 'GET',
            url: '../data/test_03.json'//,
            //data: mockDataForThisTest

        }).success(function(data, status) {
            $scope.dataSet = data.data;
            //map data to names
            /*
            data.data[0].forEach(function(v,i){
                console.log("data:: " + v.name)
            });
*/


            $scope.dataLength = $scope.dataSet.length;
        });

    };

    //
    $scope.loadData();
    //
    
    $scope.oneAtATime = true;
    $scope.acc1open = false;
    $scope.acc2open = true;
    $scope.accOpen = {};
    $scope.accOpen[0] = false;
    $scope.accOpen[1] = true;
    $scope.accOpen[2] = false;
    $scope.accOpen[3] = false;

    //$scope.acc1open = false;
    //$scope.acc2open = true;

/*
    $scope.$watch('acc1open', function(){

      console.log("watch acc1:" +$scope.acc1open);
      alert("watch acc1:" +$scope.acc1open);
       
  }, true);
*/
/*
    $scope.$watch('accOpen', function(nV,oV){
          console.log("watch accOpen:" +$scope.accOpen + " nV: " + nV[0] + " oV ->" + oV[0] + " -> " );
      }, true);
*/

    //
    $scope.select= function(index) {
       //$scope.selected = index; 
       
       if($scope.accOpen[index] == true){
            $scope.accOpen[index] = false;
       }else{
            $scope.accOpen[index] = true;
       }
        
       console.log("SELECT: i: " + index + " " + $scope.accOpen[index]);
       
    };

});







/*jquery/datatable
$(document).ready(function() {
    console.log("HERE!");

        var _data = $('#example').DataTable( {
                "ajax": "data/test_01.json",
                "columns": [
                    { "data": "Provider" },
                    { "data": "Fund" },
                    { "data": "Region" },
                    { "data": "Date" },
                    { "data": "State" },
                    { "data": "Grant" },
                    { "data": "Debt" },
                    { "data": "Equity" },
                    { "data": "Support" },
                    { "data": "Platform" },
                    { "data": "Legislation" },
                    { "data": "Weblink" },
                    { "data": "Edit" }
                ]
            } );

    console.log("SET: " + JSON.stringify(_data));
} );//end document ready
*/