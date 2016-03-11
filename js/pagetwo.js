$(document).ready(function() {

 $('#navh').hide();
  // shows the slickbox on clicking the noted link
 $('#clic').click(function() {
 $('#navh').toggle('explode');
 return false;
   });
  // hides the slickbox on clicking the noted link
  $('#X').click(function() {
  $('#navh').hide('explode');
  return false;
  });
  // toggles the slickbox on clicking the noted link


 });
