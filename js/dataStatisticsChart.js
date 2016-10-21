/**
 * Created by lc on 2016/10/20.
 */
var step = $("#dataStatistics-step").get(0).getContext("2d");
var data = {
    labels : ["10-10","10-11","10-12","10-13","10-14","10-15","10-16"],
    datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40]
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100]
        }
    ]
};
new Chart(step).Line(data);
