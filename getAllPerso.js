$(document).ready(() => {
  $.ajax({
    url: 'http://localhost/Versus/getAllPerso.php',
    type: 'GET',
    success: function(result) {
      result = JSON.parse(result);

      for (let i = 0; i < result.length; i++) {
        $('#fighters').append(`
          <div class="fighter" id='${result[i].id}'>
            <img src="${result[i].url}" />
            <div class="text">
              <span>${result[i].nom} - </span>
              <span>${result[i].id}</span>
            </div>
          </div>
        `);
      }

      $('.fighter').click((event) => {
        let clickedFighter = event.currentTarget;
        let idFighter = clickedFighter.getAttribute('id');
        if ($('#id_self').val() == '') {
          $('#id_self').val(idFighter);
        } else {
          $('#id_versus').val(idFighter);
        }
      });
    },
    error: function(error) {
      console.log(error);
    }
  });
});
