$( document ).ready(function() {
    $("input:checkbox").on("click", clicked);
    
    // Add new item to list
    $("#addItem").click(function(){
    	var item = $("#newitem").val();
    	if(item != ''){
    		var newItemHTML = "<li><input type='checkbox'>" + item + "</li>";
    		$(".current-list").prepend(newItemHTML);
    		$(".current-list > li:first-child > input:checkbox").on("click", clicked);
            // this last step is needed because the new checkbox is not recognized the first .on click function
    	}
    });
});

// add and remove class with checkbox
function clicked(){
    if($(this).is(":checked")){
    	$(this).parent().addClass("checked").detach();
    	$(".removed-list").prepend($(this).parent());
    }else{
    	$(this).parent().removeClass("checked").detach();
		$(".current-list").prepend($(this).parent());
	}	

}