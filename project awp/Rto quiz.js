(function() 
 {
  var allQuestions = [{
    question:"What is the minimum age for driving a motorcycle without gear?", 
    options: ["12 years", "14 years", "16 years", "18years"],
    answer: 2
  }, {
    question: "What should you do when you see a traffic sign of a school nearby?",
    options: ["Stop the vehicle", "go on with same speed", "Press horn and proceed in the same speed", "Slow down and proceed carefully"],
    answer: 3
  }, {
    question: "Near a pedestrian crossing, when the pedestrians are waiting to cross the road, you should",
    options: ["Sound horn and proceed", "Stop the vehicle and wait till the pedestrians cross the road and then proceed", "Slow down, sound horn and pass","continue going on"],
    answer: 1
  },{
    question: "On a road designated as one way",
    options: ["Should not drive in reverse gear", "Parking is prohibited", "Overtaking is prohibited", "U turn is prohibited"],
    answer: 0
  }, {
    question: "You can overtake a vehicle in front",
    options: ["Through the left side", "Through the right side of that vehicle", "Through the left side, if the road is wide", "none of these"],
    answer: 1
  },{
    question: "How can you distinguish a transport vehicle ?",
    options: ["By looking at the number plate of the vehicle.", "By looking at the tyre size.", "By colour of the vehicle.", "none of these"],
    answer: 0
  },{
    question: "Validity of learners licence",
    options: ["Till the driving licence is obtained", " 6 months", "30 days", "1 year"],
    answer: 1
  },{
    question: "In a road without footpath, the pedestrians",
    options: ["Should walk on the left side of the road", "May walk on either side of the road", "Should walk on the right side of the road", "none of these"],
    answer: 2
  },{
    question: "Free passage should be given to the following types of vehicles",
    options: ["Police vehicles.", "Express, Super Express buses", "Ambulance and fire service vehicles", "none of these"],
    answer: 2
  },{
    question: "Vehicles proceeding from opposite direction should be allowed to pass through? ",
    options: ["Your right side", "Your left side", "The convenient side", "none of these "],
    answer: 0
    }
   ,{
    question: "Driver of a vehicle may overtake ?",
    options: ["When the driver of the vehicle in front shows the signal to overtake", "If the road is sufficiently wide", "while driving down hill", "none of these"],
    answer: 0
    }
   ,{
    question: "Driver of a motor vehicle shall drive through",
    options: ["The left side of the road", "The right side of the road", "The Center of the road", " The wrong side of the road"],
    answer: 0
    }
   ,{
    question: "Fog lamps are used",
    options: ["When there is mist.", "During night.", "When the opposite vehicle is not using dim light", "none of these"],
    answer: 0
    }
   ,{
    question: "Red traffic light indicates ..",
    options: ["stop the vehicle.", "vehicle can proceed with caution.", "speed up ", "slow down"],
    answer: 0
    }
   ,{
    question: "Parking a vehicle in front of entrance to hospital",
    options: ["improper", "proper", "Proper if NO PARKING sign is not provided", "none of these"],
    answer: 0
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length); 
        return score;
  }
})();
