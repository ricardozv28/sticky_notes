
$(document).ready(function(){
  var i=1;

  $('.collapsible').collapsible();

  $('#add').click(function() {
    i++;
    if(i % 2 === 0 ) $('#add').html("Cancel").addClass('center');
    else $('#add').html("Add Notes").removeClass('center');
  });

});
