var fixed = false;

$(document).scroll(function() {
    if( $(this).scrollTop() > 100 ) {
        if( !fixed ) {
            fixed = true;
            $('.nav-container').style.backgroundColor = "rgb(255,0,0)";
        }
    } else {
        if( fixed ) {
            fixed = false;
            $('.nav-container').css({width:'100%', padding-top:'10px', background-color: 'black'});
        }
    }
});