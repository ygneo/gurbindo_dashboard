function refresh() {
  $.ajax({
    url: "http://176.58.118.200/moistures.json",
    cache: false,
    context: document.body
  }).done(function(data) {
    $.each(data, function (key, value) {
      pot = $($(".pot > p.value")[key]);
      if (pot.html() === "") {
        pot.html(value);
      }
      else if (pot.html() != value) {
        pot.hide().html(value).fadeIn("slow");
      }
    });
  })
}

$(document).ready(function(){
  refresh();
  setInterval(refresh, 5000);
});