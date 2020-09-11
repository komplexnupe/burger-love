$(function() {
    $(".burger").on("click", function(event) {
      var id = $(this).data("id");
      var dev = $(this).data("dev");
  console.log('hey');
      var newDevState = {
        devoured: dev
      };
  
      // Send the PUT request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevState
      }).then(
        function() {
          console.log("changed devoured to", dev);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#new").val().trim(),
        devoured: 0
      };
        console.log(newBurger);
      // Send the POST request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("create new devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  