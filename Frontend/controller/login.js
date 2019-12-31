$(document).ready(function () {
    $('#login').click(function (e) {  
      e.preventDefault();
       email = $("#email").val();
       password = $("#password").val();
       data = {
       "email" : email,
       "password" : password 
       }
       if(email == "" || password == "" ) {
        alert("Please Fill out the required fields!!");
      }
      else {
    $.ajax({  
      url: 'http://localhost:9000/login/',
      type: 'post',  
      dataType: 'json',  
      data:data,  
      success: function (res, textStatus, xhr) {  
        if(res.token!=null){
         localStorage.setItem('token', res.token); 
        if(res.userdata.usertype=="admin"){
      location.href="viewvenue.html"
      alert("welcome admin")
        } else if(res.userdata.usertype=="user"){
          location.href="ggg.html"
          alert("Logged in")
        }
        }          
      },  
      error: function (xhr, textStatus, errorThrown) {  
        console.log('Error in Operation');  
      }  
    }); 
  }
  });
  });
  