
   $("h1").removeClass("big-title");
    $("h1").text("Good morning");


 $("h1").click(function() {
    $("h1").css("color","pink")
 });

 //
 for (var i = 0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    document.querySelector("h1").style.color = "yellow";
 });
}
$("button").click(function() {
    $("h1").css("color","purple");
});

$("input").keypress(function(event){
    $("h1").text(event.key);
}
)