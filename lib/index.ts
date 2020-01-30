function init(){

    let canvas = getCanvas();
    let context = getContext();

    // define canvas sizes (px)
    canvas.width = 640;
    canvas.height = 480;

    /* LINE */
    // create new path (vecto)
    context.beginPath();
    context.lineWidth = 4;
    // draw line from x, y (px) to x, y
    context.moveTo(10,10);
    context.lineTo(10,100);
    context.strokeStyle = "#00FF00";
    // close path and execute it
    context.stroke();

    /* CIRCLE */
    context.beginPath();
    context.fillStyle = "red";
    context.moveTo(80, 60);
    context.arc(80, 60, 50, 0, 360 * Math.PI / 180, false);
    context.fill();

    /* RECTANGLE */

    context.beginPath();
    context.fillStyle = "blue";
    context.fillRect(160, 30, 100, 40);
    context.fill();

    /*
    * Retourne le contexte d'éxécution 2d du canvas
    */
    function getContext(){
        return canvas.getContext("2d");
    }
    /*
    * Retourne une référence à l'objet canvas crée à l'aide de la balise 
    * placée dans le code html
    */
    function getCanvas(){
        return document.querySelector("canvas"); 
    }
}

window.addEventListener('load', init);