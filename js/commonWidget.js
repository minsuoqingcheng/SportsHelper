/**
 * Created by lc on 2016/10/14.
 */

$.fn.datetimepicker.defaults = {
    pickDate: true, //en/disables the date picker
    pickTime: true, //en/disables the time picker
    useMinutes: true, //en/disables the minutes picker
    useSeconds: true, //en/disables the seconds picker
    useCurrent: true, //when true, picker will set the value to the current date/time
    minuteStepping:2, //set the minute stepping
    minDate:'1/1/1900', //set a minimum date
    maxDate: '1/1/2019', //set a maximum date (defaults to today +100 years)
    showToday: true, //shows the today indicator
    language:'en', //sets language locale
    defaultDate:"", //sets a default date, accepts js dates, strings and moment objects
    disabledDates:[], //an array of dates that cannot be selected
    enabledDates:[], //an array of dates that can be selected
    todayBtn:true,
    icons : {
        time: 'glyphicon glyphicon-time',
        date: 'glyphicon glyphicon-calendar',
        up: 'glyphicon glyphicon-chevron-up',
        down: 'glyphicon glyphicon-chevron-down'
    },
    useStrict: false, //use “strict” when validating dates
    sideBySide: true, //show the date and time picker side by side
    daysOfWeekDisabled:[] //for example use daysOfWeekDisabled: [0,6] to disable weekends
};

$(".form_datetime").datetimepicker({
    format: "yyyy MM dd - hh:mm",
    pickTime:true,
    weekStart: 1,
    todayBtn: true,
    autoclose: 1,
    todayHighlight: 1,
    startView: 1,
    maxView:3,
    pickerPosition: "bottom-left"
});

$(".to_datetime").datetimepicker({
    format: "yyyy MM dd - hh:mm",
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 4,
    pickerPosition: "bottom-left"

});




$(function() {
    $('input, select').on('change', function(event) {
        var $element = $(event.target),
            $container = $element.closest('.example');

        if (!$element.data('tagsinput'))
            return;

        var val = $element.val();
        if (val === null)
            val = "null";
        $('code', $('pre.val', $container)).html( ($.isArray(val) ? JSON.stringify(val) : "\"" + val.replace('"', '\\"') + "\"") );
        $('code', $('pre.items', $container)).html(JSON.stringify($element.tagsinput('items')));
    }).trigger('change');
});


var citynames = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: {
        url: 'assets/citynames.json',
        filter: function(list) {
            return $.map(list, function(cityname) {
                return { name: cityname }; });
        }
    }
});
citynames.initialize();

var cities = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: 'assets/cities.json'
});
cities.initialize();

/**
 * Typeahead
 */
var elt = $('.example_typeahead > > input');
elt.tagsinput({
    typeaheadjs: {
        name: 'citynames',
        displayKey: 'name',
        valueKey: 'name',
        source: citynames.ttAdapter()
    }
});

/**
 * Objects as tags
 */
elt = $('.example_objects_as_tags > > input');
elt.tagsinput({
    itemValue: 'value',
    itemText: 'text',
    typeaheadjs: {
        name: 'cities',
        displayKey: 'text',
        source: cities.ttAdapter()
    }
});

elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });

/**
 * Categorizing tags
 */
elt = $('.example_tagclass > > input');
elt.tagsinput({
    tagClass: function(item) {
        switch (item.continent) {
            case 'Europe'   : return 'label label-primary';
            case 'America'  : return 'label label-danger label-important';
            case 'Australia': return 'label label-success';
            case 'Africa'   : return 'label label-default';
            case 'Asia'     : return 'label label-warning';
        }
    },
    itemValue: 'value',
    itemText: 'text',
    // typeaheadjs: {
    //   name: 'cities',
    //   displayKey: 'text',
    //   source: cities.ttAdapter()
    // }
    typeaheadjs: [
        {
            hint: true,
            highlight: true,
            minLength: 2
        },
        {
            name: 'cities',
            displayKey: 'text',
            source: cities.ttAdapter()
        }
    ]
});
elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });

// HACK: overrule hardcoded display inline-block of typeahead.js
$(".twitter-typeahead").css('display', 'inline');
