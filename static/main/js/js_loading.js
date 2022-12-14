var canvas          =   document.getElementById('loading_canvas');//Отримує канвас, в якому будуть проводиться всі операції

//розгоратє канвас на весь розмір елемента, в якому він є
canvas.width        =   980;
canvas.height       =   900;
canvas.style.width  =   '150px';
canvas.style.height =   '150px';

var contex          =    canvas.getContext('2d');
//Добавити градієнт. останні параментри це x,y позиції початку та кінця градієнта
var gradient        =    contex.createLinearGradient(0, 0, 1100, 0);
//Тут просто потрібно прописувати кольори, які будуть малюватись в градієнті з переходами
gradient.addColorStop('0','rgb(0, 35, 25)');
gradient.addColorStop('1','rgb(0,0,0)');

//Заливає весь фон канваса білим
// function clear(){
//   contex.fillStyle = 'white';
//   contex.fillRect(0,0,canvas.width,canvas.height);
//   contex.beginPath();
//   count = 0;
// }

function drawLine(_color, _cords, _lineWidth){
  contex.lineWidth                      = _lineWidth;//Встановлює ширину лінії
  contex.lineTo(_cords[0], _cords[1]);//Малює лінію до координатів з попередньої точки
  contex.lineCap                        = 'round';//Робить заокруглене закінчення лінії
  contex.lineJoin                       = 'round';//Робить зглажене зєднання лінії
  contex.strokeStyle                    = _color;//Встановлює колір лінії
  contex.stroke();//малює


  contex.beginPath();//Скидає минулу точку
  contex.moveTo(cords[count][0], cords[count][1]);//Проводить лінії
}

var loading_interval;//Присвоюється інтервал, яким малюється елемент загрузки
function active_loading() {
	var
  	clear   = false; //Стирати намальоване чи не стирати
  	cords   = [
  		[
  			329,
  			544
  		],
  		[
  			344,
  			539
  		],
  		[
  			358,
  			532
  		],
  		[
  			372,
  			523
  		],
  		[
  			385,
  			514
  		],
  		[
  			397,
  			504
  		],
  		[
  			410,
  			493
  		],
  		[
  			421,
  			483
  		],
  		[
  			431,
  			471
  		],
  		[
  			440,
  			459
  		],
  		[
  			450,
  			446
  		],
  		[
  			458,
  			434
  		],
  		[
  			467,
  			420
  		],
  		[
  			475,
  			403
  		],
  		[
  			482,
  			386
  		],
  		[
  			487,
  			370
  		],
  		[
  			492,
  			351
  		],
  		[
  			495,
  			331
  		],
  		[
  			497,
  			313
  		],
  		[
  			498,
  			292
  		],
  		[
  			497,
  			273
  		],
  		[
  			496,
  			254
  		],
  		[
  			493,
  			235
  		],
  		[
  			487,
  			218
  		],
  		[
  			481,
  			202
  		],
  		[
  			472,
  			186
  		],
  		[
  			462,
  			172
  		],
  		[
  			450,
  			159
  		],
  		[
  			435,
  			146
  		],
  		[
  			416,
  			134
  		],
  		[
  			395,
  			124
  		],
  		[
  			374,
  			118
  		],
  		[
  			354,
  			114
  		],
  		[
  			336,
  			112
  		],
  		[
  			318,
  			112
  		],
  		[
  			299,
  			114
  		],
  		[
  			281,
  			118
  		],
  		[
  			264,
  			123
  		],
  		[
  			248,
  			130
  		],
  		[
  			234,
  			138
  		],
  		[
  			220,
  			147
  		],
  		[
  			207,
  			158
  		],
  		[
  			195,
  			170
  		],
  		[
  			186,
  			183
  		],
  		[
  			177,
  			197
  		],
  		[
  			171,
  			212
  		],
  		[
  			166,
  			228
  		],
  		[
  			162,
  			243
  		],
  		[
  			160,
  			258
  		],
  		[
  			158,
  			274
  		],
  		[
  			158,
  			291
  		],
  		[
  			158,
  			306
  		],
  		[
  			159,
  			321
  		],
  		[
  			162,
  			337
  		],
  		[
  			165,
  			351
  		],
  		[
  			168,
  			365
  		],
  		[
  			172,
  			379
  		],
  		[
  			178,
  			395
  		],
  		[
  			184,
  			408
  		],
  		[
  			191,
  			423
  		],
  		[
  			199,
  			437
  		],
  		[
  			207,
  			448
  		],
  		[
  			217,
  			461
  		],
  		[
  			226,
  			474
  		],
  		[
  			238,
  			486
  		],
  		[
  			249,
  			497
  		],
  		[
  			262,
  			508
  		],
  		[
  			275,
  			517
  		],
  		[
  			287,
  			526
  		],
  		[
  			300,
  			533
  		],
  		[
  			313,
  			540
  		],
  		[
  			329,
  			543
  		],
  		[-1, -1],
  		[
  			348,
  			427
  		],
  		[
  			345,
  			412
  		],
  		[
  			345,
  			392
  		],
  		[
  			348,
  			374
  		],
  		[
  			355,
  			357
  		],
  		[
  			364,
  			343
  		],
  		[
  			377,
  			327
  		],
  		[
  			392,
  			316
  		],
  		[
  			410,
  			307
  		],
  		[
  			429,
  			302
  		],
  		[
  			447,
  			301
  		],
  		[
  			467,
  			305
  		],
  		[
  			471,
  			320
  		],
  		[
  			471,
  			340
  		],
  		[
  			469,
  			356
  		],
  		[
  			464,
  			371
  		],
  		[
  			456,
  			386
  		],
  		[
  			445,
  			399
  		],
  		[
  			433,
  			410
  		],
  		[
  			419,
  			421
  		],
  		[
  			400,
  			428
  		],
  		[
  			384,
  			431
  		],
  		[
  			364,
  			431
  		],
  		[
  			347,
  			426
  		],
  		[-1, -1],
  		[
  			308,
  			427
  		],
  		[
  			311,
  			410
  		],
  		[
  			311,
  			391
  		],
  		[
  			306,
  			371
  		],
  		[
  			300,
  			355
  		],
  		[
  			290,
  			341
  		],
  		[
  			279,
  			328
  		],
  		[
  			264,
  			317
  		],
  		[
  			247,
  			309
  		],
  		[
  			229,
  			304
  		],
  		[
  			207,
  			302
  		],
  		[
  			189,
  			306
  		],
  		[
  			184,
  			323
  		],
  		[
  			184,
  			340
  		],
  		[
  			186,
  			355
  		],
  		[
  			191,
  			371
  		],
  		[
  			200,
  			386
  		],
  		[
  			210,
  			399
  		],
  		[
  			222,
  			412
  		],
  		[
  			239,
  			422
  		],
  		[
  			256,
  			428
  		],
  		[
  			274,
  			431
  		],
  		[
  			291,
  			431
  		],
  		[
  			307,
  			427
  		],
  		[-1, -1]
  	]; //Координати, по яких відбувається малювання
  	count            = 0; //Номер елемента із списка координатів, setInterval його контролює
  	//
  	loading_interval = setInterval(function() {
      //
  		if (count >= cords.length) { //
  			clear = !clear;
  			count = 0;
  		}
      //
  		if (cords[count][0] == -1) {
  			contex.beginPath();
  			count += 1;
  		} else {
        //
  			if (count >= cords.length) {
  				clear = !clear;
  				count = 0;
  			} else {
          //Якщо потрібно замальовувати або стирати лінію
  				if (!clear) {
  					drawLine(gradient, [cords[count][0], cords[count][1]], 15); //Передає параметри для малювання лінії
  				} else {
  					drawLine('white', [cords[count][0], cords[count][1]], 17); //Передає параметри для малювання лінії
  				}
  				count += 1;
  			}
  		}
  	}, 2);
}

function stop_loading(){
  //
  clearInterval(loading_interval);
  var loading_el = document.getElementById('loading_el');
  loading_el.style.display = 'none';
}


// //При нажиманні мишки - ставить точку на канвасі та записує координати
// //Потім виводить список записаних координат, щоб їх можна було скопіювати та відтворити.
// var cords = []//Тимчасовий список, в який добавляються координати пілся натискання
// document.addEventListener("mousedown", function(e) {
  // cords.push([e.offsetX,e.offsetY])//Добалвяє поставлені координати нажимання в список
  // contex.beginPath();//Скидує минулу позицію точки
  // contex.arc(e.offsetX, e.offsetY,6,0, Math.PI * 2);//Встановлює параметри точки
  // contex.fillStyle = 'black';//Встановлює колір заливки
  // contex.fill();//Відбувається заливка точки
// });
  $( document ).ready(function() {
      setTimeout(() => {
          stop_loading();
      },1500)
  });

active_loading();