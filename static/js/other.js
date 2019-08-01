    	$(document).on('change', '#imgInp', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('#imgInp', [label]);
        $(this).next('.custom-file-label').addClass("selected").html(label);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {

		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;
            alert(input);
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }

		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();

		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		            $('#img-upload').css('border', "1px solid #0000006b");
		        }

		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
            $(".my_btn").show()
		});

		$(document).on('click', '#btnclear', function() {
            document.getElementById('imgInp').value = "";
            $('.custom-file-label').addClass("selected").html("Choose file");
            $('#img-upload').css('border', "");
            $("#img-upload").attr("src","");
            $(".my_btn").hide();
            $("#owner").val("")
		});

        $(document).on('click', '#btnsubmit', function() {
            var file = $("#imgInp").get(0).files[0]
            var formdata = new FormData();
            if (formdata) {
                formdata.append("image", file)
                jQuery.ajax({
                        url: "/home/",
                        type: "POST",
                        data: formdata,
                        enctype: 'multipart/form-data',
                        processData: false,
                        contentType: false,
                        success:function(response){
                            if(response){
                                console.log(response)
                                var pred = response["pred"]
                                    $("#owner").val(pred)


                            }
                        }
                    });
                }
            });

        $("#btnback").on("click", function() {
            location.reload();
            $(".inner, .other").slideToggle();

        });
