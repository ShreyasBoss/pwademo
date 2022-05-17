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
       let data = data.data;
       let markup = `<tr>
       <td>${data.firstname}</td>
       <td>${data.middlename}</td>
       <td>${data.lastname}</td>
       <td>${data.collegename}</td>
       <td>${data.email}</td>
       <td>${data.mobileno}</td>
       <td>${data.dept}</td>
       <td>${data.city}</td>
       <td><button class="btn btn-info" onclick="editData(data._id)">Edit</button></td>
       <td><button class="btn btn-danger" onclick="deleteData(data._id)">Delete</button></td>
 
       </tr>`

       $("table tbody").append(markup)
      })
    })
  }

  function editData(id){
    console.log(id);
  }

  function deleteData(id){
    console.log(id);
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
      url: "https://glacial-ridge-44037.herokuapp.com/workshop/insert",
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



