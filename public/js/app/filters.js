/* filters.js*/

//1st Letter Capital
app.filter('capitalOne', function() {
	return function(_str) {
	 //return input ? '\u2713' : '\u2718';
	 return String(_str).charAt(0).toUpperCase() + String(_str).slice(1);
   };
});

//Checkbox
app.filter('filterType',function($filter){
	 return function (_obj,_checkBoxModel){
		
        var newArr = [];
		angular.forEach(_obj,function(d,i){//add to array / remove from array??

			if(_checkBoxModel.grant == true  && d.grant == true
				|| _checkBoxModel.debt == true && d.debt == true
				|| _checkBoxModel.equity == true && d.equity == true
				|| _checkBoxModel.support == true && d.support == true
				|| _checkBoxModel.platform == true && d.platform== true
				|| _checkBoxModel.legislation == true && d.legislation== true

				){
				
				newArr.push(d);
			}

			});
		return newArr;
		//
		
	}
	
})

app.filter('filterProfit',function($filter){
	 return function (_obj,_checkBoxModel){
	 	var newArr = [];
		angular.forEach(_obj,function(d,i){//add to array / remove from array??

			if( (_checkBoxModel.profit == true && d.profit== true) 
					|| (_checkBoxModel.nonprofit == true && d.non_profit== true) 
				|| ( (_checkBoxModel.profit == false && d.profit== false) 
					&& (_checkBoxModel.nonprofit == false && d.non_profit== false) )
				)
			{
				
				newArr.push(d);
			}

			});
		return newArr;

	 }
})

			//	&& (_checkBoxModel.profit == true && d.profit== true) || (_checkBoxModel.nonprofit == true && d.non_profit== true)


//string max size
app.filter('isDef',function(){
	 return function (_obj){
		
		if(_obj == ""  ){
			_obj = "&nbsp;";
		}else if(_obj.length >=30){
			_obj = _obj.substring(0, 30) + ".."
		}
		
		return _obj;
		
	}
	
})
//change filter object to array..
app.filter('toArray', function () {
  return function (obj, addKey) {
    if (!angular.isObject(obj)) return obj;
    if ( addKey === false ) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    } else {
      return Object.keys(obj).map(function (key) {
        var value = obj[key];
        return angular.isObject(value) ?
          Object.defineProperty(value, '$key', { enumerable: false, value: key}) :
          { $key: key, $value: value };
      });
    }
  };
});


//return unique item in list
app.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});



