$(document).ready(() => {
  $('#valid_versus').click(() => {
    let idVersus = $('#id_versus').val();
    let idSelf = $('#id_self').val();

    $.ajax({
      url: 'http://localhost/Versus/getAllPerso.php',
      type: 'GET',
      success: function(result) {
        result = JSON.parse(result);

        localStorage.setItem('self_name', result[0].nom);
        localStorage.setItem('self_pv', result[0].pv);
        localStorage.setItem('self_pa', result[0].pa);
        localStorage.setItem('self_url', result[0].url);

        localStorage.setItem('versus_name', result[1].nom);
        localStorage.setItem('versus_pv', result[1].pv);
        localStorage.setItem('versus_pa', result[1].pa);
        localStorage.setItem('versus_url', result[1].url);

        window.location.replace('html/fight.html');
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});
