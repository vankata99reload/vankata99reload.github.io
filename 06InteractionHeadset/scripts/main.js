
var level = 0.2;
var beer2 = document.getElementById('beer1');
var beer1 = document.getElementById('beer2');
var song1 = document.getElementById('song1');
var song2 = document.getElementById('song2');
var song3 = document.getElementById('song3');
var song4 = document.getElementById('song4');
var song5 = document.getElementById('song5');
var music = document.getElementById('music');

var songs = new Array (song1, song2, song3, song4, song5);


music.addEventListener('mouseenter', function(){



	console.log('entered');
});

music.components.sound.playSound();

beer1.addEventListener('mouseenter', function(){
		//beer2.object3D.position.y += level;
	rotationSpeed = 0.1;
	console.log('entered');
});

beer1.addEventListener('mouseleave', function(){
	//beer2.object3D.position.y -= level;
	rotationSpeed = 0.01;
	console.log('left');
});


beer2.addEventListener('click', function(){


	function spin(){
		beer2.object3D.position.x += level;
		beer2.object3D.position.z += level;

		beer2.object3D.rotation.x += level;
		beer2.object3D.rotation.y += level;
		beer2.object3D.rotation.z += level/2;
		//console.log(myOtherBox.object3D.rotation);

		if (level=20) {
			break;
		}
	}
	setInterval(spin, 10);

});



/*
 * click-events can use a fuse (default on mobile). So the event only fires, if the cursor is on the object for a specified time.
 */

 var growspeed = 1.2 ;

 function grow(){
 	bourbon.object3D.scale.x *= growspeed;
 	bourbon.object3D.scale.y *= growspeed;
 	bourbon.object3D.scale.z *= growspeed;
 	//console.log(myOtherBox.object3D.scale);
 }

 bourbon.addEventListener('click', function(){ // uses a fuse
 	grow();
	console.log('grew');
 });
