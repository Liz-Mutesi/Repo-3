let age = 8
function catalyst(age){

if(age <13) {
    console.log('you do not qualify for the program');
   } else if(age >=13 && age <=17) {
    console.log('catalyst program');
   } else if(age >=18 && age <=40) {
    console.log('evening program');
   } else {
    console.log('cool people program');
      }
    }
    catalyst(12)


    // let size = 8;
    function human(size){
        if (size <= 5 || size >= 10){
            console.log("we have something for you")
        }
        else{
            console.log("nothing")
        }
    }
    human(4);
    human(12);