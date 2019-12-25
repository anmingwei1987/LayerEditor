const LayerEditor = function(){
	
	let panel;
	let canvas;
	let renderParam;
	this.render = function(param){
		renderParam = param;
		let panel = document.getElementById(param.id);
		let panelRect = panel.getBoundingClientRect();
		panel.style.overflow = 'hidden';

		canvas = document.createElement('div');
		canvas.id = 'editor-canvas';
		canvas.style.width = param.width;
		canvas.style.height = param.height;
		canvas.style.display = 'inline-block';
		canvas.style.backgroundColor = '#fff';

		let paddingX = panelRect.width*0.1 > param.width*0.1 ? panelRect.width - param.width*0.1 : panelRect.width*0.9;
		let paddingY = panelRect.height*0.1 > param.height*0.1 ? panelRect.height - param.height*0.1 : panelRect.height*0.9;

		let box = document.createElement('div');
		let boxStyle = {
			display:'inline-flex',
			justifyContent:'center',
			alignItems:'center',
			backgroundColor:'#ccc',
			minWidth:'100%',
			minHeight:'100%',
			boxSizing:'border-box',
			paddingLeft:paddingX,
			paddingRight:paddingX,
			paddingTop:paddingY,
			paddingBottom:paddingY
		}
		for(let i in boxStyle){
			box.style[i] = boxStyle[i];
		}
		box.id = 'editor-canvas-box';
		box.append(canvas);

		let scroll = document.createElement('div');
		scroll.id = 'editor-canvas-scroll';
		scroll.style.width = 'calc(100% + 20px)';
		scroll.style.height = 'calc(100% + 20px)';
		scroll.style.overflow = 'auto';
		scroll.append(box);
		
		panel.innerHTML = scroll.outerHTML;

		let boxRect = document.getElementById('editor-canvas-box').getBoundingClientRect();
		scroll = document.getElementById('editor-canvas-scroll');
		scroll.scrollTop = (boxRect.height - panelRect.height)/2;
		scroll.scrollLeft = (boxRect.width - panelRect.width)/2;

	}

	let render = this.render;

	window.addEventListener('resize',function(){
		render(renderParam);
	});

	document.addEventListener('mousedown',function(e){
		console.log(e);
	});
	

	this.zoom = function(){

	}
}

