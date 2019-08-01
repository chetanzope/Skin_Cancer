
	jQuery.noConflict();
        formdata = new FormData();
	jQuery("#customFile").on("change", function() {
		var file = this.files[0];
		if (formdata) {
			formdata.append("image", file);
			jQuery.ajax({
				url: "/home/",
				type: "POST",
				data: formdata,
				processData: false,
				contentType: false,
				success:function(response){
				    if(response){
				        console.log(response[0])
				        alert("Done");
				    }


				}
			});
		}
	});








jQuery('#title').on('input propertychange paste', function() {
    // do your stuff
    var title_val = $(this).val()
    if(title_val) {
        if(  $("#invalid_title").css("display") == "block") {
            $("#invalid_title").hide()
            $("#valid_title").show()
        }
    } else {
        $("#invalid_title").show()
        $("#valid_title").hide()

    }
});

jQuery('#desc').on('input propertychange paste', function() {
    // do your stuff
    var desc_val = $(this).val()
    if(desc_val) {
        if(  $("#invalid_desc").css("display") == "block") {
            $("#invalid_desc").hide()
            $("#valid_desc").show()
        }
    } else {
        $("#invalid_desc").show()
        $("#valid_desc").hide()

    }
});


jQuery("#btnback").on("click", function() {
        location.reload();
        $(".inner, .other").slideToggle();

});



