//angular
var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);
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

    $scope.dataSet = [];
    $scope.dataLength = 0;



    $scope.loadData = function() {
        var httpRequest = $http({
            method: 'GET',
            url: '../data/test_03.json'//,
            //data: mockDataForThisTest

        }).success(function(data, status) {
            $scope.dataSet = data.data;
            $scope.dataLength = $scope.dataSet.length;
        });

    };

    //
    $scope.loadData();

});

app.directive("checkboxGroup", function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {

                if (attrs.name == "true") {
                    elem[0].checked = true;
                }else{
                    elem[0].unchecked = true;
                }
                //elem[0].checked = true;
                
            }//end return;

        }
    });//end directive



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