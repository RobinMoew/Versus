let url = $('#url').val();
let id = $('#id').val();
let nom = $('#nom').val();
let pv =  $('#pv').val();
let pa = $('#pa').val();

$('#valid_perso').click(function() {
    $.ajax({
        url:"addPerso.php",
        type:"POST",
        data:{
            url:url,
            id:id,
            pv:pv,
            pa:pa
        },
    success : function success(result) {
        alert(result);
    },
    error : function erreur(error) {
        console.log(error);
    },
    })

});