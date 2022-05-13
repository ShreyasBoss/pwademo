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
   $("#example").DataTable();
   

   $("#form").submit(function (event) {
    var formData = {
      Firstname: $("#firstname").val(),
      Middlename: $("#middlename").val(),
      Lastname: $("#lastname").val(),
      Collagename: $("#collagename").val(),
      Email_id: $("#email").val(),
      Mobile_no: $("#mobile").val(),
      Department: $("#department").val(),
      City: $("#city").val()
    };

    $.ajax({
      type: "POST",
      url: "https://sleepy-refuge-57881.herokuapp.com/msc/insert",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    event.preventDefault();
  });

 });



