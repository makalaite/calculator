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

$("<input disabled value='0'>").appendTo(buttonField);

let ACTION_REPLACE = 'replaced',
    ACTION_INCREASE = 'increased',
    ACTION_REVERSE = 'reversed',
    ACTION_CLEAR = 'cleared',
    ACTION_DELETE_ONE = 'delete_one',
    ACTION_CALCULATE = 'sumOf';


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


function handleClick(e) {
    // console.log(e.currentTarget, this.value, this.type, this.cssClass);
    let $b = $(e.currentTarget);                //like THIS

    if ($b.attr('type') === 'number') {
        updateNumber(ACTION_INCREASE, $b.val());
        updateInput();
    } else {
        if ($b.attr('type') === 'action') {

            switch ($b.val()) {

                case 'C':

                    updateNumber(ACTION_CLEAR);
                    // a = '0';
                    // $('input').val(a);
                    // $('.disable').attr('disabled', false);      //on renable action buttons
                    break;

                case 'CE':

                    updateNumber(ACTION_DELETE_ONE);

                    // a = a.substring(0, a.length - 1);
                    // if (a.length < 1) {
                    //     a = '0';
                    // }
                    // $('input').val(a);      //for deleting last string in value (wont work inside function)

                    break;

                case '+-':
                    updateNumber(ACTION_REVERSE);

                    // // console.log(a[0]);
                    // if (a[0] === '-') {
                    //
                    //     // a = a.substring(1, a.length);
                    //     // $('input').val(a);
                    //
                    //
                    // } else {
                    //     if (a !== '0') {
                    //         // a = '-' + a;
                    //         // $('input').val(a);
                    //     }
                    //
                    // }
                    break;


                case '+':
                case '-':
                case '*':
                case '/':
                case '%':


                    if(numbers[numbers.length - 1] !== '0')
                    {
                        actions.push($b.val());         //ideda kokie yra galimi actionai.
                        numbers[actions.length] = '0';     //kai sukuri actiona tai actionas apibrezia,kad viena skaiciu uzbaigem rasyti ir bus naujas (rodo pradzioj 0, kol nieko nesuvedi)
                    } else
                    {
                        actions.pop();
                        actions.push($b.val());         //ideda kokie yra galimi actionai. turi eiti po logikos (pop istrina sena ir ideda nauja) jis istrina paskutini elementa pop, jei darai push is pradziu, naujas elementas pasidaro paskutinis, o pop isima paskutini.

                    }





                    console.log(numbers, actions);


                // $('.disable').attr('disabled', true);
                // updateNumber(ACTION_INCREASE, $b.val());
                // // a += ' ' + action + ' ';
                // // $('input').val(a);

                    break;

                case '=':

                    let a;

                    for (let i = 0; i < numbers.length; i++)
                    {
                        if (a)
                        {
                            let b = numbers[i];
                            switch (actions[ i - 1 ])
                            {
                                case '+':

                                    a += b;
                                    break;

                                case '-':

                                    a -= b;
                                    break;

                                case '/':

                                    a /= b;
                                    break;

                                case '*':

                                    a *= b;
                                    break;

                                // case '%':
                            }
                        } else
                        {
                            a = numbers[0];
                        }
                    }

                    console.log(a);

                    $('input').val(a);
            }
        }
    }
}

let numbers = ['0'];
let actions = [];

function updateNumber(action, value) {
    // console.log(action, value);
    /*if(!action) {
     a += value;
     } else {
     b += value;
     }*/


    switch (action) {
        case ACTION_DELETE_ONE:

            break;


        case ACTION_CLEAR:

            break;


        case ACTION_REVERSE:

            break;


        case ACTION_INCREASE:

            let n = numbers[actions.length];        //istraukiamas skaicius is array tam kad nebesipliusuotu prie a kintamojo, po actiono naudojamas b kintamasis, po dar actiono c kintamasis..

            switch (value) {

                case '.':

                    if (n.indexOf('.') === -1) {        // -1=nera; naudojamas ant stringo ieskom simbolio ir grazina skaiciu(pozicija kur yra simbolis)

                        n += value;      //
                        //$('input').val(a);              //val function for putting number into input field
                    }
                    break;

                case '0':

                    if (n.length === 1 && a === '0') {

                    } else {

                        n += value;
                        // $('input').val(n);
                    }
                    break;


                default :

                    if (n.length === 1 && n === '0') {
                        n = value;          //perraso pries tai buvusia a reiksme. buna 0 ir deda nauja
                        //  $('input').val(n);
                    } else {

                        n += value;      //paima a buvusia rieksme ir prideda nauja $b.val() salia!
                        //  $('input').val(n);
                    }
            }

            numbers[actions.length] = n; //istrauktas sk idedamas atgal i array
            break;


        case ACTION_REPLACE:

            break;

        default:
            console.log('unknown action');
    }


}
function updateInput() {
    let actions_value = '';

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== '0') {
            actions_value += numbers[i];        // jeigu nera nulio, ji rodo, pasidarai kad nelygu nuliui,kad nerodytu kaskart pries vedant
        }

        if (actions[i]) {
            actions_value += actions[i];        // += skirta, kad vis pridetu reiksme ir inpute rodytu skaiciu, veiksma ir vel skaiciu
        }

    }
    $('input').val(actions_value);
    // console.log(numbers, actions);
}






