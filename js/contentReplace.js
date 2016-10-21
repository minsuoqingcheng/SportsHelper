/**
 * Created by lc on 2016/10/18.
 */
var container = $(".main-container");


function launchActivity() {
    container.empty();
    $(document).ready(function () {
        $.getScript("js/bootstrap-datetimepicker.min.js");
        $.getScript("js/bootstrap-tagsinput.min.js");
        $.getScript("js/commonWidget.js");
        container.load("LaunchActivity.html #activity");
    });

}

function showTodayData() {
    container.empty();
    $(document).ready(function () {
        $.getScript("js/Chart.js");
        $.getScript("js/myChart.js");
        container.load("dataCollect.html #todayData");
    });
}

function shareTopic() {
    container.empty();
    $(document).ready(function () {
        $.getScript("js/bootstrap-tagsinput.min.js");
        container.load("ShareTopic.html #shareTopic");
    });
}

function totalActivity() {
    container.empty();
    $(document).ready(function () {
        container.load("TotalActivity.html #totalActivity");
    });
}

function myActivity() {
    container.empty();
    $(document).ready(function () {
        container.load("MyActivity.html #myActivity");
    });
}

function allShareTopic() {
    container.empty();
    $(document).ready(function () {
        container.load("AllShareTopic.html #allShareTopic");
    });
}

function friendList() {
    container.empty();
    $(document).ready(function () {
        container.load("FriendList.html #friendList");
    });
}

function socialCircle() {
    container.empty();
    $(document).ready(function () {
        container.load("SocialCircle.html #socialCircle");
    });
}

function dataStatistic() {
    container.empty();
    $(document).ready(function () {
        $.getScript("js/Chart.js");
        $.getScript("js/dataStatisticsChart.js");
        container.load("DataStatistics.html #dataStatistics");
    })
}

function makePlan() {
    container.empty();
    $(document).ready(function () {
        container.load("MakePlan.html #makePlan");
    })
}