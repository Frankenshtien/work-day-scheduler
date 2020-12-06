

$(document).ready(function() {
    $("#currentDay").text(moment().format("MMM Do YYYY, h:mm a"));
});

setInterval(function() {
    $("#currentDay").text(moment().format("MMM Do YYYY, h:mm a"));
  }, 1000);


$(".saveBtn").on("click", function() {
    var text = $(this).parent().children(".description").val().trim();
    var descriptionDiv = $("<div>").addClass("col-10 description past").text(text);
    var rowTime = $(this).parent().attr("id");
    $(this).parent().children(".description").replaceWith(descriptionDiv);

    localStorage.setItem(rowTime, JSON.stringify($(this).parent().children(".description").text()))
});

$(".description").on("click", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("col-10 description past").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});