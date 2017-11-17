window.onload = function() {
    var numberOfStarts = Number(document.getElementById('label').value);
    document.getElementById('start').onclick = function() {
        if (isNumber(numberOfStarts) && (numberOfStarts != 0)) {
            var priceMas = fillPrices(4, 2, 1, 1);
            var index = randomize(numberOfStarts, priceMas.length);
            alert('HEY! You got : ' + priceMas[index]);
        } else alert('input correct number');
    }

    function randomize(number, size) {
        var loseIndex;
        if (number >= 1) {
            for (var i = 0; i < number; i++) {
                loseIndex = Math.floor((Math.random() * size) + 1);
            }
            return loseIndex;
        } else alert('Input value more then 0');
    }

    function isNumber(str) {
        return !isNaN(parseFloat(str)) && isFinite(str);
    }

    function fillPrices(rare, mythical, legendary, immortal) {
        var prices = [];
        legendary += immortal * 10;
        mythical += immortal * 15;
        mythical += legendary * 10;
        rare += immortal * 20;
        rare += legendary * 15;
        rare += mythical * 10;
        mythicalInd = rare + mythical;
        legendaryInd = mythicalInd + legendary;
        immortalInd = legendary + 1;
        for (var i = 0; i < rare; i++) {
            prices[i] = 'rare';
        }
        for (var i = rare; i < mythicalInd; i++) {
            prices[i] = 'mythical';
        }
        for (var i = mythicalInd; i < legendaryInd; i++) {
            prices[i] = 'legendary';
        }
        if (immortal != 0) prices[immortalInd] = 'immortal';
        return prices;
    }
}
