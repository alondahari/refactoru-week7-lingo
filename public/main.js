

$(document).on('ready', function(){
  
  $('#langFrom').on('change', function(){
    $.post('/getLangTo', {language: $(this).val()}, function(data){
      // console.log(data);
      $('#langTo').empty();
      $.each(data, function(i, val){
        $('#langTo').append($('<option>' + val + '</option>'));
      });
    });
  });

  $('#translateSubmit').on('click', function(e){
    e.preventDefault();

    var theWordToTranslate = $('#myWord').val();
    var fromLang = $('#langFrom').val();
    var toLang = $('#langTo').val();

    $.post

    console.log(theWordToTranslate, fromLang, toLang);
  });

});