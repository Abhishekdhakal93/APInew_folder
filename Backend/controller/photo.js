 
    $(document).ready(function () {  
 
   let imageFile = '';
   //imageupload = calling id from module of image
$("#imageupload").on('change', function () {
   let formData = new FormData();
   let files = $("#imageupload").get(0).files;
   if (files.length === 1) {
       formData.append("imageFile", files);
   }
   
   $.ajax({
       type: 'POST',
       url: 'http://localhost:9000/Image',
       contentType: false,
       cache: false,
       processData: false,
       data: formData,
       success: function (data) {
           imageFile = data.imageFile;
           // $("#add-hero").prop("disabled", false);
       },
       error: function () {
           alert(" Image upload failed!");
       }
   });
});
   $('#submit').click(function (e) { 
   e.preventDefault();


   data = {
"imageupload" : imageFile
   }
   console.log(data);

                   
            $.ajax({  
                url: 'http://localhost:9000/registerimage',
                type: 'post',  
                dataType: 'json',  
                data:data,  
                success: function (res, textStatus, xhr) {  
                        alert('Image  Added Successfully');          
               location.href="form.html";            
                },  
                error: function (xhr, textStatus, errorThrown) {  
                    console.log('Error in Operation');  
                }  
            });  
        });
        }); 
         

