let weightInput = document.getElementById('weightInput');
let heightInput = document.getElementById('heightInput');
let runButton = document.getElementById('runButton');
let resetButton = document.getElementById('resetButton');
let bmiOutput = document.getElementById('bmiOutput');
let medcialNoteIcon= document.getElementById('medicalNoteIcon');
let bmiReport = document.getElementById('bmiReport');








function run(){
    let weight= Number(weightInput.value);
    let height= Number(heightInput.value); 
    let bmi = weight/((height/100)^2);
    bmiOutput.textContent = bmi.toFixed(2); 
    let report= showReport(bmi);
    medcialNoteIcon.style.display = 'inline-block';
    bmiReport.textContent = report;
}


function reset(){
    heightInput.value = '';
    weightInput.value = '';
    bmiOutput.textContent= '_______';
    medcialNoteIcon.style.display= 'none';
    bmiReport.textContent= '';
}


runButton.addEventListener('click', eventHandler);
resetButton.addEventListener('click', reset);


function showReport(bmiValue){
    if(bmiValue<16){
        return `you're very thin`
    }else if(bmiValue>=16 && bmiValue<=17){
        return `You are Moderate thin`
    }else if(bmiValue>17 && bmiValue<=18.5){
        return `You are Mid Thin`
    }else if(bmiValue>18.5 && bmiValue<=25){
        return `You're Normal`
    }else if(bmiValue>25){
        return `You're Overweight`
    }
}



function eventHandler(){
    if(Number(weightInput.value) && Number(heightInput.value)){
        run();
    }else {
        alert('Please Provide Valid Input');
        reset();
    }
}