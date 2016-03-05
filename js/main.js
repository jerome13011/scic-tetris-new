$(document).ready(function() {
 // hides the slickbox as soon as the DOM is ready
$('#description').hide();
 // shows the slickbox on clicking the noted link
$('#inclick').click(function() {
$('#description').show('slow');
return false;
  });
 // hides the slickbox on clicking the noted link
 $('#onclick').click(function() {
 $('#description').hide('slow');
 return false;
 });
 // toggles the slickbox on clicking the noted link
 });
