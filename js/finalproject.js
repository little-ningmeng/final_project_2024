var restaurantType = ['chinese', 'japanese', 'korean', 'mexican', 'other'];

function updateCards(){
    var form = document.getElementById('restaurant_form');
    var chks = form.querySelectorAll('input[type="checkbox"]');
    var checked = [];
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            checked.push(chks[i].value)
        }
    }
    // console.log(checked);

    for (var k = 0; k < checked.length; k++) {
        var checkValue = checked[k];
        document.getElementById(checkValue).setAttribute("aria-checked", "true");
        var checkType = '.' + checkValue;
        var checkElements = document.querySelectorAll(checkType);
        checkElements.forEach(checkElement => {
            checkElement.style.display = "block";
        });
    }

    var difference = restaurantType.filter(item => !checked.includes(item));
    // console.log(difference);
    for (var j = 0; j < difference.length; j++) {
        var value = difference[j];
        document.getElementById(value).setAttribute("aria-checked", "false");
        var type = '.' + value;
        var elements = document.querySelectorAll(type);
        elements.forEach(element => {
            element.style.display = "none";
        });
    }
    
    // console.log(document.getElementById("japanese").getAttribute("aria-checked"));
}
