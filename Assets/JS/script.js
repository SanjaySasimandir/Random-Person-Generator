$(document).ready(function () {
    function load() {
        $.get("https://randomuser.me/api", function (data) {
            var output = `<label for="Name"><b>Name</b>: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</label>
        <br>
        <label for="Gender"><b>Gender</b>: ${data.results[0].gender}</label>
        <br>
        <label for="Location"><b>Location</b>: ${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}</label>
        <br>
        <label for="Phone"><b>Cell Phone Number</b>: ${data.results[0].cell}</label>
        <br>
        <label for="Email"><b>Email</b>: ${data.results[0].email}</label>`;
            $("#personCard").html(output);
            $("#profilePic").attr("src", data.results[0].picture.large);
        });
    }
    load();

    $("button").click(function () {
        load();

    });


});