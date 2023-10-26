const hero_content = document.querySelector(".hero_content");
const slider_btn_left = document.querySelector(".slider_btn_left");
const slider_btn_right = document.querySelector(".slider_btn_right");

const slider_images = [
  "./images/hero_image.jpg",
  "./images/hero_image2.jpg",
  "./images/hero_image3.jpg",
  "./images/hero_image4.jpg",
  "./images/hero_image5.jpg",
];
let i = 0;

const hero_scroll = (direction) => {
  if (direction == "left") {
    if (i == 0) {
      i = slider_images.length - 1;
    } else {
      i = i - 1;
    }
  } else if (direction == "right") {
    if (i == slider_images.length - 1) {
      i = 0;
    } else {
      i = i + 1;
    }
  }
  hero_content.style.background = `url(${slider_images[i]}) center no-repeat`;
  hero_content.style.backgroundSize = "cover";
  hero_content.style.transition = "1s";
};

slider_btn_left.addEventListener("click", () => {
  hero_scroll("left");
});

slider_btn_right.addEventListener("click", () => {
  hero_scroll("right");
});
setInterval(() => {
  slider_btn_right.click();
}, 6000);


const slider2_images=document.querySelector('.slider2_images');
const imgs=slider2_images.getElementsByTagName('img')
const slider_btn_left2 = document.querySelector(".slider_btn_left2");
const slider_btn_right2 = document.querySelector(".slider_btn_right2");
const imgs_Array= Array.from(imgs);
slider_btn_left2.addEventListener('click',()=>{

    slider2_images.scrollBy({ left: -500, behavior: 'smooth' });
  
    
})

slider_btn_right2.addEventListener('click',()=>{  
    slider2_images.scrollBy({ left: 500, behavior: 'smooth' });   
})