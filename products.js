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

$(document).ready(function() {
    
    var cart = new shopping_cart("jadrn002");
    $('#count').text(cart.size());
    proj4_data = new Array();
    $.get('/perl/jadrn002/proj4/get_products.cgi', storeData);

    $('#milk').on('click', function() {      
     	tmpString = "";         
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            	 tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 
                sku = proj4_data[i][0];
				category = proj4_data[i][1];
				title = proj4_data[i][2];
				shortDesc = proj4_data[i][3];
				longDesc = proj4_data[i][4];
				retail = proj4_data[i][6];   
				tmpString += "<table><tr><td><b>ID:</b></td><td>"+sku+"</td>"+"</tr><tr><td><b>Category:</b></td><td>"
				+category+"</td></tr>"+"<tr><td><b>Made of:</b></td><td>"
				+shortDesc+"</td></tr>"+"<tr><td><b>Description:</b></td><td>"+longDesc+"</td></tr>"+
				"<tr><td><b>Price:</b></td><td>"+retail+"</td></tr></table>";
                tmpString += "<input type='button' value='Add to Cart'"+" id='"+proj4_data[i][0]+"' class='buy btn' />";
            	tmpString += "<span class='span'>Added to Cart</span><br /><br/><br/><hr/>";               
            	
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;           
        })

	$('#dark').on('click', function() {      
     	tmpString = "";         
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
            	 tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 
                sku = proj4_data[i][0];
				category = proj4_data[i][1];
				title = proj4_data[i][2];
				shortDesc = proj4_data[i][3];
				longDesc = proj4_data[i][4];
				retail = proj4_data[i][6];   
				tmpString += "<table><tr><td><b>ID:</b></td><td>"+sku+"</td>"+"</tr><tr><td><b>Category:</b></td><td>"
				+category+"</td></tr>"+"<tr><td><b>Made of:</b></td><td>"
				+shortDesc+"</td></tr>"+"<tr><td><b>Description:</b></td><td>"+longDesc+"</td></tr>"+
				"<tr><td><b>Price:</b></td><td>"+retail+"</td></tr></table>";
                tmpString += "<input type='button' value='Add to Cart' id='"+proj4_data[i][0]+"'"+ "class='buy' />";
            	tmpString += "<span>Added to Cart</span><br /><br/><br/><hr/>";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;           
        })
     
          
    $('#nuts').on('click', function() {      
     	tmpString = "";         
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {
            	 tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 
                sku = proj4_data[i][0];
				category = proj4_data[i][1];
				title = proj4_data[i][2];
				shortDesc = proj4_data[i][3];
				longDesc = proj4_data[i][4];
				retail = proj4_data[i][6];   
				tmpString += "<table><tr><td><b>ID:</b></td><td>"+sku+"</td>"+"</tr><tr><td><b>Category:</b></td><td>"
				+category+"</td></tr>"+"<tr><td><b>Made of:</b></td><td>"
				+shortDesc+"</td></tr>"+"<tr><td><b>Description:</b></td><td>"+longDesc+"</td></tr>"+
				"<tr><td><b>Price:</b></td><td>"+retail+"</td></tr></table>";
                 tmpString += "<input type='button' value='Add to Cart' id='"+proj4_data[i][0]+"'"+ "class='buy' />";
            	tmpString += "<span>Added to Cart</span><br /><br/><br/><hr/>";                   
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;           
        })
        
    $('#brittle').on('click', function() {      
     	tmpString = "";         
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            	 tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 
                sku = proj4_data[i][0];
				category = proj4_data[i][1];
				title = proj4_data[i][2];
				shortDesc = proj4_data[i][3];
				longDesc = proj4_data[i][4];
				retail = proj4_data[i][6];   
				tmpString += "<table><tr><td><b>ID:</b></td><td>"+sku+"</td>"+"</tr><tr><td><b>Category:</b></td><td>"
				+category+"</td></tr>"+"<tr><td><b>Made of:</b></td><td>"
				+shortDesc+"</td></tr>"+"<tr><td><b>Description:</b></td><td>"+longDesc+"</td></tr>"+
				"<tr><td><b>Price:</b></td><td>"+retail+"</td></tr></table>";
                tmpString += "<input type='button' value='Add to Cart' id='"+proj4_data[i][0]+"'"+ "class='buy' />";
            	tmpString += "<span>Added to Cart</span><br /><br/><br/><hr/>";                 
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;           
        })

		$('#truffle').on('click', function() {      
     	tmpString = "";         
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
            	 tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 
                sku = proj4_data[i][0];
				category = proj4_data[i][1];
				title = proj4_data[i][2];
				shortDesc = proj4_data[i][3];
				longDesc = proj4_data[i][4];
				retail = proj4_data[i][6];   
				tmpString += "<table><tr><td><b>ID:</b></td><td>"+sku+"</td>"+"</tr><tr><td><b>Category:</b></td><td>"
				+category+"</td></tr>"+"<tr><td><b>Made of:</b></td><td>"
				+shortDesc+"</td></tr>"+"<tr><td><b>Description:</b></td><td>"+longDesc+"</td></tr>"+
				"<tr><td><b>Price:</b></td><td>"+retail+"</td></tr></table>";
                 tmpString += "<input type='button' value='Add to Cart' id='"+proj4_data[i][0]+"'"+ "class='buy' />";
            	tmpString += "<span>Added to Cart</span><br /><br/><br/><hr/>";                   
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;           
        })
		$('#gift').on('click', function() {      
     	tmpString = "";         
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            	 tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 
                sku = proj4_data[i][0];
				category = proj4_data[i][1];
				title = proj4_data[i][2];
				shortDesc = proj4_data[i][3];
				longDesc = proj4_data[i][4];
				retail = proj4_data[i][6];   
				tmpString += "<table><tr><td><b>ID:</b></td><td>"+sku+"</td>"+"</tr><tr><td><b>Category:</b></td><td>"
				+category+"</td></tr>"+"<tr><td><b>Made of:</b></td><td>"
				+shortDesc+"</td></tr>"+"<tr><td><b>Description:</b></td><td>"+longDesc+"</td></tr>"+
				"<tr><td><b>Price:</b></td><td>"+retail+"</td></tr></table>";
               tmpString += "<input type='button' value='Add to Cart' id='"+proj4_data[i][0]+"'"+ "class='buy' />";
            	tmpString += "<span>Added to Cart</span><br /><br/><br/><hr/>";                  
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;           
        })

		$('#assortment').on('click', function() {      
     	tmpString = "";         
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            	 tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 
                sku = proj4_data[i][0];
				category = proj4_data[i][1];
				title = proj4_data[i][2];
				shortDesc = proj4_data[i][3];
				longDesc = proj4_data[i][4];
				retail = proj4_data[i][6];   
				tmpString += "<table><tr><td><b>ID:</b></td><td>"+sku+"</td>"+"</tr><tr><td><b>Category:</b></td><td>"
				+category+"</td></tr>"+"<tr><td><b>Made of:</b></td><td>"
				+shortDesc+"</td></tr>"+"<tr><td><b>Description:</b></td><td>"+longDesc+"</td></tr>"+
				"<tr><td><b>Price:</b></td><td>"+retail+"</td></tr></table>";
                tmpString += "<input type='button' value='Add to Cart' id='"+proj4_data[i][0]+"'"+ "class='buy' />";
            	tmpString += "<span>Added to Cart</span><br /><br/><br/><hr/>";                    
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;           
        })

    $(document).on('click', ".buy", function() {  
        var sku = this.id;        
        cart.add(sku, 1);     
        $(this).next().fadeIn(50).fadeOut(2000);
        $('#count').text(cart.size());     
        });                              
    });    

    
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
       
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
