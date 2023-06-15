const image1 = "https://i.ibb.co/0Yjg5Sv/hellokittyairpods.png";
const image2 = "https://i.ibb.co/283KhGP/hellokittyplayer.png";
const image3 = "https://i.ibb.co/hy9hcTD/hellokittyglasses.png";
const image4 = "https://i.ibb.co/RSW99Yg/hellokityymic.png";
const image5 = "https://i.ibb.co/qsg1PRg/hellokitty-joystick.png";

export const images = [image1, image2, image3, image4, image5];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;