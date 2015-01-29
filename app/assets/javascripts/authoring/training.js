function openModal(){
	if ($("#password").val().indexOf("pc") == 0){
		$('#pcModal').modal('show');
		$('.next').click(function(){
	  		var nextId = $(this).parents('.tab-pane').next().attr("id");
	  		if (nextId == "step10"){
	  			document.getElementById("pcCompleteBtn").disabled = false;	  		
			}
	  		$('[href=#'+nextId+']').tab('show');
    		$("#pcModal .tab-pane iframe").attr("src", $("#pcModal .tab-pane iframe").attr("src"));
		});
		$('.prev').click(function(){
			var prevId = $(this).parents('.tab-pane').prev().attr("id");
			console.log(prevId)
			$('[href=#'+prevId+']').tab('show');
			$("#pcModal .tab-pane iframe").attr("src", $("#pcModal .tab-pane iframe").attr("src"));
		});
		$('.first').click(function(){
	  		$('#pcWizard a:first').tab('show')
		});
		$("#pcModal").on('hidden.bs.modal', function (e) {
    		$("#pcModal .tab-pane iframe").attr("src", $("#pcModal .tab-pane iframe").attr("src"));
		});
	}
	else if ($("#password").val().indexOf("wo") == 0){
		$('#workerModal').modal('show');
		$('.next').click(function(){
	  		var nextId = $(this).parents('.tab-pane').next().attr("id");
	  		if (nextId == "part5"){
	  			document.getElementById("woCompleteBtn").disabled = false;	  		
			}
	  		$('[href=#'+nextId+']').tab('show');
	  		$("#workerModal .tab-pane iframe").attr("src", $("#workerModal .tab-pane iframe").attr("src"));
		});
		$('.prev').click(function(){
			var prevId = $(this).parents('.tab-pane').prev().attr("id");
			console.log(prevId)
			$('[href=#'+prevId+']').tab('show');
			$("#workerModal .tab-pane iframe").attr("src", $("#workerModal .tab-pane iframe").attr("src"));
		});
		$("#workerModal").on('hidden.bs.modal', function (e) {
    		$("#workerModal .tab-pane iframe").attr("src", $("#workerModal .tab-pane iframe").attr("src"));
		});
		$('.first').click(function(){
	  		$('#workerWizard a:first').tab('show')
		});	
	}
	else if($("#password").val() == ""){
		alert("You must enter a code to launch training");
	}
	else{
		alert("I'm sorry. The code you entered does not match our records. Please wait to recieve a code from us.");
	}
}

function showForm(){
	console.log("Hits this");
	$(".formDiv").attr("style", "display:inline");
	$("#launchDiv").attr("style", "display:none");
	document.getElementById("topText").innerHTML="Thank you for completing the training!";
}