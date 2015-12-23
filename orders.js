<!-- 
//    Adgala, Rohan Karthik    Account:  jadrn002
//         CS545, Fall 2015
//         Project #4
 -->
// <!-- Alan Riggins Lecture Notes -->
/*  We load the global array proj4_data once, then use it as needed
    to retrieve product information.
    
    The Milk Chocolate handler is done the old-fashion way, with an 
    'onclick' call in the xhtml code.  The rest of the buttons have 
    handlers assigned the correct way.
    
    Alan Riggins
    CS545
    Fall 2015
*/    

var proj4_data;


   function updateCartTable(items) {
        var tmpString = "<table class='cart'>";
        var totalItems = 0;
        var total = 0;
        tmpString += "<tr>"+"<th>SKU</th>"+"<th>Item</th>"+"<th>Price</th>"+"<th>Quantity</th>"+"<th></th>"+"<th></th></tr>";
        for (var i = 0; i < items.length; i++) {           
            tmpString += "<tr>";           
            tmpString += "<td>" + items[i]['sku'] + "</td>";
            tmpString += "<td>" + items[i]['title'] + "</td>";
            tmpString += "<td>" + items[i]['retail'] + "</td>";
            tmpString += "<td><input id='q" + items[i]['sku']  + "' value="+ items[i]['qty'] + " size='2'></td>";
            tmpString += "<td><input id='" + items[i]['sku'] + "' class='delete' type='button' value='delete'></td>";
            tmpString += "<td><input id='" + items[i]['sku'] + "' class='update' type='button' value='update'></td>"; 
            tmpString += "</tr>";
            totalItems += Number(items[i]['qty']);
            total += Number(items[i]['retail']) * Number(items[i]['qty'])
        };
        tmpString += "</table>";
        tmpString += "<h1 class='cartHead'><u>Total Cost</u></h1>";
        tmpString += "<table class='cart'>";
        var subtotalPrice = total;
        var shippingPrice = 2;
        var shippingPriceTotal = shippingPrice * totalItems;
        var taxPrice = subtotalPrice * 8 / 100;
        var total = subtotalPrice + shippingPriceTotal + taxPrice;
        tmpString += "<tr><td>Price:</td><td>" + subtotalPrice.toFixed(2)+ "$</td></tr>";
        tmpString += "<tr><td>Shipping Charges (Each: 2$):</td><td>"+ shippingPriceTotal.toFixed(2) +"$</td></tr>";
        tmpString += "<tr><td>Tax Price (8%):</td><td>"+ taxPrice.toFixed(2) +"$</td></tr>";
        tmpString += "<tr><td>Total Amount:</td><td>"+ total.toFixed(2) +"$</td></tr>";
        tmpString += "</table>";       
        $('#cart').html(tmpString);
        return total;
    }

$(document).ready(function() {

	var cart = new shopping_cart("jadrn002");
    $('#count').text(cart.size());
    proj4_data = new Array();
    $.get('/perl/jadrn002/proj4/get_products.cgi', storeData);
    updateDisplay();
 

    
	$(document).on('click','.delete', function() {
        cart.delete(this.id);
        $('#count').text(cart.size());
        updateDisplay();      
        var items = get_cart_array();      
        updateCartTable(items);
       
    })
    $(document).on('click','.update', function() {
        var sku = this.id;
        var qty =  $("#q"+sku).val();
        if (qty == "" || qty<=0 ){
            return;
        }        
        cart.setQuantity(sku, qty);       
        $('#count').text(cart.size());
        updateDisplay();        
        var items = get_cart_array();       
        updateCartTable(items);        
    })
   
        
    function updateDisplay() {
        var cartArray = cart.getCartArray();
        var toWrite = "<table class='orderContent'>";
        toWrite += "<tr><td>SKU</td><td>Quantity</td></tr>";
        for(i=0; i < cartArray.length; i++) {
            toWrite += "<tr>";
            toWrite += "<td>"+cartArray[i][0]+"</td>";
            toWrite += "<td>"+cartArray[i][1]+"</td>"; 
            toWrite += "</tr>";
            }
        toWrite += "</table>"; 
        $('#cart').html(toWrite); 
        $('#count').text(cart.size());     
    } 

    $( "#dialog-modal" ).dialog({
            height: 700,
            width: 1000,
            modal: true,
            autoOpen: false,
            closeOnEscape:true
    }).prev(".ui-dialog-titlebar").css("background", "#D2691E");
    

  
    $('#order_button').on('click', function($e) {                  
             $("#dialog-modal").dialog('open');
    }); 

      $("#similarAddress").change(function () {
        if (this.checked) {           
            copyShippingAddress();
            $("#shippingAddress").hide();
        }
        else {           
            clearShippingAddress();
             $("#shippingAddress").show();
        }
    });
});

function copyShippingAddress() {

    document.getElementById("shippingFName").value = document.getElementById("billingFName").value;
    document.getElementById("shippingLName").value = document.getElementById("billingLName").value;
    document.getElementById("shippingAdr1").value = document.getElementById("billingAdr1").value;
    document.getElementById("shippingAdr2").value = document.getElementById("billingAdr2").value;
    document.getElementById("shippingCity").value = document.getElementById("billingCity").value;
    document.getElementById("shippingState").value = document.getElementById("billingState").value;
    document.getElementById("shippingZip").value = document.getElementById("billingZip").value;
    document.getElementById("shippingPhone").value = document.getElementById("billingPhone").value;

}

function clearShippingAddress() {

    document.getElementById("shippingFName").value = "";
    document.getElementById("shippingLName").value = "";
    document.getElementById("shippingAdr1").value = "";
    document.getElementById("shippingAdr2").value = "";
    document.getElementById("shippingCity").value = "";
    document.getElementById("shippingState").value = "";
    document.getElementById("shippingZip").value = "";
    document.getElementById("shippingPhone").value = "";
}
function get_cart_array() {
    var cart = new shopping_cart("jadrn002");
    var cartArray = cart.getCartArray();
    var array = []
    for (var i = 0; i < cartArray.length; i++) {
        array[i] = get_cart_details(cartArray[i][0],cartArray[i][1]);
    } 
    return array;
}

function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }    
    var items = get_cart_array();   
    updateCartTable(items);   
    }
    
function get_cart_details(sku, qty) {
    var result={};
    for(var i=0; i < proj4_data.length; i++) {
        if(proj4_data[i][0] == sku) {
            result['sku'] = sku;
            result['title'] = proj4_data[i][2];            
            result['retail'] = proj4_data[i][6];
            result['qty'] = qty;
        }
    }
    return result;
}        
    
    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
	tempArray=new Array(1);
	var Count=0;
	var tempString=new String(item);

	while (tempString.indexOf(delimiter)>0) {
	tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
	tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
	Count=Count+1
	}

	tempArray[Count]=tempString;
	return tempArray;
} 


