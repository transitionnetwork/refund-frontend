/* filters.js*/

//numeric
app.filter('numFormat', function() { 
			return function (_val,_cur,_context,_size) { // Nine Zeroes for Billions 
				
				var val =0;
				val = parseFloat(_val);
				
				//return val + "K";
				return Math.abs(Number(val)) >= 1.0e+3 ? " " + _cur + "" + (Math.abs(Number(val))).toFixed(0) + "K"
				: val + "K";
				/*
				return Math.abs(Number(val)) >= 1.0e+3 ? "<div class='digit03c'>" + _cur + "" + (Math.abs(Number(val))).toFixed(0) + "</div>"
				: Math.abs(Number(val)) >= 1.0e+2 ? "<div class='digit0c'>" + _cur + "" + (Math.abs(Number(val))).toFixed(0) + "</div>"
				: Math.abs(Number(val)) >= 1.0e+1 ? "<div class='digit01c'>" + _cur + "" + Math.abs(Number(val)).toFixed(0) + "</div>"
				: Math.abs(Number(val)) >= 1.0 ? "<div class='digit00c'>" + _cur + "" + Math.abs(Number(val)).toFixed(0) + "</div>"
				: "<div class='digit0c'>" + _cur + "" + Math.abs(Number(val)).toFixed(2) + "</div>";
				*/
				

				} 
			}); 

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
			}/*else{
				console.log("filter: " + d.name);
			}*/

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
					|| ( (_checkBoxModel.other == true) && (d.other == true) )
				)
			{
				
				newArr.push(d);
			}

			});
		return newArr;

	 }
})

app.filter('filterMax',function($filter){
	 return function (_obj,_selectMax){
	 	console.log("<-------filer max----------->")
	 	var newArr = [];
		angular.forEach(_obj,function(d,i){//add to array / remove from array??

			var maxVal = parseInt(d.max);
			var selectVal = parseInt(_selectMax);
			//temp
			//Acumen Fund selectVal: 1500000 maxVal: 
			//1600000
			//1500000
			
			//

			if( ( (selectVal > maxVal) && maxVal != 0 )
				|| maxVal == 0
				|| _selectMax == ""
				)

			{
				//console.log(":-> name: " + d.name + " selectMax: " + _selectMax + " d.max: " + d.max);
				//console.log(":-> name: " + d.name + " selectVal: " + selectVal + " maxVal: " + maxVal);
				newArr.push(d);
			}

			});
		return newArr;

	 }
})

			


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



