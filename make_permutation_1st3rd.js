// an example of how to control randomization using permutations.
// this example will create an 8-length string of integers, which is then set as an embedded variable.
// on every trial, a value will be popped off the end of this list, and used to control what kind of stimulus is shown.
// this code should be run at the very beginning of the survey.
// IMPORTANT NOTES:
// - for peace of mind, you should initialize embedded variables in the Survey Flow.
// - permute() will create *all* permutations of the given string (i.e., n! permutations for an n-length string), so consider organizing your randomization to minimize space/time. 

var permArr = [], usedChars = [], order_long = [];
var order_string = get_permutation('ABCD');
var order_hash = new Object();
order_hash['A'] = '11';
order_hash['B'] = '12';
order_hash['C'] = '21';
order_hash['D'] = '22';
for (i = 0; i < 4; i++) {
  order_long += order_hash[order_string.charAt(i)];
}


function get_permutation(input) {
  var permlist = permute(input); //get list of all permutations of the input string
  var list_length = permlist.length; //length of this list
  var out_text = ""; //this will hold the output
  var ind = Math.floor(Math.random() * list_length); //random index 
  out_text += permlist.slice(ind); //grab one permutation
  return out_text;
}

function permute(input) {
  //convert input into a char array (one element for each character)
  var i, ch, chars = input.split("");
  for (i = 0; i < chars.length; i++) {
    //get and remove character at index "i" from char array
    ch = chars.splice(i, 1);
    //add removed character to the end of used characters
    usedChars.push(ch);
    //when there are no more characters left in char array to add, add used chars to list of permutations
    if (chars.length == 0) permArr[permArr.length] = usedChars.join("");
    //send characters (minus the removed one from above) from char array to be permuted
    permute(chars.join(""));
    //add removed character back into char array in original position
    chars.splice(i, 0, ch);
    //remove the last character used off the end of used characters array
    usedChars.pop();
  }
  return permArr;
}
var start_counter = 0;
Qualtrics.SurveyEngine.addEmbeddedData("survey_order",order_long);
Qualtrics.SurveyEngine.addEmbeddedData("counter",start_counter);