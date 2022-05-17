window.addEventListener("load", () => {
  registerSW();
});

// Register the Service Worker
async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register(
        "https://shreyasboss.github.io/pwademo/serviceworker.js"
      );
    } catch (e) {
      console.log("SW registration failed");
    }
  }
}



 $(document).ready(function () {

  getData();

  function getData() {
    $.ajax({
      type: "GET",
      url: "https://glacial-ridge-44037.herokuapp.com/workshop/get",
      dataType: "json",
      encode: true,
      success:(function (data) {
        console.log(data);
      })
    })
  }
   $("#example").DataTable();
   

   $("#form").submit(function (event) {
    var formData = {
      firstname: $("#firstname").val(),
      middlename: $("#middlename").val(),
      lastname: $("#lastname").val(),
      collegename: $("#collagename").val(),
      email: $("#email").val(),
      mobileno: $("#mobile").val(),
      dept: $("#department").val(),
      city: $("#city").val()
    };

    $.ajax({
      type: "POST",
      url: "https://glacial-ridge-44037.herokuapp.com/workshop/get",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    event.preventDefault();
    getData();
  });

 });



