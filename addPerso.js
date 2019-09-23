$('#valid_perso').click(function() {
  let url = $('#url').val();
  let id = $('#id').val();
  let nom = $('#nom').val();
  let pv = $('#pv').val();
  let pa = $('#pa').val();

  $.ajax({
    url: 'http://localhost/Versus/addPerso.php',
    type: 'POST',
    data: {
      url: url,
      id: id,
      nom: nom,
      pv: pv,
      pa: pa
    },
    success: function success(result) {
      alert(result);
    },
    error: function erreur(error) {
      console.log(error);
    }
  });
});
