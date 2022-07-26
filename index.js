const canvas = new fabric.Canvas("canvas", {
  width: 1000,
  height: 500,
  selection: false,
});

// uploading image function
const upload = function () {
  let input = document.getElementById("input");
  input.addEventListener("change", addingimage);
};
const addingimage = function () {
  let userimage = document.querySelector("input[type=file]").files[0];
  
    fabric.Image.fromURL(URL.createObjectURL(userimage), (image) => {

      image.scaleToHeight(500);
      image.scaleToWidth(500);
      image.top = 230;
      image.left = 500;
      image.originX = "center";
      image.originY = "center";
      image.selectable = false;
  
      canvas.add(image);
    });
 
};
let array = [];

// logic to set image to its previous location
canvas.on("mouse:wheel", function (e) {
  let shift = e.e.deltaY;
  let currzoom = canvas.getZoom();
  let zoom = currzoom * Math.pow(0.9995,shift);
  let point = this.viewportTransform;

  if (zoom >= currzoom) {
    zoom = zoom < 1 ? 1 : zoom;
    array.push(point);
    canvas.zoomToPoint({ x: e.e.offsetX, y: e.e.offsetY }, zoom);
  } else {
    zoom = zoom > 100 ? 100 : zoom;
    if (array.length > 0) {
      let prev = array[array.length - 1];
      array.pop();
      canvas.setViewportTransform(prev);
    }
  }
});

