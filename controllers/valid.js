module.exports = function (req, res) {
    var req = req.body;
    var errors = [];
    var numberss = {};
    var letterss = {};
    var agreementt = {};
    var typee = {};

    var numbers = req.numbers;
    if(!valid(numbers, '0123456789')){
        errors.push('Invalid numbers');
        numberss.error = 'Invalid numbers';
    }

    var letters = req.letters;
    if(!valid(letters, 'abcd')){
        errors.push('Invalid letters');
        letterss.error = 'Invalid letters';
    }

    var agreement = req.agreement;
    if(agreement != 'on'){
        errors.push('Checkbox isnt true');
        agreementt.error = 'Checkbox isnt true';
    }

    var type = req.type;
    if(type != '1' && type != '2' && type != '3'){
        errors.push('Radio isnt checked');
        typee.error = 'Radio isnt checked';
    }

    if(errors.length > 0){
        res.status(500).json({numberss, letterss, agreementt, typee});
    }
    else {
        res.json({massage: "nice"});
    }


    function valid(string, symbols) {
            if (string.length === 0) {
                return false;
            }

            for (var i = 0; i < string.length; i++) {
                if (symbols.indexOf(string.charAt(i)) === -1) {
                    return false;
                }
            }

        return true;
    }
};
    
    
    
    
    
    
