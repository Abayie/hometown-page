var image;


image = ['https://img.freepik.com/premium-photo/roasted-turkey-thanksgiving-table-setting-concept_53876-44648.jpg?semt=ais_hybrid', 'https://img.freepik.com/premium-photo/roasted-turkey-thanksgiving-table-setting-concept_53876-44648.jpg?semt=ais_hybrid', 'https://img.freepik.com/free-photo/thanksgiving-celebration-with-traditional-elements_23-2151885358.jpg?semt=ais_hybrid'];
let element_gallery = document.getElementById('gallery');
element_gallery.setAttribute("src", image[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_gallery2 = document.getElementById('gallery');
  image.push(image.shift());
  element_gallery2.setAttribute("src", image.slice(-1)[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_gallery3 = document.getElementById('gallery');
  image.unshift(image.pop());
  element_gallery3.setAttribute("src", image[0]);

});