

document.getElementById('event').onclick = function() {
    let zakah = document.getElementById('input').value;
    document.getElementById('output').value = ( 0.025 * zakah);
}

// click on 'event' button
//  create var 'input' for 'input' id
//  set 'output' value = input var x * 0.025ذ