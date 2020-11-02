
var rotationSpeed = 0.001;
var beer = document.getElementById('beer1');
var bourbon = document.getElementById('bourbon1');
function spin(){
	beer.object3D.rotation.x += rotationSpeed;
	beer.object3D.rotation.y += rotationSpeed;
	beer.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 10);


beer.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('entered');
});

beer.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	console.log('left');
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
