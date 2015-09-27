$(document).ready(function(){
		
		var gridMaker =  function(){
			var gridNum = prompt("Please enter a number between 1 & 64");
			if(gridNum>=1 && gridNum <=64){
				var bheight = 100/gridNum;
				var bwidth = 100/gridNum;
			

				var styles = {
				
				height: bheight + '%',
				width: bwidth + '%'
				
				};
			
				for(var i=1; i<=gridNum; i++)
				{
					for(var j=1; j<=gridNum; j++)
					{
					$(".grid").append('<div class="box"></div>');
						if(j==gridNum){
							$(".grid").append('<div class="clearfloat"></div>');
						}
					}
				}
				$(".box").css(styles);
			}
			else{
				gridMaker();
			}
		};
		var colorHover = function() {
		
			$(".box").hover(function(){
			$(this).css("background-color","red");
			});
		
		
		}
		gridMaker();
		colorHover();
	
	$("#simple").click(function(){
		$(".grid").empty();
		gridMaker();
		colorHover();

    });
	
	
	$("#reset").click(function(){
		
		$(".box").css("background-color","rgba(255,255,255,1)");
	
	});
	
	
	$('#newGrid').click(function(){
		$(".grid").empty();
		gridMaker();
		colorHover();
	});
	
	
	$('#random').click(function(){
		$(".grid").empty();
		gridMaker();
		$(".box").hover(function(){
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).css("background-color",hue);
		});
	
	}); 
	
	$('#shade').click(function(){
		$(".grid").empty();
		gridMaker();
		$(".box").css("background-color","black").css("border-color","white");
		$(".box").hover(function(){
		
		var opacityNow = $(this).css('opacity');
		if(opacityNow > 0)
		$(this).css('opacity',opacityNow - 0.1);
		});
	
	}); 
	
		$('#trail').click(function(){
		$(".grid").empty();
		gridMaker();
		$(".box").css("background-color","#000000")
				 .css("border-color","#FFFFFF")
		;
		$(".box").mouseenter(function(){
			$(this).fadeTo("fast",0);
		});
		$(".box").mouseleave(function(){
		$(this).fadeTo("slow",1)
		});
	
	}); 
		
			
	
	});
	
	
	