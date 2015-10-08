app.directive("checkboxGroup", function() {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {

                if (attrs.name == "true") {
                    elem[0].checked = true;
                }else if(attrs.name == "false"){
                    elem[0].unchecked = true;
                }else{
                    //console.log("::..>? " + attrs.name);
                }
                //elem[0].checked = true;
                
            }

        }//end return;
    });//end directive

//CHOOSE THE CORRECT FLAG...
app.directive("linkGraphic", function(){
        return {
            restrict: "EA",
            
            link: function(scope, elem, attrs){

            var theName = attrs.name;
            var countrySplit = theName.split(",");
                
                scope.newArr = [];
                
                if(theName != "w" && theName != "ed"){
                  angular.forEach(countrySplit,function(d,i){

                        var cleanD = d.replace(/ /g, '');

                        switch(cleanD){
                            case "England":
                                    scope.newArr.push("<div class='icons engOn'></div>");
                            break;
                            case "Wales":
                                    scope.newArr.push("<div class='icons waleOn'></div>");
                            break;
                            case "Ireland":
                                    scope.newArr.push("<div class='icons ireOn'></div>");
                            break;
                            case "Scotland":
                                    scope.newArr.push("<div class='icons scotOn'></div>");
                            break;
                            case "EastAfrica":
                                    scope.newArr.push("<div class='icons eAfricOn'></div>");
                            break;
                            case "WestAfrica":
                                    scope.newArr.push("<div class='icons AfricOn'></div>");
                            break;
                            case "India":
                                    scope.newArr.push("<div class='icons indiOn'></div>");
                            break;
                            case "Pakistan":
                                    scope.newArr.push("<div class='icons pakOn'></div>");
                            break;
                            case "Denmark":
                                    scope.newArr.push("<div class='icons denOn'></div>");
                            break;
                            case "Sweden":
                                    scope.newArr.push("<div class='icons swedOn'></div>");
                            break;
                            case "Holland":
                                    scope.newArr.push("<div class='icons holOn'></div>");
                            break;
                            case "US":
                                    scope.newArr.push("<div class='icons usOn'></div>");
                            break;
                            default:
                                    scope.newArr.push("<div class='icons defaultFlag'></div>");
                            break;
                        }


                  }); 

             }else{
                        var newName = theName + 'On';
                        scope.newArr.push("<div class='icons " + newName + "'></div>");
             }

              
              elem.append(scope.newArr.join("")); 
              

        }




        }//end return;
});







