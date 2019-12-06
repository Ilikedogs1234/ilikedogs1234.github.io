var destination = ""
var departure = ""
var startTime = ""
var endTime = ""
var date = ""
var price = 0


$(document).ready(function(){
    $('#page2').hide();
    $('#flightCard').on('click', function() {  
        destination="Charleston"
        departure="Atlanta"
        date = "5/22/20"
        price = 150
        startTime="10:50"
        endTime = "3:20"
        $('#page1').hide();
        $('#page2').show();
        $('#travelInfo').text(departure + " -> " + destination);
        $('#startTime').text("Start Time: " + startTime)
        $('#endTime').text("End Time: " + endTime)
        $('#date').text(date)
        $('#price').text("$" + price)
    });
});