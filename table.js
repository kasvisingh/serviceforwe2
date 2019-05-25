"use strict";



var thisDay = new Date("May 25, 2019");

var tableHTML=  "<table id='eventTable'>" +
 "<caption>Upcoming Events</caption>" +
 "<tr><th>Date</th><th>Event</th><th>Location</th></tr>";

var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

for (var i = 0; i < eventDates.length; i++){

    var eventDate= new Date(eventDates[i]);
    var eventDay= eventDate.toDateString();
    var eventTime= eventDate.toLocaleTimeString();




if (thisDay <= eventDate && eventDate <= endDate) {
		tableHTML += "<tr> <td>" + eventDay + " @ " + eventTime + 
"</td>" + "<td>" + eventDescriptions[i] + "</td>" + "<td>" + eventLocation[i] + "</td> </tr>";
    }
}

tableHTML += "</table>";
document.getElementById("eventList").innerHTML = tableHTML;
