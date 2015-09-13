$( document ).ready(function() {
    $("input:checkbox").on("click", clicked);
    
    // Add new item to list
    $("#addItem").click(function(){
    	var item = $("#newitem").val();
    	if(item != ''){
    		var newItemHTML = "<li><input type='checkbox'>" + item + "</li>";
            $("input:text").val(""); // empty textbox
    		$(".current-list").prepend(newItemHTML); // add new item
    		$(".current-list > li:first-child > input:checkbox").on("click", clicked);
            // this last step is needed because the new checkbox is not recognized the first .on click function
    	}
    });

    // Attach enter keypress to add item button
    $(document).keypress(function(e){
        if(e.keyCode == '13'){
            $('#addItem').click();   
        }

    });

    $("#reset").click(function(){
        $("li").remove();
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