var defaultThemeColors = Survey.StylesManager.ThemeColors['default'];
defaultThemeColors['$main-color'] = '#293652';
defaultThemeColors['$main-hover-color'] = '#f19436';
defaultThemeColors['$text-color'] = '#293652';
defaultThemeColors['$header-color'] = '#293652';

defaultThemeColors['$header-background-color'] = '#293652';
defaultThemeColors['$body-container-background-color'] = '#293652';

Survey.StylesManager.applyTheme('default');

var json = {
    pages: [
        {
            questions: [
                {
                    type: 'html',
                    title: 'Learning Assessment!',
                    html:
                        "<h1>Learning Assessment!</h1>You are about to start a learning assessment! <br/>This will help determine your learning style.<br/>Please click on the <b>'Next'</b> button when you are ready.",
                },
            ],
        },
        {
            questions: [
                {
                    type: 'sortablelist',
                    name: 'Question1',
                    title:
                        'What type of learner are you? Order the words that describes you the most. ',
                    isRequired: true,
                    choicesOrder: 'random',
                    choices: [
                        {
                            value: 'Arrange, Blend, Develop',
                        },
                        {
                            value: 'Recipe, Logical, Structure',
                        },
                        {
                            value: 'Articulate, Huddle, Role-play',
                        },
                        {
                            value: 'Judicious, Diagnostic, Investigative',
                        },
                    ],
                    // User must select 4 options
                    validators: [
                        {
                            type: 'answercount',
                            minCount: 4,
                            text: 'Please use all choices',
                        },
                     ],
                },
            ],
        },
        {
            questions: [
                {
                    type: 'sortablelist',
                    name: 'Question2',
                    title:
                        'Sort these in order of importance to your learning style',
                    isRequired: true,
                    choicesOrder: 'random',
                    choices: [
                        {
                            value: 'Hypothesis, Explanatory, Determining',
                        },
                        {
                            value: 'Vent, Groupthink, Dialog',
                        },
                        {
                            value: 'Standardize, Practical, Tabulate',
                        },
                        {
                            value: 'Reconstruct, Integrate, Synthesize',
                        },
                    ],
                    // User must select 4 options
                    validators: [
                        {
                            type: 'answercount',
                            minCount: 4,
                            text: 'Please use all choices',
                        },
                     ],
                },
            ],
        },
        {
            questions: [
                {
                    type: 'sortablelist',
                    name: 'Question3',
                    title:
                        'Sort these in order of importance to your learning style',
                    isRequired: true,
                    choicesOrder: 'random',
                    choices: [
                        {
                            value: 'Regulate, Methodize, Consecutive',
                        },
                        {
                            value: 'Thorough, Validate, Philosophical',
                        },
                        {
                            value: 'Invent, Actualize, Author',
                        },
                        {
                            value: 'Conversation, Interview, PowWow',
                        },
                    ],
                    // User must select 4 options
                    validators: [
                        {
                            type: 'answercount',
                            minCount: 4,
                            text: 'Please use all choices',
                        },
                     ],
                },
            ],
        },
        {
            questions: [
                {
                    type: 'sortablelist',
                    name: 'Question4',
                    title:
                        'Sort these in order of importance to your learning style',
                    isRequired: true,
                    choicesOrder: 'random',
                    choices: [
                        {
                            value: 'Continuous, Follow, Regular',
                        },
                        {
                            value: 'Establish, Build, Formulate',
                        },
                        {
                            value: 'Verbalize, Consult, Exchange',
                        },
                        {
                            value: 'Technical, Opinionated, Testing',
                        },
                    ],
                    // User must select 4 options
                    validators: [
                        {
                            type: 'answercount',
                            minCount: 4,
                            text: 'Please use all choices',
                        },
                     ],
                },
            ],
        },
        {
            questions: [
                {
                    type: 'sortablelist',
                    name: 'Question5',
                    title:
                        'Sort these in order of importance to your learning style',
                    isRequired: true,
                    choicesOrder: 'random',
                    choices: [
                        {
                            value: 'Pondering, Deduction, Dispute',
                        },
                        {
                            value: 'Get Together, Mentoring, Supportive',
                        },
                        {
                            value: 'Spawn, Devise, Contrive',
                        },
                        {
                            value: 'Informative, Fine Points, Expectations',
                        },
                    ],
                    validators: [
                        {
                            type: 'answercount',
                            minCount: 4,
                            text: 'Please use all choices',
                        },
                     ],
                },
            ],
        },
    ],
};

window.survey = new Survey.Model(json);

/* --------------------------------------*/
// Compare index function
function compare (num){
    // Checks to see what position the index is in and changes it to the proper score
    var total;

    if ( num == 0){
        total = 4;
    } else if (num == 1){
        total = 3;
    } else if (num== 2) {
        total = 2;
    } else if ( num == 3) {
        total = 1;
    }

    return total;
}


/* --------------------------------------*/

function score(data) {
    document.write("<b>Learner Assessment Results:</b>");
    document.write("<hr/>");
    document.write("<br>");
    // Variables to store the new score
    var a1,a2,a3,a4,a5;

    // Create Formula
    document.write("<b>Create Score: </b>");
    document.write("<br>");
    var a = data[0].Question1.indexOf("Arrange, Blend, Develop");
    document.write("Arrange: ");
    document.write(a1=compare(a));
    document.write("<br>");

    var b = data[0].Question2.indexOf("Reconstruct, Integrate, Synthesize");
    document.write("Reconstruct: ");
    document.write(a2=compare(b));
    document.write("<br>");
    
    var c = data[0].Question3.indexOf("Invent, Actualize, Author");
    document.write("Invent: ");
    document.write(a3=compare(c));
    document.write("<br>");

     var d = data[0].Question4.indexOf("Establish, Build, Formulate");
    document.write("Establish: ");
    document.write(a4=compare(d));
    document.write("<br>");

    var e = data[0].Question5.indexOf("Spawn, Devise, Contrive");
    document.write("Spawn: ");
    document.write(a5=compare(e));
    document.write("<br>");

    var createTotal = a1 + a2 + a3 + a4 + a5;
    //var createTotal = a + b + c + d + e;
    document.write("<br>");
    document.write("Total: ");
    document.write(createTotal);

     document.write("<br>");

    /* ----------------------------------------- */
    document.write("<br>");
    //Step Formula
    document.write("<b>Step Score: </b>");
    document.write("<br>");

    var b1,b2,b3,b4,b5;

    var f = data[0].Question1.indexOf("Recipe, Logical, Structure");
    document.write("Recipe: ");
    document.write(b1 = compare(f));
     document.write("<br>");

    var g = data[0].Question2.indexOf("Standardize, Practical, Tabulate");
    document.write("Standardize: ");
    document.write(b2 = compare(g));
     document.write("<br>");
    
    var h = data[0].Question3.indexOf("Regulate, Methodize, Consecutive");
    document.write("Regulate: ");
    document.write(b3 = compare(h));
     document.write("<br>");

     var i = data[0].Question4.indexOf("Continuous, Follow, Regular");
    document.write("Continuous: ");
    document.write(b4 = compare(i));
     document.write("<br>");

    var j = data[0].Question5.indexOf("Informative, Fine Points, Expectations");
    document.write("Informative: ");
    document.write(b5 = compare(j));
     document.write("<br>");

    var stepTotal = b1 + b2 + b3 + b4 + b5;
    document.write("<br>");
    document.write("Total: ");
    document.write(stepTotal);
    document.write("<br>");

    /* ----------------------------------------- */
    document.write("<br>");
    //Talk Formula
    document.write("<b>Talk Score: </b>");
    document.write("<br>");

    var c1, c2, c3, c4, c5;

    var k = data[0].Question1.indexOf("Articulate, Huddle, Role-play");
    document.write("Articulate: ");
    document.write(c1 = compare(k));
     document.write("<br>");

    var l = data[0].Question2.indexOf("Vent, Groupthink, Dialog");
    document.write("Vent: ");
    document.write(c2 = compare(l));
     document.write("<br>");
    
    var m = data[0].Question3.indexOf("Conversation, Interview, PowWow");
    document.write("Conversation: ");
    document.write(c3 =compare(m));
     document.write("<br>");

     var n = data[0].Question4.indexOf("Verbalize, Consult, Exchange");
    document.write("Verbalize: ");
    document.write(c4 = compare(n));
     document.write("<br>");

    var o = data[0].Question5.indexOf("Get Together, Mentoring, Supportive");
    document.write("Get Together: ");
    document.write(c5 = compare(o));
     document.write("<br>");

    var talkTotal = c1 + c2 + c3 + c4 + c5;
    document.write("<br>");
    document.write("Total: ");
    document.write(talkTotal);
    document.write("<br>");


    /* ----------------------------------------- */
    document.write("<br>");
    //Research Formula
    document.write("<b>Research Score: </b>");
    document.write("<br>");

    var d1, d2, d3, d4, d4;

    var p = data[0].Question1.indexOf("Judicious, Diagnostic, Investigative");
    document.write("Judicious: ");
    document.write(d1 = compare(p));
     document.write("<br>");

    var q = data[0].Question2.indexOf("Hypothesis, Explanatory, Determining");
    document.write("Hypothesist: ");
    document.write(d2 = compare(q));
     document.write("<br>");
    
    var r = data[0].Question3.indexOf("Thorough, Validate, Philosophical");
    document.write("Thorough: ");
    document.write(d3 = compare(r));
     document.write("<br>");

     var s = data[0].Question4.indexOf("Technical, Opinionated, Testing");
    document.write("Technical: ");
    document.write(d4 = compare(s));
     document.write("<br>");

    var t = data[0].Question5.indexOf("Pondering, Deduction, Dispute");
    document.write("Pondering: ");
    document.write(d5 = compare(t));
     document.write("<br>");

    var researchTotal = d1 + d2 + d3 + d4 + d5;
    document.write("<br>");
    document.write("Total: ");
    document.write(researchTotal);
    document.write("<br>");

    //Creating an array to contain the totals
    var learn = [];
    learn.push(createTotal,stepTotal,talkTotal,researchTotal);

    //Find out which style fits the student
    learningStyle(learn);

}

/* -----------------------------*/

// This function will determine the top learning style
function learningStyle (learnArray){

    // Place holder variables
    var largest = 0;
    var index;
    var answer;

    //loops through the array to find the biggest element / Position
    for (var i = 0; i < learnArray.length; i++) {

        //Compares the largest element with the next element
        if (learnArray[i] > largest) {
            largest = learnArray[i];
            index = i;
            document.write(index); // Testing Counter
        }

        // This displays the type of learning style 
        if (index == 0 ){
                answer = "<h3>Creative Learning Style</h3>";
        } else if (index == 1 ) {
                answer = "<h3>Step Learning Style</h3>";
        } else if (index == 2) {
                answer = "<h3>Talk Learning Style</h3>";
        } else if (index == 3 ) {
                answer = "<h3>Research Learning Style</h3>";
        } else {
            document.write("NONE");
        }
    }  

    document.write(answer);
}

/* -----------------------------*/






/* -----------------------------*/
survey
    .onComplete
    .add(function (result) {
        var scoreLst = [];
        scoreLst.push(result.data);
        score(scoreLst);
        connection_school();
        
        document
            .querySelector('#surveyResult')
            .textContent = "Result score:\n" + scoreLst;
    });

$('#surveyElement').Survey({ model: survey });
