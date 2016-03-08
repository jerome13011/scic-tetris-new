$(document).ready(function() {
 // hides the slickbox as soon as the DOM is ready
// $('#description').hide();
 // shows the slickbox on clicking the noted link
$('#inclick').click(function() {
$('#description').toggle('slow');
return false;
  });
 // hides the slickbox on clicking the noted link
 $('#onclick').click(function() {
 $('#description').hide('slow');
 return false;
 });
 // toggles the slickbox on clicking the noted link

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
