

$(document).on('ready', function(){
  
  $('#langFrom').on('change', function(){
    $.post('/getLangTo', {language: $(this).val()}, function(data){
      // console.log(data);
      $('#langTo').empty();
      $.each(data, function(i, val){
        $('#langTo').append($('<option value=' + val.code + '>' + val.name + '</option>'));
      });
    });
  });

  $('#translateSubmit').on('click', function(e){
    e.preventDefault();

    // var theWordToTranslate = $('#myWord').val();
    // var fromLang = $('#langFrom').val();
    // var toLang = $('#langTo').val();

    var myDataBefore = {
      word: $('#myWord').val(),
      fromLang: $('#langFrom').val(),
      toLang: $('#langTo').val()
    };

    $.post('/translate', myDataBefore, function(myDataAfter){
      $('#translatedWord').text(myDataAfter.translation);
    });

    // console.log(theWordToTranslate, fromLang, toLang);
  });

});