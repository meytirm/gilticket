$('#name').keydown(function (e) {
  if ((e.keyCode > 8 && e.keyCode < 32) || (e.keyCode > 32 && e.keyCode < 65) || (e.keyCode > 90 && e.keyCode <= 222)) {
    e.preventDefault();
  }
});

$('#mobile').keydown(function (e) {
  if ((e.keyCode > 8 && e.keyCode < 32) || (e.keyCode > 32 && e.keyCode < 48) || (e.keyCode > 57 && e.keyCode < 96) || (e.keyCode > 105 && e.keyCode <= 222)) {
    e.preventDefault();
  }
});

$('#number').keydown(function (e) {
  if ( document.getElementById('number').value.length > 0 ) {
    e.preventDefault();
  }
});