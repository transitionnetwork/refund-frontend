/* filters.js*/
app.filter('capitalOne', function() {
	return function(_str) {
	 //return input ? '\u2713' : '\u2718';
	 return String(_str).charAt(0).toUpperCase() + String(_str).slice(1);
   };
});