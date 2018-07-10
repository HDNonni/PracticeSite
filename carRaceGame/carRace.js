$(document).ready(function () {


    $("#go").click(function () {

        // build a function that checks to see of a car has won the race
        function checkIfComplete() {
            if (isComplete == false) {
                isComplete = true;
            } else {
                place = 'second';
            }
        }



        //get width of the cars
        var carWidth = $('.car').width();

        //get wisth pf the racetrack
        var raceTrackWidth = $(window).width() - carWidth;

        //generate random # betw 1 and 5000

        var raceTime1 = Math.floor((Math.random() * 5000) + 1);
        var raceTime2 = Math.floor((Math.random() * 5000) + 1);

        //set flag variable to FALSE by default

        var isComplete = false;

        //set a flag variable to First by default
        var place = "first";

        //animate car 1

        $("#car1").animate({
            //move car width of race track
            left: raceTrackWidth
        }, raceTime1, function () {
            //animation complere

            //run a function to let you know if car completed race
            //call function in both conditions to determine 1st or 2nd place
            checkIfComplete();
            //give some text feedback in the race info box
            $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' +
                raceTime1 + ' milliseconds!')
        })
        $("#car2").animate({
            //move car width of race track
            left: raceTrackWidth
        }, raceTime2, function () {
            //animation complere

            //run a function to let you know if car completed race
            checkIfComplete();
            //give some text feedback in the race info box
            $('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' +
                raceTime2 + ' milliseconds!')
        })

    });

    $('#reset').click(function(){
        $('.car').css('left','0');
        $('.raceInfo span').text("");
    });



});