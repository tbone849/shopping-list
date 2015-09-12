$( document ).ready(function() {
    $("input").on("click", function(){
    	if($(this).is(":checked")){
    		$(this).parent().addClass("checked").detach();
    		$(".removed-list").prepend($(this).parent());
    	}else{
    		$(this).parent().removeClass("checked").detach();
    		$(".current-list").prepend($(this).parent());
    	}	
    });
});