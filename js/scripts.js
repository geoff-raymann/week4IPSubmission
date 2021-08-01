function Pizza(size) {
    this.size = size;
    this.price = [];
    this.toppings = [];
    this.crusts = [];
}
function Topping(name) {
    this.name = name;
    this.price = [];
}
function Crust(name){
    this.name = name;
    this.price = [];
}
Pizza.prototype.totalPrice = function(){
    return this.price + this.toppings[0].price + this.crusts[0].price;
}

var pepperoni = { small: 3.25, medium: 5, large: 7.5 };
var mushroom = { samll: 3.00, medium: 4.75, large: 7.25 };
var onions = {small: 2.85, medium: 4.60, large: 7.10 };
var sausages = { small: 2.70, medium: 4.45, large: 6.95 };
var bacon = {small: 2.6, medium: 4.35, large: 6.85 };
var extra_cheese = { small: 2.40, medium: 4.15, large: 6.65 };
var black_olives = { small: 2.30, medium: 4.05, large: 6.55 };
var green_peppers = { small: 2.25, medium: 4.00, large: 6.50 };
var pineapple = { small: 2.20, medium: 3.95, large: 6.45 };
var spinach = { small: 2.10, medium: 3.85, large: 6.35 };

var crustPrice = {
    fast_food: 1.15,
    cheese_stuffed: 1.20,
    pizza_bagels: 1.30,
    flat_bread: 1.35,
    thin_crust: 1.45,
    sicilian: 1.50,
    chicago_deep: 1.65,
    neapolitan: 1.75,
    ny_style: 2.00
}


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
        
        $(".after-selection").show();
        $(".order-list").append("<li><span class='order'>"+myPizza.size+" sized pizza with "+myPizza.toppings[0].name+" topping and a "+myPizza.crusts[0].name+" crust"+"</span></li>");

        $(".order").last().click(function(){
            $("#selected-size").text(myPizza.size);
            $("#selected-crust").text(myPizza.crusts[0].name);
            $("#selected-topping").text(myPizza.toppings[0].name);
            $("#total-price").text(myPizza.totalPrice());
        })

        $('.confirm').click(function(){
           var getResponse = confirm("Do you want your order(s) delivered?");
           var deliver = false;
            if(getResponse){
                deliver = true;
                var getRegion = prompt("Enter your region ");
                $(".after-order").show();
                $("#number-of-order").text("The count of orders made by the user");
                $("#the-charge").text("The charge for all the orders");
                $(".delivery-messege").append("<p class='hope-messege'> Hello, you have placed an order and your pizzas will be delivered to "+getRegion+" after 5 hours. We wish you a merry celebration!!");
            }
            else {
                alert("Thank you for choosing MerGe. We look forward to serving you again soon...")
            }
        })
        
    });
})

















// var myTop = new Topping("Pepperoni",3.25);
// var mycrust = new Crust("New York Style",2);
// //Pizza.toppings.push(myTop);
// //Pizza.crusts.push(mycrust);
// var myPizza = new Pizza("Small", 2);
// console.log(myPizza);
// myPizza.toppings.push(myTop);
// myPizza.crusts.push(mycrust);
// console.log(myPizza);

// myPizza.toppings.forEach(function(topping){
//     console.log(myPizza.size+"  USD "+myPizza.price);
//     console.log(typeof(myPizza.price));
//     console.log(topping.name, topping.price)
//     myPizza.crusts.forEach(function(crust){
//         console.log(crust.name, crust.price);
//     })
// });

// var totalCostofMyPizza = myPizza.totalPrice();
// console.log("You  will pay: USD "+totalCostofMyPizza);
