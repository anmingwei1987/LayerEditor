const LayerEditor = function(){
	let panel;
	let canvas;
	this.render = function(param){
		
		panel = document.getElementById(param.id);
		
		let panelStyle = {
			overflow:'auto',
		}
		for(let i in panelStyle){
			panel.style[i] = panelStyle[i];
		}

		canvas = document.createElement('div');
		canvas.id = 'editor-canvas';
		canvas.style.width = param.width;
		canvas.style.height = param.height;
		canvas.style.display = 'inline-block';
		canvas.style.backgroundColor = '#fff';

		let panelRect = panel.getBoundingClientRect();
		let canvasRect = canvas.getBoundingClientRect();
		console.log(panelRect.height);
		console.log(panelRect.height/10);
		let paddingY = panelRect.height - panelRect.height/10;

		let layout = document.createElement('div');
		let layoutStyle = {
			display:'flex',
			justifyContent:'center',
			alignItems:'center',
			backgroundColor:'#ccc',
			minWidth:'100%',
			minHeight:'100%',
			boxSizing:'border-box',
			paddingTop:paddingY,
			paddingBottom:paddingY
		}
		for(let i in layoutStyle){
			layout.style[i] = layoutStyle[i];
		}
		layout.id = 'editor-canvas-box';
		layout.append(canvas);

		panel.innerHTML = layout.outerHTML;
		
		
		console.log(panel);
	}
	this.zoom = function(){

	}
}

