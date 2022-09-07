$(function () {
    $("#container").hide();
    function display(bool) {
        if (bool) {
            $("#container").fadeIn(650);
        } else {
            $("#container").fadeOut(1000);
        }
    }

    let items = {};
    
    function goRoll(skinimg) {
        $('.raffle-roller-container').css({
            transition: "all 8s cubic-bezier(.08,.6,0,1)"
        });
        $('#CardNumber78').css({
            "background-image": "url("+skinimg+")"
        });
        setTimeout(function() {
            $('#CardNumber78').addClass('winning-item');
            $('#rolled').html(skinimg);
            $.post(`https://${GetParentResourceName()}/close`, JSON.stringify({}));
        }, 8500);
        $('.raffle-roller-container').css('margin-left', '-6770px');
    }
    
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function generate(selectedCase, selected) {
        //console.log(selectedCase)
        $('.raffle-roller-container').css({
            transition: "sdf",
            "margin-left": "0px"
        }, 10).html('');
    
        for(var i = 0; i < 101; i++) {
            var randed = randomInt(1, items[selectedCase].length);
            var element = '<div id="CardNumber'+i+'" class="item class_red_item" style="background-image:url('+items[selectedCase][randed]['image']+');"></div>';
            $(element).appendTo('.raffle-roller-container');
        }

        setTimeout(function() {
            goRoll(items[selectedCase][selected]['image']);
        }, 500);
    }

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
                generate(item.case, item.selected-1)
            } else {
                display(false)
            }
        } else if (item.type === "load") {
            items = item.rewards
        }
    })

    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post(`https://${GetParentResourceName()}/close`, JSON.stringify({
                immediate: true,
            }));
            return
        }
    };
})