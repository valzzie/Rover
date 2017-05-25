var rover = {
  position: [5,5],//(x=rightToleft, y=upAndDown)
  direction: "W",// using NESW
  rightOrLeft: "L",//using R or L
  backwardForward: "B"// using B or F
};
//ITERATION 2 (first part) BELOW: REFERS TO ROVER OBJECT ABOVE *****************
function goForward(arr){
  for(var i=0;i<arr.length;i++){
    if(rover.direction ==="N"){
      switch(arr[i]){
      case 'F':
      rover.position[1]++;
      break;
      case 'B':
      rover.position[1]-- ;
      break;
      case "R":
      rover.direction = "E";
      break;
      case "L":
      rover.direction = "W";
      break;
      }//closes switch
    }//closes if
    else if(rover.direction ==="E"){
      switch(arr[i]){
        case 'F':
        rover.position[0]++;
        break;
        case 'B':
        rover.position[0]--;
        break
        case "R":
        rover.direction = "S";
        break;
        case "L":
        rover.direction = "N";
        break;
      }//closes switch
    }//closes if
    else if(rover.direction ==="S"){
      switch(arr[i]){
        case 'F':
        rover.position[1]--;
        break;
        case 'B':
        rover.position[1]++;
        break;
        case "R":
        rover.direction = "W";
        break;
        case "L":
        rover.direction = "E";
        break;
      }//closes switch
    }//closes if
    else if(rover.direction ==="W"){
      switch(arr[i]){
        case 'F':
        rover.position[0]--;
        break;
       case 'B':
        rover.position[0]++;
        break;
        case "R":
        rover.direction = "N";
        break;
        case "L":
        rover.direction = "S";
        break;
    }//closes switch
  }//closes if
  }//closes the loop
  return ["Ending Position:  " + rover.position, "Ending Direction:  " + rover.direction];
}//closes function
goForward(["F","B","L","F"]);//["F","F","R","L"] // expecting result of 4,4


//ITERATION 1 BELOW: REFERS TO ROVER OBJECT ABOVE *****************************
/*
function backwardForward(){
if(rover.direction ==="N"){
  switch(rover.backwardForward){
    case 'F':
      rover.position[1]++;
      break;
      case 'B':
      rover.position[1]-- ;
      break;
  }//closes switch
  }//closes if
  if(rover.direction ==="E"){
  switch(rover.backwardForward){
    case 'F':
      rover.position[0]++;
      break;
      case 'B':
      rover.position[0]--;
      break;
  }//closes switch
  }//closes if
  if(rover.direction ==="S"){
  switch(rover.backwardForward){//originally had this but changed
    case 'F':
      rover.position[1]--;//rover.initialPosition[0] now returns
      break;
      case 'B':
      rover.position[1]++;//rover.initialPosition[0] now returns
      break;
  }//closes switch
  }//closes if
  if(rover.direction ==="W"){
  switch(rover.backwardForward){
    case 'F':
      rover.position[0]--;//rover.initialPosition[0] now returns
      break;
      case 'B':
      rover.position[0]++;//rover.initialPosition[0] now returns
      break;
  }//closes switch
  }//closes if
}//closes function

console.log("BeforeRunFunction: " + rover.position);
backwardForward();
console.log("AfterRunFunction " + rover.position);

//*************************************************
function rightOrLeft(){//result updates the rover.direction it is facing;
  if(rover.direction ==="N"){
    switch(rover.rightOrLeft){
      case "R":
        rover.direction = "E";
        break;
        case "L":
          rover.direction = "W";
          break;
    }//closes switch
  }//closes if
  if(rover.direction ==="E"){
    switch(rover.rightOrLeft){
      case "R":
        rover.direction = "S";
        break;
        case "L":
          rover.direction = "N";
          break;
    }//closes switch
  }//closes if
  if(rover.direction ==="S"){
    switch(rover.rightOrLeft){
      case "R":
        rover.direction = "W";
        break;
        case "L":
          rover.direction = "E";
          break;
    }//closes switch
  }//closes if
  if(rover.direction ==="W"){
    switch(rover.rightOrLeft){
      case "R":
        rover.direction = "N";
        break;
        case "L":
          rover.direction = "S";
          break;
    }//closes switch
  }//closes if
}//closes function
// console.log("BeforeRunFunction:",rover.direction);
rightOrLeft();
// console.log("AfterRunFunction",rover.direction);
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]" + ", New Rover Direction: [" + rover.direction  + "]");
*/
