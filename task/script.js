		// Don't forget chrome.storage.sync is permanent storage API, Use chrome.storage.sync.clear before any further testing to see changes
window.onload = function() { 
	document.getElementById('save').onclick = function(){
		var value1 = document.getElementById('saveLine1').value;
		var value2 = document.getElementById('saveLine2').value;
		var value3 = document.getElementById('saveLine3').value;
		var value4 = document.getElementById('saveLine4').value;

		//alert(value);
		chrome.storage.sync.set({'myLine': [value1, value2, value3, value4]}, function() {
			alert('Success!');
		});
	};

	document.getElementById('get').onclick = function(){
		chrome.storage.sync.get('myLine', function(data){
		//alert('insdie');
		//var i;
		//for(i=0;i<4;i++){
			alert(data.myLine);
			//alert(data.myLine);
			//alert(data.myLine);
			//alert(data.myLine);
				

		//}
		});
	}

	document.getElementById('clear').onclick = function(){
		chrome.storage.sync.clear();
	}
}