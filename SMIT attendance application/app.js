// login and signup 

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const signupButton = document.getElementById("signupButton");

    function displaySuccessAlert(action) {
      alert(`Successfully ${action}!`);
    }
  
    
    loginButton.addEventListener("click", function () {

      displaySuccessAlert("logged in");
    });

    signupButton.addEventListener("click", function () {
      window.location.assign('dashboard.html');
      displaySuccessAlert("signed up");
    });
  });
  

 