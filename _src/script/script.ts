import {Canvas2dUtility} from './canvas2d';

const CANVAS_WIDTH : number = 640;
const CANVAS_HEIGHT : number = 480;
let canvas : HTMLCanvasElement;
let ctx : CanvasRenderingContext2D;
let util : Canvas2dUtility;

window.addEventListener('load', () => {
    const mainCanvas : HTMLCanvasElement | null = document.body.querySelector('#main_canvas');
    if (!mainCanvas) {  
        throw new Error('#main_canvasが取得できません');  
    }  
    util = new Canvas2dUtility(mainCanvas);
    canvas = util.canvas;
    ctx = util.context;
    initialize();
    render();
}, false);

function initialize(){
    // canvas の大きさを設定
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
}

function render(){
    // 描画前に画面全体を不透明な明るいグレーで塗りつぶす
    util.drawRect(0, 0, canvas.width, canvas.height, '#fff');
    util.drawRect(20, 50, 20, 30, '#000');
}
