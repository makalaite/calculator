/**
 * Created by agnė on 7/25/17.
 */
/**
 * Json object for buttons values;
 * @type {[*]}
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

/**
 * main div with input and buttons
 */

$('body').prepend("<div id='buttonField'>");

    let buttonField = $('#buttonField');

        $("<input disabled value='0'>").appendTo(buttonField);
/**
 * functions variables
 * @type {string}
 */

let ACTION_REPLACE = 'replaced',
    ACTION_INCREASE = 'increased',
    ACTION_REVERSE = 'reversed',
    ACTION_CLEAR = 'cleared',
    ACTION_DELETE_ONE = 'delete_one',
    ACTION_CALCULATE = 'sumOf';

/**
 * loop for generating buttons from array and describing attributes for later use with css
 * click event on every button
 */

for (let key in buttons) {

    if (buttons.hasOwnProperty(key)) {
        let $b = $("<button>" + buttons[key].value + "</button>");

        $b.attr({
            type: buttons[key].type,
            value: buttons[key].value,
            class: buttons[key].cssClass
        }).appendTo(buttonField).click(handleClick);
    }
}

//if you want to GET type & value of buttons object
//jei i pvz:val() funkc nieko neduosi tai grazins, bet jei idesi i vidu, tai jis pakeis reiksme, attr renkiesi, kad paimtu butent viena pavadinima, o ne visus

/**
 * Function which checks if choosing a number, use updateNumber func,
 * if action, depending on a case, use the action
 * @param e
 */

function handleClick(e)
{
    let $b = $(e.currentTarget);                //using e element like THIS

    if ($b.attr('type') === 'number') {
        updateNumber(ACTION_INCREASE, $b.val());
    } else
    {
        if ($b.attr('type') === 'action')
        {

            switch ($b.val()) {

                /**
                 * reset and gives 0 value
                 */
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

                    // if (a[0] === '-') {
                    //     // a = a.substring(1, a.length);
                    //     // $('input').val(a);
                    // } else {
                    //     if (a !== '0') {
                    //         // a = '-' + a;
                    //         // $('input').val(a);
                    //     }
                    // }
                    break;

                /**
                 * condition with these cases for ;
                 * update actions array and creating new number.
                 */
                case '+':
                case '-':
                case '*':
                case '/':

                    if (numbers[numbers.length - 1] !== '0')
                    {
                        actions.push($b.val());             //ideda kokie yra galimi actionai.
                        numbers[actions.length] = '0';     //kai sukuri actiona tai actionas apibrezia,kad viena skaiciu uzbaigem rasyti ir bus naujas (rodo pradzioj 0, kol nieko nesuvedi)
                    } else
                    {
                        actions.pop();
                        actions.push($b.val());         //ideda kokie yra galimi actionai. turi eiti po logikos (pop istrina sena ir ideda nauja) jis istrina paskutini elementa pop, jei darai push is pradziu, naujas elementas pasidaro paskutinis, o pop isima paskutini.

                    }

                    break;

                case '%':

                    let n = numbers[actions.length];

                    if (n[n.length - 1] === '.')            //jeigu paskutinis elementas yra taskas, tuomet daryti:
                    {
                        n = n.substring(0, n.length - 1);
                    }

                    numbers[actions.length] = n;

                    n = undefined;

                    for (let i = 0; i < numbers.length - 1; i++)
                    {
                        if (n)
                        {
                            let b = parseFloat(numbers[i]);
                            switch (actions[i - 1]) {
                                case '+':

                                    n += b;
                                    break;

                                case '-':

                                    n -= b;
                                    break;

                                case '/':

                                    n /= b;
                                    break;

                                case '*':

                                    n *= b;
                                    break;

                                case '%':

                                    break;
                            }
                        } else {
                            n = parseFloat(numbers[0]);
                        }
                    }

                    numbers[actions.length] = (numbers[actions.length] * (n / 100)).toString();

                    break;

                /**
                 * calculates final value  
                 */
                case '=':

                    let a = parseFloat('');

                    for (let i = 0; i < numbers.length; i++) {
                        if (a) {
                            let b = parseFloat(numbers[i]);
                            switch (actions[i - 1]) {
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

                                case '%':

                                    break;
                            }
                        } else {
                            a = parseFloat(numbers[0]);
                        }
                    }

                    numbers = [a.toString()];       //kad atsakymas butu stringas
                    actions = [];
            }
        }
    }

    updateInput();
    console.log(numbers, actions);
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
        /**
         * deletes last string. checks if last number is 0 and if 0 then deletes action and number
         */
        case ACTION_DELETE_ONE:

            if (numbers[actions.length] === '0')
            {
                if (numbers.length > 1) {                   //jei ilgis daugiau uz 1 (kas yra 0) tai trina ir action ir numbers
                    numbers.pop();
                    actions.pop()
                }
            } else
            {
                let nr = numbers[actions.length];            //isimti is arejaus
                nr = nr.substring(0, nr.length - 1);           //apdirbti (ima nuo 0 i kaire puse)

                if (nr.length === 0)
                    nr = '0';                                //jei neprilygini 0, stringas arrayjuj buna tuscias ir neleidzia trinti action'o, nes virsuj nurodai kad  veiktu tuo atveju jei yra > uz 1

                numbers[actions.length] = nr;                //vel ideti i areju
            }
            break;


        case ACTION_CLEAR:

            numbers = ['0'];
            actions = [];
            $('.disable').attr('disabled', false);      //on renable action buttons

            break;

        /**
         * if first element is with - than reverse.
         */
        case ACTION_REVERSE:

            let no = numbers[actions.length];

            if (no[0] === '-')
            {
                no = no.substring(1, no.length);

            } else
            {
                if (no !== '0') {
                    n = '-' + no;
                }
            }
            numbers[actions.length] = no;

            break;


        case ACTION_INCREASE:

            let numb = numbers[actions.length];        //istraukiamas skaicius is array tam kad nebesipliusuotu prie a kintamojo, po actiono naudojamas b kintamasis, po dar actiono c kintamasis..

            switch (value) {

                case '.':

                    if (numb.indexOf('.') === -1) {        // -1=nera; naudojamas ant stringo ieskom simbolio ir grazina skaiciu(pozicija kur yra simbolis)

                        numb += value;      //
                        //$('input').val(a);              //val function for putting number into input field
                    }
                    break;

                case '0':

                    if (numb.length === 1 && numb === '0') {

                    } else {

                        numb += value;
                        // $('input').val(n);
                    }
                    break;

                default :

                    if (numb.length === 1 && numb === '0') {
                        numb = value;          //perraso pries tai buvusia a reiksme. buna 0 ir deda nauja
                        //  $('input').val(n);
                    } else {

                        numb += value;      //paima a buvusia rieksme ir prideda nauja $b.val() salia!
                        //  $('input').val(n);
                    }
            }

            numbers[actions.length] = numb; //istrauktas sk idedamas atgal i array
            break;


        case ACTION_REPLACE:

            break;

        default:
            console.log('unknown action');
    }


}
function updateInput() {

    let actions_value = '';

    if (numbers.length === 1) {
        actions_value = numbers[0];
    } else {

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] !== '0') {
                actions_value += numbers[i];        // jeigu nera nulio, ji rodo, pasidarai kad nelygu nuliui,kad nerodytu kaskart pries vedant
            }

            if (actions[i]) {
                actions_value += actions[i];        // += skirta, kad vis pridetu reiksme ir inpute rodytu skaiciu, veiksma ir vel skaiciu
            }

        }
    }

    $('input').val(actions_value);
    // console.log(numbers, actions);
}






