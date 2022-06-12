$(document).ready(function (){
    $("p").hide();
    $('#btn').click(function(){
     var x1 = $('#txtName').val();
     $('.name').html(x1);
     var x2 = $('#txtCharacter').val();
     $('.character').html(x2);
     var x3 = $('#txtAdverb').val();
     $('#adverb').html(x3);
     var x4 = $('#txtAdjective').val();
     $('#adjective').html(x4);
     $("p").show();
    });
});