
//This Business Logic
function Pizza(size) {
    this.size = size;
    this.price = 5.5;
    this.toppings = [];
    this.crusts = [];
}
function Topping(name) {
    this.name = name;
    this.price = 5.00;//[5, 4.75, 4.60, 4.45, 4.35, 4.15, 4.05, 4.00, 3.95, 3.85];
}
function Crust(name){
    this.name = name;
    this.price = 2.00//[1.15, 1.20, 1.30, 1.35, 1.45, 1.50, 1.65, 1.75, 2.00];
}
Pizza.prototype.priceOfPizzaSize = function(){
    return this.price;
}
Topping.prototype.priceOfTopping = function(){
    return this.price;
}
Crust.prototype.priceOfCrust = function(){
    return this.price;
}

const deliveryCharge = 3;



//The commented section was for practice during implementation.. . We will continue after submission since we were time out..

// Pizza.prototype.priceOfSmall = 2;
// Pizza.prototype.priceOfMedium = 3;
// Pizza.prototype.priceOfLareg = 5.5;

// Topping.prototype.priceOfPepperoni = 5;
// Topping.prototype.priceOfMushroom = 4.75;
// Topping.prototype.priceOfOnions = 4.60;
// Topping.prototype.priceOfSausages = 4.45;
// Topping.prototype.priceOfBacon = 4.35;
// Topping.prototype.priceOfExtraCheese = 4.15;
// Topping.prototype.priceOfBlackOlives = 4.05;
// Topping.prototype.priceOfGreenPepper = 4.00;
// Topping.prototype.priceOfPineapple = 3.95;
// Topping.prototype.priceOfSpinach = 3.85;

// Crust.prototype.priceOfFastFood = 1.15;
// Crust.prototype.priceOfCheeseStuffed = 1.20;
// Crust.prototype.priceOfPizzaBagels = 1.30;
// Crust.prototype.priceOfFlatBread = 1.35;
// Crust.prototype.priceOfThinCrust = 1.45;
// Crust.prototype.priceOfSicilian = 1.50;
// Crust.prototype.priceOfChicagoDeep = 1.65;
// Crust.prototype.priceOfNeapolitan = 1.75;
// Crust.prototype.priceOfNyStyle = 2;

// Pizza.prototype.totalPrice = function(){

// }




// var pizzaSizePrices = { small: 2, medium: 3, large: 5.5 };

// var pepperoni = { small: 3.25, medium: 5, large: 7.5 };
// var mushroom = { samll: 3.00, medium: 4.75, large: 7.25 };
// var onions = {small: 2.85, medium: 4.60, large: 7.10 };
// var sausages = { small: 2.70, medium: 4.45, large: 6.95 };
// var bacon = {small: 2.6, medium: 4.35, large: 6.85 };
// var extra_cheese = { small: 2.40, medium: 4.15, large: 6.65 };
// var black_olives = { small: 2.30, medium: 4.05, large: 6.55 };
// var green_peppers = { small: 2.25, medium: 4.00, large: 6.50 };
// var pineapple = { small: 2.20, medium: 3.95, large: 6.45 };
// var spinach = { small: 2.10, medium: 3.85, large: 6.35 };

// var crustPrice = {
//     fast_food: 1.15,
//     cheese_stuffed: 1.20,
//     pizza_bagels: 1.30,
//     flat_bread: 1.35,
//     thin_crust: 1.45,
//     sicilian: 1.50,
//     chicago_deep: 1.65,
//     neapolitan: 1.75,
//     ny_style: 2.00
// }




//The user interface 
$(document).ready(function(){
    $(".pizza").submit(function(event){
        event.preventDefault();
        var selectedPizzaSize = $("input:radio[name=Pizza]:checked").val();
        var selectedTopping = $("#pizza-toppers").val();
        var selectedCrust = $("#pizza-crust").val();

        var myPizza = new Pizza(selectedPizzaSize);
        var newToppers = new Topping(selectedTopping);
        var newCrust = new Crust(selectedCrust);
        myPizza.toppings.push(newToppers);
        myPizza.crusts.push(newCrust);

        var totalPrice = myPizza.priceOfPizzaSize() + newToppers.priceOfTopping() + newCrust.priceOfCrust();

        var totalDeliveryPrice = totalPrice + deliveryCharge;
        
        $(".after-selection").show();
        $(".order-list").append("<li><span class='order'>"+myPizza.size+" sized pizza with "+myPizza.toppings[0].name+" topping and a "+myPizza.crusts[0].name+" crust"+"</span></li>");

        $(".order").last().click(function(){
            $("#selected-size").text(myPizza.size);
            $("#selected-crust").text(myPizza.crusts[0].name);
            $("#selected-topping").text(myPizza.toppings[0].name);
            $("#total-price").text(totalPrice);
        })

        $('.confirm').click(function(){
           var getResponse = confirm("Do you want your order(s) delivered?");
           var deliver = false;
            if(getResponse){
                deliver = true;
                var getRegion = prompt("Enter your region ");
                $(".after-order").show();
                $("#number-of-order").text("You can do another order!");
                $("#the-charge-of-pizza").text("    "+totalPrice);
                $("#the-charge-of-delivery").text("    "+deliveryCharge);
                $("#order-charge").text("   "+totalDeliveryPrice)
                $(".delivery-messege").append("<p class='hope-messege'> Hello, you have placed an order and your pizzas will be delivered to "+getRegion+" after 5 hours. We wish you a merry celebration!!");
            }
            else {
                $(".after-order").show();
                $("#number-of-order").text(" Inapplicable");
                $("#the-charge").hide(" Inapplicable");
                $(".payment").hide();
                $(".delivery-messege").append("<h1 class='hope-messege'>You did not place any Order!</h1><br>");
                $(".delivery-messege").append("<p class='hope-messege'>Thank you for choosing MerGe. We look forward to serving you again soon...</p>");
            }
        })
        
    });
})