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
            //$.post(`https://${GetParentResourceName()}/close`, JSON.stringify({}));
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
    
        var randed2 = selected;
        for(var i = 0;i < 101; i++) {
            var element = '<div id="CardNumber'+i+'" class="item class_red_item" style="background-image:url('+items[selectedCase][0]['image']+');"></div>';
            var randed = randomInt(1, 1000);
            if(randed < 50) {
                element = '<div id="CardNumber'+i+'" class="item class_red_item" style="background-image:url('+items[selectedCase][2]['image']+');"></div>';
            } else if(500 < randed) {
                element = '<div id="CardNumber'+i+'" class="item class_red_item" style="background-image:url('+items[selectedCase][1]['image']+');"></div>';
            }
            $(element).appendTo('.raffle-roller-container');
        }

        setTimeout(function() {
            if (randed2 == 2) {
                goRoll(items[selectedCase][2]['image']);
            } else if (randed2 == 1) {
                goRoll(items[selectedCase][1]['image']);
            } else {
                goRoll(items[selectedCase][0]['image']);
            }
            
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