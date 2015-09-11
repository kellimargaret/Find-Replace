//JavaScript
var findReplace = function(string, find_word, change_word) {
    var input_array = string.split(" ");
    for(var i=0; i < input_array.length; i++) {
        if(input_array[i].toLowerCase() === find_word.toLowerCase()) {
            input_array[i] = change_word;
        }
    }

    return input_array;
};

//jQuery
$(function() {
  $("form#find_replace").submit(function(event) {
    //Recieves inputs from html form
    var input_string = $("input#input_string").val();
    var find_word = $("input#find_word").val();
    var change_word = $("input#change_word").val();
    var result = findReplace(input_string, find_word, change_word);

    $(".output").empty();
    //Display results as a string with a space between words
    $(".output").text(result.join(" "));
    $("#result").show();
    event.preventDefault();
  });
});
