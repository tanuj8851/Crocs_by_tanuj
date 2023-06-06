function redirectToIndex() {
    let intervalId = setTimeout(function() {

        window.location.href = "landingpage.html";
    }, 3000);
}

redirectToIndex();