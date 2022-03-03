var weight = document.getElementById('weight');
var height = document.getElementById('height');
var age = document.getElementById('age');
var name = document.getElementById('name');
var message = document.getElementsByClassName('overlay');
var popup = document.getElementById('popup1');



function cal() {
    if (name.innerHTML !== "" && age.value !== NaN && weight.value !== NaN && height.value !== NaN) {

        var bmi = weight.value / ((height.value / 100) * (height.value / 100));
        if (isNaN(bmi)) {
            alert("please enter valid values");

        } else {
            alert(Math.round(bmi * 100) / 100);
            if (bmi < 18.5) {
                alert("You are Underweight");
            } else if (bmi >= 18.5 && bmi < 25) {
                alert("You are Normal");


            } else if (bmi >= 25 && bmi < 30) {
                alert("You are OverWeight");

            } else {
                alert("You are Obese");

            }



        }


    } else {
        alert("NO");

    }

}