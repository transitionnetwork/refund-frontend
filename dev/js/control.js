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
