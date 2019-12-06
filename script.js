var destination = ""
var departure = ""
var startTime = ""
var endTime = ""
var date = ""
var price = 0


$(document).ready(function(){
    $('#page2').hide();
    $('#flightCard1').on('click', function () {showPageTwo("Charleston","Atlanta", "5/22/20", 150, "10:50 AM", "3:20 PM")});
    $('#flightCard2').on('click', function () {showPageTwo("Raleigh","Atlanta", "12/27/19", 150, "11:20 AM", "12:05 PM")});
    $('#flightCard3').on('click', function () {showPageTwo("Orlando","Atlanta", "1/7/20", 150, "7:00 PM", "7:37 PM")});
    $('#flightCard4').on('click', function () {showPageTwo("Memphis","Atlanta", "4/7/20", 150, "3:30 AM", "4:15 PM")});
    $('#flightCard5').on('click', function () {showPageTwo("Miami","Atlanta", "6/1/20", 150, "4:00 PM", "4:57 PM")});
});
function showPageTwo(destination, departure, date, price, startTime, endTime) {
    $('#page1').hide();
    $('#page2').show();
    $('#travelInfo').text(departure + " -> " + destination);
    $('#startTime').text("Start Time: " + startTime)
    $('#endTime').text("End Time: " + endTime)
    $('#date').text(date)
    $('#price').text("$" + price)
}