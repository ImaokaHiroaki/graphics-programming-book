import {Canvas2dUtility} from './canvas2d';
import {Position} from './character';import {Character} from './character';

const CANVAS_WIDTH: number = 640;
const CANVAS_HEIGHT: number = 480;
let canvas: HTMLCanvasElement; //canvas DOMの要素を取得できる
let ctx: CanvasRenderingContext2D; //canvasレンダリングコンテクストのメソッドが使用できる
let util: Canvas2dUtility; //canvas2d.ts で記述した自作classが使用できるインスタンス
let startTime: number; //開始時間

let ViporX: number;
let ViporY: number;
let ViporWidth: number;
let ViporHeight: number;
let ViporSpeed: number;

let Vipor: Character;
let ViporPos: Position;


window.addEventListener('load', () => {

    const mainCanvas : HTMLCanvasElement | null = document.body.querySelector('#main_canvas');
    if (!mainCanvas) {  
        throw new Error('#main_canvasが取得できません');  
    }
    
    util = new Canvas2dUtility(mainCanvas);
    canvas = util.canvas;
    ctx = util.context;

    initialize();
    eventSetting();
    render();

}, false);

function initialize() {
    // canvas の大きさを設定
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    ViporWidth = 20;
    ViporHeight = 30;
    ViporX = CANVAS_WIDTH/2 - ViporWidth/2; 
    ViporY = CANVAS_HEIGHT/2 - ViporHeight/2;
    ViporSpeed = 10;
    startTime = Date.now();
    ViporPos = new Position(ViporX,ViporY);
    Vipor = new Character(util,ViporPos.x,ViporPos.y,10);
}

function render() {
    // 描画前に画面全体を塗りつぶす
    util.drawRect(0, 0, canvas.width, canvas.height, '#fff');

    let nowTime: number = (Date.now() - startTime) / 1000;

    Vipor.position.set(ViporX, ViporY);
    Vipor.draw();

    requestAnimationFrame(render); //ループ宣言
}

function eventSetting() {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowLeft':
                ViporX -= 1 * ViporSpeed;
                break;
            case 'ArrowRight':
                ViporX += 1 * ViporSpeed;
                break;
            case 'ArrowUp':
                ViporY -= 1 * ViporSpeed;
                break;
            case 'ArrowDown':
                ViporY += 1 * ViporSpeed;
                break;
        }
    }, false);
}