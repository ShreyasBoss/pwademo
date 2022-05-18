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

function getData() {
  $.ajax({
    type: "GET",
    url: "https://glacial-ridge-44037.herokuapp.com/workshop/get",
    dataType: "json",
    success: function (data) {
      var trHTML = "";
      $.each(data.data, function (i, item) {
        trHTML += `<tr>
          <td>${item.firstname}</td>
          <td>${item.middlename}</td>
          <td>${item.lastname}</td>
          <td>${item.collegename}</td>
          <td>${item.email}</td>
          <td>${item.mobileno}</td>
          <td>${item.dept}</td>
          <td>${item.city}</td>
          <td><button class="btn btn-info" onclick="editData(${item._id})">Edit</button></td>
          <td><button class="btn btn-danger" onclick="deleteData(${item._id})">Delete</button></td>
          </tr>`;
      });
      $("#example").append(trHTML);
    },
  });
}

function editData(id) {
  console.log(id);
}

function deleteData(id) {
  console.log(id);
}

$(document).ready(function () {
  // $("#example").DataTable();
  getData();

  $("#form").submit(function (event) {
    event.preventDefault();
    var formData = {
      firstname: $("#firstname").val(),
      middlename: $("#middlename").val(),
      lastname: $("#lastname").val(),
      collegename: $("#collagename").val(),
      email: $("#email").val(),
      mobileno: $("#mobile").val(),
      dept: $("#department").val(),
      city: $("#city").val(),
    };

    $.ajax({
      type: "POST",
      url: "https://glacial-ridge-44037.herokuapp.com/workshop/insert",
      data: formData,
      dataType: "json",
      encode: true,
      success: function (data) {
        console.log(data);
      },
    });
    getData();
  });
});
