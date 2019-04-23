
 
    $("#add").click(function(){
          
            var markup = 
			'<tr><td><input type="checkbox" name="record" class="record" ></td><td><input type="text" name="item_name[]" class="item_name" /></td><td><input type="number" name="qty" class="qty" /></td><td><input type="number" name="price" class="price" /></td></tr>' ;
 
			$(".table2 tbody").append(markup);
			});

 
 
			
            
		
		
		     
		
		    $("#del").click(function(){
			x=0;
			  
            $(".table2 tbody").find('input[name="record"]').each(function(){
            	
		
			if($(this).is(":checked")){
				
				
				if(Boolean($(this).is(":checked"))==true){
				
				x++;
				
				};
				
				$(this).parents("tr").remove();
			
				}
				
	
            });
			
			
			if(x==0 )
				{
				var snd= new Audio("12.mp3");				
				snd.play();	
				confirm();
				}
			 });
			
       
		
	   
			function 	confirm() 
			{
			$("#confirm").show();
			$(".yes").click(function(){
			$("#confirm").hide();
			
			});   
			
			
			}
			
			
			
		 


 
			function myFunction2()
			{
			
			$(".newp").show();
			
			
			
			var cname = document.myForm.cname.value;
			
			var no = document.myForm.no.value;
			var date2 = document.myForm.date1.value;
			
			
			$("#cname1").val(cname);
			$("#no1").val(no);
			$("#date2").val(date2);
			
			var tr ="";
			var  j;
			tt = 0;
			
			
			var record = document.getElementsByClassName("record");
			var item_name = document.getElementsByClassName("item_name");
			var qty = document.getElementsByClassName("qty");
			var price = document.getElementsByClassName("price");
			
			
			var item_names = [];
			var qtys = [];
			var prices = [];
			
			for (var i = 0; i < record.length; ++i) {
			
			tr+="<tr class = 'jstd' >";
			
			tr+="<td class = 'jstd'>"+(i+1)+"</td>";
			
			
			
			if (typeof item_name[i].value !== "undefined") {
			
			item_names.push(item_name[i].value); }
			
			
			
			if (typeof qty[i].value !== "undefined") {
			
			qtys.push(qty[i].value); }
			
			
			
			if (typeof price[i].value !== "undefined") {
			
			prices.push(price[i].value); }
			
			
  
			tr+="<td class = 'jstd'>"+item_names[i]+"</td>";
			
			
		
			tr+="<td class = 'jstd'>"+qtys[i]+"</td>";
			tr+="<td class = 'jstd'>"+prices[i]+"</td>";
			
			total = (qtys[i] * prices[i]) ;
			
			tr+="<td class = 'jstd'>"+ total +"</td>";
			
			tt+=total;
			
			tr+="</tr>";
			
			}
			
			
			
			
			
			$("#tt").val(tt);
			
			
			$("#advance").mouseleave(function(){
			var remain = document.form2.advance.value;
		
			var remaining = tt - remain ;
			$("#remaining").val(remaining);
		
			});
			
			$("#table2 tbody").append(tr).css({"border" : "1px solid black"});
			}
			
			
			
	
