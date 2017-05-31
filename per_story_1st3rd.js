// an example of how to use a randomized string of integers to set parameters for each trial.
// this should be pasted into the JS area for the question right before the question that depends on these variables.
// i.e., if I am setting the intentionality level for a trial (int), I'll run this code on the question right BEFORE the question.

var this_order = "${e://Field/survey_order}";
var new_int = parseInt(this_order.charAt(this_order.length-1));
Qualtrics.SurveyEngine.setEmbeddedData('rand_int',new_int);
var new_third = parseInt(this_order.charAt(this_order.length-2));
Qualtrics.SurveyEngine.setEmbeddedData('rand_third',new_third);
var new_survey_order = this_order.slice(0,this_order.length-2);
Qualtrics.SurveyEngine.setEmbeddedData("survey_order",new_survey_order);