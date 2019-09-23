

$('valid_versus').click(() => {
 let idVersus = $('#id_versus').val();
 let idSelf = $('#id_self').val();
    $.ajax ({
        url:"http://localhost/Versus/getPerso.php",
        type:"POST",
        data: {
            idVersus: idVersus,
            idSelf: idSelf
        },
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
            console.log(error);
        }
    });
});