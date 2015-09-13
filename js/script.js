$( document ).ready(function() {
    $("input:checkbox").on("click", clicked);
    
    $("#addItem").click(function(){
    	var item = $("#newitem").val();
    	if(item != ''){
    		var newItemHTML = "<li><input type='checkbox'>" + item + "</li>";
    		$(".current-list").prepend(newItemHTML);
    		$(".current-list > li:first-child > input:checkbox").on("click", clicked);
    	}
    });
});

function clicked(){
    	if($(this).is(":checked")){
    		$(this).parent().addClass("checked").detach();
    		$(".removed-list").prepend($(this).parent());
    	
    	}else{
    		$(this).parent().removeClass("checked").detach();
    		$(".current-list").prepend($(this).parent());
    	}	
    	console.log("clicked");
    }