/**
 * Created by agnė on 7/25/17.
 */

var buttons = [

    {type: 'button', value: 7, class: 'num-button seven'},
    {type: 'button', value: 8, class: 'num-button eight'},
    {type: 'button', value: 9, class: 'num-button nine'},

    {type: 'button', value: 4, class: 'num-button four'},
    {type: 'button', value: 5, class: 'num-button five'},
    {type: 'button', value: 6, class: 'num-button six'},

    {type: 'button', value: 1, class: 'num-button one'},
    {type: 'button', value: 2, class: 'num-button two'},
    {type: 'button', value: 3, class: 'num-button three'},

    {type: 'button', value: 0, class: 'num-button zero'},
    {type: 'button', value: '.', class: 'num-button dot'},
    {type: 'button', value: 'C', class: 'clear-button clear'},

    {type: 'function', value: '+', class: 'function-button add'},
    {type: 'function', value: '-', class: 'function-button subtract'},
    {type: 'function', value: '*', class: 'function-button multiply'},
    {type: 'function', value: '/', class: 'function-button divide'},

    {type: 'button', value: '=', class: 'equals-button'}

];
$(document).ready(function () {

    $.each(buttons, function (key, value) {
        //alert(value.class);
        "<button class=" + value.class + ">"+ 
    });
});

