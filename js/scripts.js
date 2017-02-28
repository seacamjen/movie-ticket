//back end logic
function Ticket (inputName, age, time, movie){
  this.inputName = inputName;
  this.age = age;
  this.time = time;
  this.movie = movie;
}

Ticket.prototype.underage = function () {
  return this.inputName + " you are too young for this movie!";
}
var ticketPrice;

//front end Logic
$(function() {
  $("#movieTicket").submit(function(){
    event.preventDefault();

    var name = $("input#name").val();
    var movie =  $("input:radio[name=movie]:checked").val();
    var time =  $("input:radio[name=time]:checked").val();
    var age =  $("input:radio[name=age]:checked").val();

    var ticketPrep = new Ticket(name, age, time, movie);
    console.log(ticketPrep);
    if ((age === "young") && (movie === "r")) {
      $("#output").text(ticketPrep.underage());
    } else {
      if (age === "old") {
        ticketPrice = "$5"

      } else {
        if (time === "less"){
          ticketPrice = "$10"

      } else {
        ticketPrice = "$15"
      }
      }
    }



  });
});
