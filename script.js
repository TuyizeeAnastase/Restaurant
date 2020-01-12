//e02919422c4e24987383f235c47bdb49




$(document).ready(function()
    {
       $("#getCity").on("click",function(){
        var valueCity=$('#getText').val();
        
        
        select();
       })
        
    });
 
function select(){
    var valueCity=$('#getText').val()
    var search="&q=" +valueCity;
    var settings={
        "async":true,
        "crossDomain":true,
        "url":"https://developers.zomato.com/api/v2.1/search?entity_type=city"+ search + "&start=0&count=10",
        "method":"GET",
       "headers":{
        "content-type":'application/json',
        "user-key": 'e02919422c4e24987383f235c47bdb49'
        
    }
}
$.getJSON(settings,function(data){
    data=data.restaurants;
    $.each(data,function(index,value){
        var x=data[index];
        console.log(x);
     $.each(x,function(index,value){
         var name=x.restaurant.name;
         var location=x.restaurant.location.address;
         var Rid=x.restaurant.id;
         
        
   
         
         $('.output').append('<h2 class="name"><a href="index.hml">'+ name +'</a></h2><h2 class="location">'+ location +'</h2><button id="check"  style="text-align:center; background:#fff;text-transform:uppercase;font-family:Arial, sans-serif; color:#black; margin-left:500px" >Check Menu</button>');
        
     $(document).ready(function()
    {
       $("#check").on("click",function(){
        
        
       
          var details=x.restaurant.location.address;
           var time=x.restaurant.timings;
           var menu=x.restaurant.cuisines;
           var reviews=x.restaurant.highlights;
           var phone=x.restaurant.phone_numbers;
  
        var allproducts=x.restaurant;

        var  products=allproducts.find(products=>products.id===Rid);
        
        console.log(products.phone);
      
       })
     
    });
             
    })

     

    })
   
}
)
}

