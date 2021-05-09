class Food{
    constructor() {
        this.foodStock = createButton('feed the dog');
        this.lastFeed = createButton('last feed');
        this.milk = addImage("images/Milk.png");
    }

    display()
    {

        this.foodStock= createButton('feed the dog')
        this.foodStock.html("feed the dog");
        this.foodStock.position(700,95);

        this.lastFeed= createButton('last feed')
        this.lastFeed.html("last feed");
        this.lastFeed.position(800,95);

        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,720,70,70);

        if(this.foodStock!=0){
            for(vari=0;i<this.foodStock;1++){
                if(1%10==0) {
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}