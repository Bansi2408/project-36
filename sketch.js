//Create variables here
var database;
var dog,happyDog;
var foodS,foodStock;
var feed,addFood;
var feedTime, lastFed;
var foodObj;

function preload()
{
	//load images here
  dog = loadImage("image/dogImg1.png");
  happyDog = loadImage("image/dogImg.png");
}

function setup() {
	createCanvas(800,700);
  foodStock=database.ref('food');
  foodStock.on("value",readstock);

  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  foodObj = new Food(400,400);
}


function draw() {
  backgroung(46,139,87);

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("last feed : " + lastFed%12 + "PM" , 350,30);
  }else if(lastFed==0){
    text("last feed : 12 AM",350,30);
  }else{
    text("last feed : " + lastFed + "Am", 350,30);
  }
}

function readStock(data)
{
  foodS.val();
}

function writeStock(x)
{
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}

function feedDog ()
{
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref("/").update({
     Food:foodObj.getFoodStock(),
     FeedTime:hour()
  });
}

function addFood ()
{
  foodS++;
  database.ref("/").update({
    Food:foodS
  });
}
