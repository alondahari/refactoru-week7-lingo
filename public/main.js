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

});