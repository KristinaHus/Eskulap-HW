$(document).ready(function() {
    $("#button").click(function() {
        $(this).addClass("menu-list");
    });
});


/*var visible = true;
function showFun() {
    if(visible) {
        document.getElementById('myShowBlock' ).style.opacity = '0';
        visible = false;
    } else {
        document.getElementById('myShowBlock' ).style.opacity = '1';
        visible = true;
    }
}*/

$('#clickme').click(function(){
    $('#myShowBlock').slideUp('200', function() {

    });
});