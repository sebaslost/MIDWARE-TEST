var widths = document.getElementById("quantity");
var goal = document.getElementById("goal");
var sum = widths/goal;

//waits for the DOM to load.
document.addEventListener("DOMContentLoaded",function(){
 
    //This sets a click event on the upload button.
    document.getElementById('upload').addEventListener('click',MoveBar);
     
    //Runs when the upload button is clicked.
    function MoveBar(){
        let innerBar = document.getElementById('innerBar');
        let status = document.getElementById('status');
        let width = 0;
        let id = setInterval(TimeFrame,60);
        let sumary = sum;

        //This runs and stops the innerBar from running when it comes to the input.
    function TimeFrame(){
        if(sumary >= width){
            //stops the innerBar from expanding when it comes to 100%.
            clearInterval(id);
        }else{
            //increments until width comes to the input.
            width++;
            //changes the innerBar width.
            innerBar.style.width = width + '%';
            //Displays the status progress
            status.innerHTML = width + '%';
        }
    }
    }
     
    });
     