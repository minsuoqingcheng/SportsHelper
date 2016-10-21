/**
 * Created by lc on 2016/10/19.
 */
//Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var data = [

    {
        value : 50,
        color : "#69D2E7"
    },
    {
        value: 50,
        color: "#999"
    }
]
new Chart(ctx).Doughnut(data);



