var savedTimes = []
var savedEvent = []
var eventDescription = ""

$(document).ready(function() {
    $("#currentDay").text(moment().format("MMM Do YYYY, h:mm a"));
});

setInterval(function() {
    $("#currentDay").text(moment().format("MMM Do YYYY, h:mm a"));
  }, 1000);


// $(".saveBtn").on("click", function() {
//     var text = $(this).parent().children(".description").val().trim();
//     var descriptionDiv = $("<div>").addClass("col-10 description past").text(text);
//     var rowTime = $(this).parent().attr("id");
//     savedTimes.push(rowTime);
//     savedEvent.push(text)
//     console.log(savedTimes);
//     console.log(savedEvent)
//     $(this).parent().children(".description").replaceWith(descriptionDiv);

//     localStorage.setItem(rowTime, JSON.stringify($(this).parent().children(".description").text()))
// });

$(".description").on("click", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("col-10 description past").val(text);
    eventDescription = textInput.text();
    $(this).replaceWith(textInput);
    textInput.trigger("focus");

    textInput.on("focusout", function() {
        var descriptionDiv = $("<div>").addClass("col-10 description past");
        // descriptionDiv.text($("<textarea>").text()
        // textInput.replaceWith(descriptionDiv);
    })

    $(".saveBtn").on("click", function() {
        var eventTime = $(this).parent(".row").attr("id")
        //var eventDescription = ($(this).parent().children(".description").text());
        console.log(eventTime);
        console.log(eventDescription);
        //localStorage.setItem(eventTime, eventDescription)
    })
});

// var loadSchedule = function() {
//     var fullTimeList = ["row8AM", "row9AM", "row10AM", "row11AM", "row12AM", "row1PM", "row2PM", "row3PM", "row4PM", "row5PM"]

//     fullTimeList.forEach(function() {
//         for (i = 0; i < savedTimes; i++) {
//             if (fullTimeList === savedTimes) {
//                 var x = savedEvent[i];
//                 var y = savedTime[i];
//                 $("." + y).replaceWith$("<div>").addClass("col-10 description past").text(x);
//             }
//         }
//     })
// };

// loadSchedule();