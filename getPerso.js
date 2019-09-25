$(document).ready(() => {
  $('#valid_versus').click(() => {
    let idVersus = $('#id_versus').val();
    let idSelf = $('#id_self').val();
    $.ajax({
      url: 'http://localhost/Versus/getPerso.php',
      type: 'POST',
      data: {
        idVersus: idVersus,
        idSelf: idSelf
      },
      success: function(result) {
        result = JSON.parse(result);
        console.log(result);
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});
