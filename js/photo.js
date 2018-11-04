// READING PHOTO AND PREVIEW
$(document).ready( function() {
    $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function(event, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = label;

        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }

    });

    function readURL(input, onSuccess) {
        console.log("Reading file", input.files[0]);
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log('Data Successfully Loaded');
                onSuccess(e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function(){
        console.log(document.getElementById('president').checked);
        readURL(this, function(base64Image) {
            $('#img-upload').attr('src', base64Image);
            $('#image').attr('value', base64Image);
        });

        // Backend - POST with JQuery

    });

    $('#formID').submit(function(event) {
        if (this.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            readURL($("#imgInp")[0], function(base64Image) {
                $.post( "mastah.php", {
                        nama : $('#name').val(),
                        nim : $('#nim').val(),
                        kandidat : document.getElementById('president').checked,
                        image : base64Image},

                    function(data, status){
                        console.log("Data: ", data);
                        console.log("Status: ", status);
                    }
                );
            });
        }
        this.classList.add('was-validated');
    });

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
        'use strict';

        window.addEventListener('load', function() {


            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');

            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                }, false);
            });
        }, false);
    })();
});

function changeVal(val) {
    $('#role').attr('value', val);
}





