/**
 * Created by agnė on 7/25/17.
 */

let buttons = [

    {type: 'function', value: 'CE', class: 'symbols'},
    {type: 'button', value: 'C', class: 'symbols'},
    {type: 'function', value: '+-', class: 'symbols'},
    {type: 'function', value: '%', class: 'symbols'},


    {type: 'button', value: 7, class: 'numbers'},
    {type: 'button', value: 8, class: 'numbers'},
    {type: 'button', value: 9, class: 'numbers'},
    {type: 'function', value: '/', class: 'symbols'},


    {type: 'button', value: 4, class: 'numbers'},
    {type: 'button', value: 5, class: 'numbers'},
    {type: 'button', value: 6, class: 'numbers'},
    {type: 'function', value: '*', class: 'symbols'},

    {type: 'button', value: 1, class: 'numbers'},
    {type: 'button', value: 2, class: 'numbers'},
    {type: 'button', value: 3, class: 'numbers'},
    {type: 'function', value: '-', class: 'symbols'},


    {type: 'button', value: '.', class: 'symbols'},
    {type: 'button', value: 0, class: 'numbers'},
    {type: 'function', value: '+', class: 'symbols'},
    {type: 'button', value: '=', class: 'symbols'}
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

$("<input>").appendTo(buttonField);
for (let key in buttons) {

    if (buttons.hasOwnProperty(key)) {
        $("<button>" + buttons[key].value + "</button>").attr("class", buttons.class).attr("value", buttons.value).attr("type", buttons.type).appendTo(buttonField).click(function () {
            handleClick(buttons[key]);
        });
    }

}


function handleClick(data) {
    alert(data.value);
}

