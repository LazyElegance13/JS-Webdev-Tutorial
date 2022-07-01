// if jquery in included in the header to check if the library has loaded
// $(document).ready(function() {
//     $('h1').css('color','red'); 
// });

// // $('h1').css('color','blue');
// $('h1').addClass('big-title margin-50');

// setTimeout( function (){
//     $('h1').removeClass('big-title');
// }, 300);

// $('button').text("Don't Click Me!");
// setTimeout( function (){
//     $('button').html('<em>Now Click me again!</em>');
// }, 1000);

console.log($('img').attr('src'));

$('a').attr('href', 'https://duckduckgo.com')

$('h1').click(function() {
    $('h1').css('color', 'red');
});

$('button').click(function() {
    $('h1').css('color', 'blue');
});

$('input').keydown(function(event) {
    $('h1').text(event.key);
    console.log(event.key);
});

$('h1').on("mouseover", function(event) {
    $('h1').text('Bazzinga');
    $('h1').css('color', 'red')
    $('h1').addClass('big-title')
});

$('h1').before('<button>I came before!</button>')
$('h1').after('<button>I came after!</button>')
$('h1').prepend('<em>👋</em>')
var name = ' Lazy'
$('h1').append(name)

// $('button').remove();

$('button').on('click', function() {
    // $('a').toggle();
    // $('a').hide();
    // $('a').show();
    // $('a').fadeToggle();
    // $('a').fadeIn();
    // $('a').fadeOut();
    // $('a').slideIn();
    // $('a').slideOut();
    $('a').slideToggle();
    $('h1').slideUp().slideDown().animate({opacity: 0.5});

});

