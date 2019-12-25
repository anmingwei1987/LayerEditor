const LayerEditor = function(){
	let panel;
	let canvas;
	this.render = function(param){
		panel = document.getElementById(param.id);
		canvas = document.createElement('div');
		canvas.id = 'editor-canvas';
		canvas.style.width = param.width;
		canvas.style.height = param.height;
		panel.innerHTML = canvas.outerHTML;
		console.log(panel);
	}
	this.zoom = function(){

	}
}

