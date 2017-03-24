
function onInit () {
    var checkPageButton = document.getElementById('btn');
    checkPageButton.addEventListener('click', function() {
        localStorage.setItem('prefix', $('#prefix').val());
        window.close();
    }, false);

    var prefix = localStorage.getItem('prefix');
    if (prefix && prefix.length > 0) {
        $('#prefix').val(prefix);
    }
}

document.addEventListener('DOMContentLoaded', onInit, false);

