$(document).ready(function() {

  //Add Burger Click Handler
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-input").val().trim(),
      devoured: "false"
    };

    console.log(newBurger);

    //ajax post
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newBurgerStatus = $(this).data("buttondevoured");
    var newBurgerState;
    if (newBurgerStatus == 0){
      newBurgerState = {
        devoured: 1
      };
    }
    else{
      newBurgerState = {
        devoured: 0
      };
    } 
    console.log(newBurgerState)
    //ajax put
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed devoured to", newBurgerState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-burger").on("click", function(event){
  //   var id = $(this).data("id");
  // })


})
