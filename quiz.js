player_1 = localStorage.getItem("Player1_input");
player_2 = localStorage.getItem("Player2_input");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1").innerHTML = player_1 + ":";
document.getElementById("player2").innerHTML = player_2 + ":";

document.getElementById("Player1_score").innerHTML = player_1_score;
document.getElementById("Player2_score").innerHTML = player_2_score;


document.getElementById("n3").innerHTML = "Question turn - " + player_1;
document.getElementById("n2").innerHTML = "Answer turn - " + player_2;

function send() {
   number1 = document.getElementById("n1").value;
   number2 = document.getElementById("n2").value;
   actual_answer = parseInt(number1) * parseInt(number2);

 
     

        question_number = "<h4> "+ number1+ "X" + number2 +"</h4>";
        input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
        check_button = "<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
        var row = question_number + input_box + check_button;



        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    
        document.getElementById("output").innerHTML = row;

}
