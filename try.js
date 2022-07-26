// const setimage = (url, canvas) => {
//     fabric.Image.fromURL(url, (image) => {
//       canvas.backgroundImage = image;
//       canvas.renderAll();
//     });
//   };
  
// const createcircle =(canvas)=>{
//     console.log("cirlce")
//     const center = canvas.getCenter()
//     const circle =new fabric.Circle({
//         radius:50,
//         fill:"orange",
//         left:center.left,
//         // cornerColor:"red"
//         // lockMovementX:false,
//         // lockMovementY:false
//         originX:'center',
//         originY:'center',
//         objectChaching:false
//     })
//    canvas.add(circle)
//    canvas.renderAll()
//    circle.animate('top',canvas.height-50, {
//     onChange: canvas.renderAll.bind(canvas),
//     onComplete :()=>{
//         circle.animate('top',center.top, {
//             onChange: canvas.renderAll.bind(canvas),
//             easing: fabric.util.ease.easeOutBounce,
//             duration :200
//         })
//   }
//  });
// }

// const addimage =(e)=>{
//     const input = document.getElementById('imgid');
//     const center = canvas.getCenter()
//     const image =  input.files[0];
 
 
//     readimage.readAsDataURL(image)
// }


// let mousepreseed=false;

// const readimage = new FileReader()
// / setimage(url,canvas)

// canvas.on("mouse:over",(e)=>{
//     console.log(e);
// })

// canvas.on("mouse:move",(event)=>{
//     if(mousepreseed){
//     const mousemove = event.e;
//     const delta = new fabric.Point(mousemove.movementX ,mousemove.movementY);
//     canvas.relativePan(delta);
//     }
// })
// canvas.on("mouse:down",(event)=>{
//      mousepreseed:true
// })
// canvas.on("mouse:up",(event)=>{
//     mousepreseed:true
// })

// const image = document.getElementById('imgid');
// image.addEventListener('change',addimage)

// readimage.addEventListener("load",()=>{
//     fabric.Image.fromURL(readimage.result,image=>{
//       image.scale(0.5).set('flipX', true)
      
//         canvas.add(image)
//         canvas.requestRenderAll()
//     })
// })
