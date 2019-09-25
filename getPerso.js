$('#valid_versus').click(() => {
  let idVersus = $('#id_versus');
  let idSelf = $('#id_self');

  if (idVersus.val() == '' || idSelf.val() == '') {
    $('#error').show();
    $('#error').html('Formulaire incomplet');
    setTimeout(function showMessage() {
      $('#error').hide();
    }, 2500);
  } else {
    $.ajax({
      url: 'http://localhost/Versus/getPerso.php',
      type: 'POST',
      data: {
        idVersus: idVersus.val(),
        idSelf: idSelf.val()
      },
      success: function(result) {
        result = JSON.parse(result);
        console.log(result);
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
});
