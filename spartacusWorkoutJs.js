		document.getElementById("startBtn").onclick = setCountdown;
		var counter = 0;
		var count = 15;
		var count_timer60 = 60;
		
		// image and audio array constructors
		var image = new Array;
		var audioEx = new Array;
		
		// headings will change that tells us which is the next exercise
		var head = [{'id': 'headTime', 'head1' : 'Next Up: Goblet Squat, '}, 
		{'id': 'headTime', 'head1' : 'Next Up: Mountain Climber, '}, 
		{'id': 'headTime', 'head1' : 'Next Up: Single-arm Dumbbell Swing, '}, 
		{'id': 'headTime', 'head1' : 'Next Up: T-pushup, '}, 
		{'id': 'headTime', 'head1' : 'Next Up: Split Jump, '}
		, {'id': 'headTime', 'head1' : 'Next Up: Dumbbell row, '}
		, {'id': 'headTime', 'head1' : 'Next Up: Dumbbell Side Lunge and Touch, '}
		, {'id': 'headTime', 'head1' : 'Next Up: Push-up position Row, '}
		, {'id': 'headTime', 'head1' : 'Next Up: Dumbbell Lunge and Rotation, '}
		, {'id': 'headTime', 'head1' : 'Next Up: Dumbbel Push Press, '}];
		
		// The actual headings of the exercises
		var head60 = [{'id': 'headTime', 'head2' : 'Goblet Squat, '}, 
		{'id': 'headTime', 'head2' : 'Mountain Climber, '}, 
		{'id': 'headTime', 'head2' : 'Single-arm Dumbbell Swing, '}, 
		{'id': 'headTime', 'head2' : 'T-pushup, '}, 
		{'id': 'headTime', 'head2' : 'Split Jump, '},
		{'id': 'headTime', 'head2' : 'Dumbbell row, '}
		, {'id': 'headTime', 'head2' : 'Dumbbell Side Lunge and Touch, '}
		, {'id': 'headTime', 'head2' : 'Push-up position Row, '}
		, {'id': 'headTime', 'head2' : 'Dumbbell Lunge and Rotation, '}
		, {'id': 'headTime', 'head2' : 'Dumbbell Push Press, '}];
		
		// description of the exercises in the order mentioned in the question 
		var descText = [
		{'id':'description', 'textDesc':"With both hands, grab one end of a dumbbell to hold it vertically in front of your chest, and stand with your feet slightly beyond shoulder width. Keeping your back naturally arched, push your hips back, bend your knees, and lower your body until the tops of your thighs are at least parallel to the floor. Pause, and push yourself up to the starting position. If that's too hard, do a body-weight squat instead."}, 

		{'id':'description', 'textDesc':"Assume a pushup position with your arms completely straight. Your body should form a straight line from your head to your ankles. Without allowing your lower-back posture to change, lift your right foot off the floor and slowly move your right knee toward your chest. Return to the starting position, and repeat with your left leg. Alternate back and forth for the duration of the set."},

		{'id':'description', 'textDesc':"Hold a dumbbell (or a kettlebell) at arm's length in front of your waist. Without rounding your lower back, bend at your hips and knees and swing the dumbbell between your legs. Keeping your arm straight, thrust your hips forward and swing the dumbbell to shoulder level as you rise to a standing position. Swing the weight back and forth. At the 30-second mark, switch arms."},

		{'id':'description', 'textDesc':"Grab a pair of hex dumbbells and assume a pushup position, your arms straight. Bend your elbows and lower your body until your chest nearly touches the floor. As you push yourself back up, lift your right hand and rotate the right side of your body as you raise the dumbbell straight up over your shoulder until your body forms a T [C]. Reverse the move and repeat, this time rotating your left side."},

		{'id':'description', 'textDesc':"Stand in a staggered stance with your feet 2 to 3 feet apart, your right foot in front of your left. Keeping your torso upright, bend your legs and lower your body into a lunge. Now jump with enough force to propel both feet off the floor. While you're in the air, scissor-kick your legs so you land with your left leg forward. Repeat, alternating your forward leg for the duration of the set. NOTE: If you haven't worked out recently or are overweight, just do a regular lunge instead."},

		{'id':'description', 'textDesc':"Grab a pair of dumbbells, bend at your hips (don't round your lower back), and lower your torso until it's nearly parallel to the floor. Let the dumbbells hang at arm's length. Without moving your torso, row the weights upward by raising your upper arms, bending your elbows, and squeezing your shoulder blades together. Pause, lower the dumbbells, and repeat."},

		{'id':'description', 'textDesc':"Hold a pair of dumbbells at arm's length at your sides. Take a big step to your left and lower your body by pushing your hips backward and bending your left knee. As you lower your body, ben  forward at your hips and touch the dumbbells to the floor. Repeat for 30 seconds, and then switch to your right leg. If the exercise is too hard, do the move without the dumbbells; just reach for the floor with your hands."},

		{'id':'description', 'textDesc':"Grab a pair of hex dumbbells and assume a pushup position, your arms straight. Keeping your core stiff, row the dumbbell in your right hand to the side of your chest, bending your arm as you pull it upward. Pause, and then quickly lower the dumbbell. Repeat with your left arm."},

		{'id':'description', 'textDesc':"Grab a dumbbell and hold it horizontally by its ends, just under your chin. Step forward with your right foot and lower your body into a lunge. As you lunge, rotate your upper body to the right. Return to the starting position, and repeat with your left leg. Alternate left and right until your 60 seconds are up. If the exercise is too hard, perform the movement without the dumbbell."},

		{'id':'description', 'textDesc':"Stand holding a pair of dumbbells just outside your shoulders, with your arms bent and palms facing each other. Stand with your feet shoulder-width apart and knees slightly bent. Dip your knees, and then explosively push up with your legs as you press the weights straight over your shoulders [C]. Lower the dumbbells back to the starting position and repeat."}
		];
		
		// Audio files constructor
		var audio15secRemaining = new Audio("15_seconds.wav");
		var audio10remaining = new Audio("10_seconds.wav");
		var audio5sec = new Audio("5.wav");
		var audio4sec = new Audio("4.wav");
		var audio3sec = new Audio("3.wav");
		var audio2sec = new Audio("2.wav");
		var audio1sec = new Audio("1.wav");
		var and_rest = new Audio("and_rest.wav");
		var roundComplete = new Audio("round_complete.wav");
		var workoutComplete = new Audio("workout_complete.wav");
		var audio6sec = new Audio("6.wav");
		var audio7sec = new Audio("7.wav");
		var audio8sec = new Audio("8.wav");
		var audio9sec = new Audio("9.wav");
		var audio10sec = new Audio ("10.wav");
		var audio30sec = new Audio("30_seconds.wav");
		var begin = new Audio("begin.wav");
		
		// variables used for countdown timers
		var flagTimer = 'start'; //click events
		var timeDuration = 0;
		var exCount = 0; //count of exercise
		var roundCount = 0;// count of rounds
		var sec = 60;
		var i = 0;
		
		// countdown starts from here
		function setCountdown(){
			if (flagTimer == 'start')
			{
				flagTimer = 'resume';
				timeDuration = 15;
				document.getElementById("startBtn").innerHTML = "Pause"; // the text of the button changes to Pause once when clicked Start
				counter = setInterval(timer15, 1000);
				
			}
			
			// When pause is clicked the text of the button changes to Resume
			else if (flagTimer == 'resume')
			{
				flagTimer  = 'pause';
				clearInterval(counter);
				counter = 0;
				document.getElementById("startBtn").innerHTML = "Resume";
			}
			
			else
			{
				flagTimer = 'resume';
				document.getElementById("startBtn").innerHTML = "Pause";
				
				// 15 seconds countdown after every exercise finishes
				if(timeDuration == 15){
					resume15();
				}
				// each exercise is of 60 seconds duration
				else if(timeDuration == 60){
					resume60();
				}
				
				else
				{
					resume2();
				}
			}
		}

		function resume15(){
			counter = setInterval('timer15()', 1000);	
		}
		function resume60(){
			counter = setInterval('timer60()', 1000);	
		}
		
		function resume2(){
			counter = setInterval('timer2()', 1000);
		}
		
		// This function is a timer for 15 seconds duration which happens after every exercise
		function timer15(){
			count = count-1;
			timeDuration = 15;
			document.getElementById("headTime").innerHTML = head[exCount].head1 + count + " seconds";
			image[exCount] = new Image();
			// The image changes according to the exercise going on and same with heading as well as description
			image[exCount].src = "spart"+exCount+".jpg";
			document.getElementById("theimage").src = image[exCount].src;
			descEx = descText[exCount].textDesc;
			document.getElementById("description").innerHTML = descEx;
            if(count == 13){
			    audioEx[exCount] = new Audio("spart"+exCount+".wav");
				audioEx[exCount].play();
			}
			if(count == 10){
				audio10remaining.play();
			}
			if(count == 5){
				audio5sec.play();
			}
			if(count == 4){
				audio4sec.play();
			}
			if(count == 3){
				audio3sec.play();
			}
			if(count == 2){
				audio2sec.play();
			}
			if(count == 1){
				audio1sec.play();
			}
			if(count == 0){
				begin.play();
				clearInterval(counter);
				count_timer60 = 60;
				counter = 0;
				counter = setInterval(timer60, 1000);
			}
			
		}
		
		// This function is for 2 minutes countdown which occurs after every round is complete
		function timer2(){
			timeDuration = 2;
			sec = sec-1;
			document.getElementById("headTime").innerHTML = head[exCount].head1 + count +" mins "+ sec + " seconds";
			image[exCount] = new Image();
			image[exCount].src = "spart"+exCount+".jpg";
			document.getElementById("theimage").src = image[exCount].src;
			descEx = descText[exCount].textDesc;
			document.getElementById("description").innerHTML = descEx;
			if(i == 0 && sec == 1)
			{
				count = count - 1;
				sec = 60;
				i--;
			}
			
			else if(sec == 1 && i == -1){
				audio1sec.play();
				i--;
			}
			else if(sec == 0 && i == -2)
			{
				begin.play();
				clearInterval(counter);
				count_timer60 = 60;
				counter = 0;
				counter = setInterval(timer60, 1000);
			}
            if(count == 0 && sec == 13){
			    audioEx[exCount] = new Audio("spart"+exCount+".wav");
				audioEx[exCount].play();
			}
			if(count == 0 && sec == 10){
				audio10remaining.play();
			}
			if(count == 0 && sec == 5){
				audio5sec.play();
			}
			if(count == 0 && sec == 4){
				audio4sec.play();
			}
			if(count == 0 && sec == 3){
				audio3sec.play();
			}
			if(count == 0 && sec == 2){
				audio2sec.play();
			}
		}
		
		// This function is a timer for 60 seconds which is the time duration for each exercise
		function timer60 ()
		{
			timeDuration = 60;
			count_timer60 = count_timer60 - 1;
			document.getElementById("headTime").innerHTML = head60[exCount].head2 + count_timer60 + " seconds";
			image[exCount] = new Image();
			image[exCount].src = "spart"+exCount+".jpg";
			document.getElementById("theimage").src = image[exCount].src;
			document.getElementById("description").innerHTML = descText[exCount].textDesc;
            if(count_timer60 == 30){
			    audio30sec.play();	
			}
			if(count_timer60 == 15){
				audio15secRemaining.play();
			}
			if(count_timer60 == 10){
				audio10sec.play();
			}
			if(count_timer60 == 9){
				audio9sec.play();
			}
			if(count_timer60 == 8){
				audio8sec.play();
			}
			if(count_timer60 == 7){
				audio7sec.play();
			}
			if(count_timer60 == 6){
				audio6sec.play();
			}
			if(count_timer60 == 5){
				audio5sec.play();
			}
			if(count_timer60 == 4){
				audio4sec.play();
			}
			if(count_timer60 == 3){
				audio3sec.play();
			}
			if(count_timer60 == 2){
				audio2sec.play();
			}
			if(count_timer60 == 1){
				audio1sec.play();
			}
			if(count_timer60 == 0){
				clearInterval(counter);
				exCount = exCount+1;
				counter = 0;
				
				// We check here if all the 10 exercises have finished
				if(exCount == 10){
					roundCount = roundCount + 1;
					exCount = 0;
					// 10 exercises make one round and we have to finish 3 rounds which is checked in the following condition
					if(roundCount == 3)
					{
						workoutComplete.play();
						clearInterval(counter);
						counter = 0;
						count = 15;
						flagTimer = "start";
						// once the workout is complete, the heading changes as written below
						document.getElementById("headTime").innerHTML = "Workout Complete!";
						document.getElementById("startBtn").innerHTML = "Start";
						document.getElementById("theimage").src = "";
						document.getElementById("description").innerHTML = "";
					}
					else
					{
						roundComplete.play();
						count = 1;
						sec = 60;
						counter = setInterval(timer2, 1000);
					}
					
				}
				else{
					count = 15;
					and_rest.play();
					counter = setInterval(timer15, 1000);
				}
			}
		}
		
	
