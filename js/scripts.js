var findReplace = function(string, find_word, change_word) {
    var input_array = string.split(" ");
    for(var i=0; i < input_array.length; i++) {
        if(input_array[i].toLowerCase() === find_word.toLowerCase()) {
            input_array[i] = change_word;
        }
    }

    return input_array;
};
