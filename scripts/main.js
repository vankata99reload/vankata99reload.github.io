

//Gravity and Miles Measurement

    var drinks=5;
    var foods=5;

    document.getElementById('startGravity').onclick = function () {
        var gravity = (document.getElementById("gravityConvertStart").value)/3.50;
      document.getElementById('gravityConvert').innerHTML = gravity + 'G is the gravity on Mars';
    }


      document.getElementById('startMiles').onclick = function () {
          var miles = (document.getElementById("milesConvertStart").value)*1.60;
        document.getElementById('milesConvert').innerHTML = miles + 'Miles on Mars';
      }


//Speed Meter

      var element = document.getElementById('speed-icon');
      element.addEventListener("click",function(){

      var newSpeed = ParseInt(document.getElementById("speed").value);
      newSpeed=+100;
        document.getElementById('speedVar').innerHTML = newSpeed;

      })

//Build-in Console function for acceleration

function accelerate(accelerate){
	var newAcc = accelerate * 1250.50;

  console.log(newAcc);

  document.getElementById('acc-text').innerHTML = newAcc + 'P Accelerating Force';


}

accelerate(5);

//Food and Drink Input and Meter


  document.getElementById('eat').onclick = function() {
    food-value-=1;
    if (foods==0){
      document.getElementById('food-value').innerHTML = 'Out of Mars bars!';
    } else {
      document.getElementById('food-value').innerHTML = foods + ' bars left';
    }
  }


  document.getElementById('drink').onclick = function() {
    water-value-=1;
    if (drinks==0){
      document.getElementById('water-value').innerHTML = 'Out of water drops!';
    } else {
      document.getElementById('water-value').innerHTML = drinks + ' drops left';
    }
}
