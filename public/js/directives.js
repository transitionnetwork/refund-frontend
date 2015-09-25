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

app.directive("linkGraphic", function(){
        return {
            restrict: "A",
            link: function(scope, elem,attrs){

             var theName = attrs.name;

             //scope.webBtn
             //elem[0].addClass('MyClass');
                 if(attrs.data != "null"){
                    //scope.icons.webLink = true;
                    elem.addClass(theName + 'Off');
                    console.log("::--> " + attrs.data);
                 }else{
                    elem.addClass(theName + 'On');
                    //scope.icons.webLink = false;
                 }


            }




        }//end return;
});

app.directive('rowHover',
   function() {
      return {
         link : function(scope, elem, attrs) {

            /*
            elem.parent().bind('mouseenter', function() {
                //element.show();
                console.log("ON");
                //elem.addClass('tBodyH');
            });
            elem.parent().bind('mouseleave', function() {
                 //element.hide();
                 console.log("OFF");
            });
            */
       }
   };
});



