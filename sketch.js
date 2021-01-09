var hypnoticBall, database;
var position;
var form1;



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  form1 = new Form();

}

function draw(){
  background("white");
  
   
    form1.display();
  
}

