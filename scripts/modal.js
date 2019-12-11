/*
MODAL.JS
This is script is for the modal on the photos page.
Reference is from W3Schools, with some jQuery enhancements
Author: Pemching Kue 12/10/19
*/

$(document).ready(function () {

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal
    var img = $('.myImg');
    var modalImg = $("#img01");

    $('.myImg').click(function () {
        modal.style.display = "block";
        var newSrc = this.src;
        modalImg.attr('src', newSrc);
    });

});

