var slug;

$('a.launch-modal').on('click', function () {
  slug = $(this).attr('data-href');
});

$('#optionSubmit').submit(function (e) {
  e.preventDefault();
  $.ajax({
    url: $(this).attr('action')+'?component=' + slug + '&' + $(this).serialize(),
    method: 'post'
  }).success(function (e) {
    if(e  === 'OK'){
      $('#target').modal('toggle');
      window.location.reload();
    }
  })
});
