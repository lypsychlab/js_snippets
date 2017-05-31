//grab_text_input:
//gets the text a participant entered into a text-entry question
//and saves it in a dynamically named embedded data field for future use/recording
//note that this allows you to run the same question multiple times, as long as
//you are naming the embedded data field differently each time

//all this code should appear WITHIN the Qualtrics.SurveyEngine.addOnLoad brackets {}

//dynamically grab the question ID (a string)
    var currentQuestionID = this.getQuestionInfo().QuestionID;
    //use it to make a name for your embedded variable
    var resultEmbeddedName = currentQuestionID + "_response";  //e.g. QID6_response 

    $('NextButton').onclick = function (event) {
        // everything in here will run when you click the next button
        // note that it has access to javascript variables from the enclosing function
        // however, if you declare something in here with "var" then it will be a LOCAL variable

        //identify the input text field
        var responseTextField = $(currentQuestionID).select('input.InputText').first();
        //get the value of the response
        var respText = responseTextField.value;

        //uncomment this line when testing code:
        //allows you to check whether you correctly grabbed the text input
        //alert("Result: " + respText + "\nwill be available to future questions as: \n$" + "{e://Field/" resultEmbeddedName"}");

        //set an embedded variable to the input text
        Qualtrics.SurveyEngine.setEmbeddedData(resultEmbeddedName, respText);

        // and now run the event that the normal next button is supposed to do
        Qualtrics.SurveyEngine.navClick(event, 'NextButton');
    }
    