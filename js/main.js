/**
 * Created by agnė on 7/25/17.
 */

let buttons = [

    {type: 'action', value: 'CE', cssClass: 'symbols'},
    {type: 'action', value: 'C', cssClass: 'symbols'},
    {type: 'action', value: '+-', cssClass: 'symbols disable'},
    {type: 'action', value: '%', cssClass: 'symbols disable'},


    {type: 'number', value: 7, cssClass: 'numbers'},
    {type: 'number', value: 8, cssClass: 'numbers'},
    {type: 'number', value: 9, cssClass: 'numbers'},
    {type: 'action', value: '/', cssClass: 'symbols disable'},


    {type: 'number', value: 4, cssClass: 'numbers'},
    {type: 'number', value: 5, cssClass: 'numbers'},
    {type: 'number', value: 6, cssClass: 'numbers'},
    {type: 'action', value: '*', cssClass: 'symbols disable'},

    {type: 'number', value: 1, cssClass: 'numbers'},
    {type: 'number', value: 2, cssClass: 'numbers'},
    {type: 'number', value: 3, cssClass: 'numbers'},
    {type: 'action', value: '-', cssClass: 'symbols disable'},


    {type: 'number', value: '.', cssClass: 'symbols'},
    {type: 'number', value: 0, cssClass: 'numbers'},
    {type: 'action', value: '+', cssClass: 'symbols disable'},
    {type: 'action', value: '=', cssClass: 'symbols disable'}
];

// $(document).ready(function () {
//     $('body').prepend("<div id='buttonField'>");
//     $('#buttonField').append("<input>");
//     $.each(buttons, function (value, symbol) {
//         $("#buttonField").append("<button>" + symbol.value + "</button>").click(function () {
//             alert('belenka');
//         });
//     });
// });


$('body').prepend("<div id='buttonField'>");

let buttonField = $('#buttonField');

$("<input disabled>").appendTo(buttonField);


for (let key in buttons) {

    if (buttons.hasOwnProperty(key)) {
        let $b = $("<button>" + buttons[key].value + "</button>");

        $b.attr({
            type: buttons[key].type,
            value: buttons[key].value,
            class: buttons[key].cssClass
        }).appendTo(buttonField).click(handleClick);

        // console.log(e);
    }

}

//if you want to GET type & value of buttons object
//jei i pvz:val() funkc nieko neduosi tai grazins, bet jei idesi i vidu, tai jis pakeis reiksme, attr renkiesi, kad paimtu butent viena pavadinima, o ne visus

let a = '0';
$('input').val(a); //in the start it always show 0

function handleClick(e) {
    // console.log(e.currentTarget, this.value, this.type, this.cssClass);
    let $b = $(e.currentTarget);                //like THIS

    if ($b.attr('type') === 'number') {

        switch ($b.val()) {

            case '.':

                if (a.indexOf('.') === -1) {        // -1=nera; naudojamas ant stringo ieskom simbolio ir grazina skaiciu(pozicija kur yra simbolis)

                    a += $b.val();      //
                    $('input').val(a);              //val function for putting number into input field
                }
                break;

            case '0':

                if (a.length === 1 && a === '0') {

                } else {
                    a += $b.val();
                    $('input').val(a);
                }
                break;


            default :

                if (a.length === 1 && a === '0') {
                    a = $b.val();          //perraso pries tai buvusia a reiksme. buna 0 ir deda nauja
                    $('input').val(a);
                } else {
                    a += $b.val();      //paima a buvusia rieksme ir prideda nauja $b.val() salia!
                    $('input').val(a);
                }
        }
    } else {
        if ($b.attr('type') === 'action') {

            switch ($b.val()) {

                case 'C':

                    a = '0';
                    $('input').val(a);
                    $('.disable').attr('disabled', false);      //on renable action buttons
                    break;

                case 'CE':

                    a = a.substring(0, a.length - 1);

                    if (a.length < 1) {
                        a = '0';
                    }
                    $('input').val(a);      //for deleting last string in value (wont work inside function)

                    break;

                case '+-':
                    // console.log(a[0]);
                    if (a[0] === '-') {

                        a = a.substring(1, a.length);
                        $('input').val(a);


                    } else {
                        if (a !== '0') {
                            a = '-' + a;
                            $('input').val(a);
                        }

                    }
                    break;


                case '+':
                case '-':
                case '*':
                case '/':
                case '%':

                    action = $b.val();

                    $('.disable').attr('disabled', true);
                    a += ' ' + action + ' ';
                    $('input').val(a);
            }
        }
    }
}

function updateNumber() {
    if(!action) {
        a += value;
    } else {
        b += value;
    }
}





