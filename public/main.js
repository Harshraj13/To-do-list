$(document).ready(function(){
    $("h1").text("Todo List Web application")
    $(function(){
        $("#add").on("click",function(){
                //event handler
                var v = $("input").val(); 
                //val variable stores value of input
                //whenever input box is not empty 
                if (v!==''){
                    var elem = $("<li></li>").text(v);
                    //now new list item html tag is added in ordered list
                    $(elem).append("<button class='rem'>X</button>");
                    $("#mylist").append(elem);
                    $("input").val("");
                   
                    //cleaning the input for new input
                    $(".rem").on("click",function(){
                        //to remove using parent the selector should be a class 
                        //id doesnt work!!!
                        $(this).parent().remove();
                    });
                }
            });
        });
        $(function(){
                        //function to get focus back on curson back into input box
                        var input = document.getElementById("myinput");
                        input.addEventListener("keyup", function(event) {
                           if (event.keyCode === 13) {
                              event.preventDefault();
                              document.getElementById("add").click();
                           }
            })
        });
});


