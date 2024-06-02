$("#ajaxForm").submit(function(e){
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
    type: "POST",
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: "json",
    processData: false,
    contentType: false,
    headers: {
    "Accept": "application/json"
    }
}).done(function(response) {
    console.log('Success:', response);
    alert('The form was submitted successfully.')
}).fail(function() {
    alert('An error occurred! Please try again later.')
});
});