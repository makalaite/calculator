/**
 * Created by agnė on 7/25/17.
 */

let buttons = [

    {type: 'button', value: 7, class: 'num button-seven'},
    {type: 'button', value: 8, class: 'num button-eight'},
    {type: 'button', value: 9, class: 'num button-nine'},

    {type: 'button', value: 4, class: 'num button-four'},
    {type: 'button', value: 5, class: 'num button-five'},
    {type: 'button', value: 6, class: 'num button-six'},

    {type: 'button', value: 1, class: 'num button-one'},
    {type: 'button', value: 2, class: 'num button-two'},
    {type: 'button', value: 3, class: 'num button-three'},

    {type: 'button', value: 0, class: 'num button-zero'},
    {type: 'button', value: '.', class: 'num button-dot'},
    {type: 'button', value: 'C', class: 'clear button-clear'},

    {type: 'function', value: 'CE', class: 'function button-clearEverything'},
    {type: 'function', value: '%', class: 'function button-percent'},
    {type: 'function', value: '+-', class: 'function button-plusMinus'},

    {type: 'function', value: '+', class: 'function button-add'},
    {type: 'function', value: '-', class: 'function button-subtract'},
    {type: 'function', value: '*', class: 'function button-multiply'},
    {type: 'function', value: '/', class: 'function button-divide'},

    {type: 'button', value: '=', class: 'equals-button'}
];

let funkc = [

];

// $(document).ready(function () {
//     $('body').prepend("<div id='buttonField'>");
//     $('#buttonField').append("<input>");
//     $.each(buttons, function (value, symbol) {
//         $("#buttonField").append("<button>" + symbol.value + "</button>").click(function () {
//             alert('belenka');
//         });
//
//     });
// });


$('body').prepend("<div id='buttonField'>");
// buttonField.append("<input>");
let buttonField = $('#buttonField');

$("<input>").appendTo(buttonField);
for (let key in buttons) {

   if (buttons.hasOwnProperty(key)) {
       $("<button>" + buttons[key].value + "</button>").appendTo(buttonField).click(function () {
           handleClick(buttons[key]);
       });
   }
}

function handleClick(data) {
    alert(data.value);
}

