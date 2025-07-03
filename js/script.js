$(document).ready(function () {
  // promocode

  $('.promocode').each(function () {
    const code = $(this).data('code');
    $(this).text(code);
  });

  $('.card__code').on('click', function () {
    const $card = $(this);
    const $promo = $card.find('.promocode');
    const code = $promo.data('code');

    const $tempInput = $('<input>');
    $('body').append($tempInput);
    $tempInput.val(code).select();
    document.execCommand('copy');
    $tempInput.remove();

    $promo.text('Copied!');

    setTimeout(function () {
      $promo.text(code);
    }, 2000);
  });

  //   accordeon

  $('.nav__content').hide();

  $('.nav__title').on('click', function () {
    $(this).next('.nav__content').slideToggle(200);
    $(this).toggleClass('active');
  });
});
