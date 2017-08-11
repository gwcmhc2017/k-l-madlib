$(document).ready(function() {
  //example code - feel free to delete!
  var timesSillyButtonClicked = 0;
  $('#silly-button').click(function() {
    timesSillyButtonClicked++;
    $('#silly-button-text').text(
      'You clicked the silly button ' + timesSillyButtonClicked + ' times!',
    );
  });
$('#storybutton').click(function(){
var text=$('#text').val();
var cats=$('#cats').val();
var yellow=$('#yellow').val();
var dogs=$('#dogs').val();
var hamburgers=$('#hamburgers').val();
var pizza=$('#pizza').val();
var umm=$('#umm').val();
var notGood=$('#notGood').val();
var owol=$('#owol').val();

$('#result').append('There once was a ' + hamburgers + ' named ' + text + '. ' + text + ' had a passion for cooking in the ' + cats + '. One day ' + text + ' decided to open a restaurant called ' + yellow + '. ' + text + ' cooked many ' + dogs + ' for all of the friendly ' + hamburgers + '. No one would help ' + text + ' cook the ' + dogs + ' because they were '
).append(pizza + ' that the ' + umm + ' who were ' + notGood + ' to make the ' + dogs + ' would haunt the insides of their ' + owol + '.<br/>');
  });
});
