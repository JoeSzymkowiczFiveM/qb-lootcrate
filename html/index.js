$(function () {
  $('#container').hide();
  function display(bool) {
    if (bool) {
      $('#container').fadeIn(650);
    } else {
      $('#container').fadeOut(1000);
    }
  }

  let items = {};

  function goRoll(item) {
    $('.raffle-roller-container').css({
      transition: 'all 8s cubic-bezier(.08,.6,0,1)',
    });
    $('#CardNumber78').css({
      'background-image': 'url(nui://ox_inventory/web/build/images/' + item + '.png)',
    });
    setTimeout(function () {
      $('#CardNumber78').addClass('winning-item');
      $('#rolled').html(item);
      $.post(`https://${GetParentResourceName()}/close`, JSON.stringify({}));
    }, 8500);
    $('.raffle-roller-container').css('margin-left', '-6770px');
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generate(selectedCase, selected) {
    $('.raffle-roller-container')
      .css(
        {
          transition: 'sdf',
          'margin-left': '0px',
        },
        10
      )
      .html('');

    for (let i = 0; i < 101; i++) {
      const randed = randomInt(0, items[selectedCase].length);
      const element = `
				<div id="CardNumber${i}" class="item class_red_item" style="background-image:url(nui://ox_inventory/web/build/images/${items[selectedCase][randed].item}.png)">
				</div>
			`;
      $(element).appendTo('.raffle-roller-container');
    }

    setTimeout(function () {
      goRoll(items[selectedCase][selected].item);
    }, 500);
  }

  window.addEventListener('message', function ({ data: item }) {
    if (item.status) {
      display(true);
      generate(item.case, item.selected - 1);
    } else {
      display(false);
    }
  });

  document.onkeyup = function (data) {
    if (data.which == 27) {
      $.post(
        `https://${GetParentResourceName()}/close`,
        JSON.stringify({
          immediate: true,
        })
      );
      return;
    }
  };

  $.get(`https://${GetParentResourceName()}/getRewards`, (data) => {
    items = data;
  });
});
