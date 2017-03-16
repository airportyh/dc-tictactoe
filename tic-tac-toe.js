
    $(document).ready(function domReady() {

      var player = 'O';

      $('.box').click(function onclick() {
        // gets the text value
        var value = $(this).text();

        if (value === '') { // if unoccupied
          $(this).text(player);
          // alternate the player
          if (player === 'O') {
            player = 'X';
          } else { // assumed is X
            player = 'O';
          }
        }
      }); // End of .box click

    }); // End of document ready
