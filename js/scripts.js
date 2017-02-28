//back end logic
function Ticket (age, time, movie){
  this.age = age;
  this.time = time;
  this.movie = movie;
}

var ticketPrice;

//front end Logic
$(function() {
  $("#movieTicket").submit(function(){
    event.preventDefault();

    var movie =  $("input:radio[name=movie]:checked").val();
    var time =  $("input:radio[name=time]:checked").val();
    var age =  $("input:radio[name=age]:checked").val();

    var ticketPrep = new Ticket(age, time, movie);
    if ((age === "young") && (movie === "r")) {
      alert("You are too young to see this movie! Choose another movie!");
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
