import Image from "next/image"

const imagenes = [
    {
        title:"img1",
        src: "https://i.ibb.co/52RtdB6/SDXL-09-slanted-eyes-anna-pavaga-face-ultra-detailed-face-ultr-0-2.jpg",
        alt:"fotito1"
    },
    {
        title:"img2",
        src: "https://i.ibb.co/bmy3bzw/dd6809e4-558e-4ef6-ad38-54f86a80a10f.png",
        alt:"fotito2"
    },
    {
        title:"img3",
        src: "https://i.ibb.co/6sDz2Pq/ca15c56f-b972-4bc4-bebf-f30e8cb6ddcf.png",
        alt:"fotito3"
    },
    {
        title:"img4",
        src: "https://i.ibb.co/nmNWQZs/SDXL-09-ultra-white-pale-skin-face-sprayed-with-milk-extreme-b-0-4.jpg",
        alt:"fotito4"
    },
    {
        title:"img5",
        src: "https://i.ibb.co/R0L3BqL/1e388ed5-b935-4880-8f7d-f5caa986a855.png",
        alt:"fotito5"
    },
    {
        title:"img6",
        src: "https://i.ibb.co/SVgrwfr/Leonardo-Vision-XL-slanted-eyes-anna-pavaga-face-ultra-detaile-3-22.jpg",
        alt:"fotito5"
    },
    {
        title:"img7",
        src: "https://i.ibb.co/XYBPPS4/Leonardo-Vision-XL-slanted-eyes-anna-pavaga-face-ultra-detaile-3-21.jpg",
        alt:"fotito5"
    },
    {
        title:"img8",
        src: "https://i.ibb.co/GR2KYhk/image-58.png",
        alt:"fotito5"
    },
    {
        title:"img9",
        src: "https://i.ibb.co/GWSS2Pb/Leonardo-Vision-XL-slanted-eyes-anna-pavaga-face-ultra-detaile-3-20.jpg",
        alt:"fotito5"
    },
    {
        title:"img10",
        src: "https://i.ibb.co/ZgGzG6V/Leonardo-Vision-XL-slanted-eyes-anna-pavaga-face-ultra-detaile-2-20.jpg",
        alt:"fotito5"
    },
    {
        title:"img11",
        src: "https://i.ibb.co/DpQHzT2/Leonardo-Vision-XL-extreme-big-lips-hair-up-and-a-bow-on-her-n-0-6.jpg",
        alt:"fotito5"
    },
    {
        title:"img12",
        src: "https://i.ibb.co/LgVqx0x/image-54.png",
        alt:"fotito5"
    },
    {
        title:"img13",
        src: "https://i.ibb.co/S5yy5Jz/534eryeyyye.png",
        alt:"fotito5"
    },
    {
        title:"img14",
        src: "https://i.ibb.co/jbX1TND/Leonardo-Vision-XL-ultra-detailed-face-ultra-white-pale-skin-u-1.jpg",
        alt:"fotito5"
    },
    {
        title:"img15",
        src: "https://i.ibb.co/Y7q24VT/Leonardo-Vision-XL-slanted-eyes-anna-pavaga-face-ultra-detaile-1-12.jpg",
        alt:"fotito5"
    },
    {
        title:"img16",
        src: "https://i.ibb.co/xXkSTRy/Leonardo-Vision-XL-slanted-eyes-anna-pavaga-face-ultra-detaile-1-8.jpg",
        alt:"fotito5"
    },
    {
        title:"img17",
        src: "https://i.ibb.co/n3n75LW/Leonardo-Vision-XL-slanted-eyes-anna-pavaga-face-ultra-detaile-1-3.jpg",
        alt:"fotito5"
    },
    {
        title:"img18",
        src: "https://i.ibb.co/23wxQFT/Leonardo-Vision-XL-slanted-eyes-anna-pavaga-face-ultra-detaile-0.jpg",
        alt:"fotito5"
    },
    {
        title:"img18",
        src: "https://i.ibb.co/cwdWN73/Leonardo-Vision-XL-ultra-detailed-face-ultra-white-pale-skin-u-2-7.jpg",
        alt:"fotito5"
    },
    {
        title:"img18",
        src: "https://i.ibb.co/hRR912V/Leonardo-Vision-XL-ultra-detailed-face-ultra-white-pale-skin-u-1-2.jpg",
        alt:"fotito5"
    },
    {
        title:"img18",
        src: "https://i.ibb.co/VWMRw6V/Leonardo-Vision-XL-white-pale-skin-extreme-big-lips-beautiful-1-11.jpg",
        alt:"fotito5"
    },
    {
        title:"img18",
        src: "https://i.ibb.co/rdsZVPT/Leonardo-Vision-XL-extreme-big-lips12-years-old-blonde-balenci-0-13.jpg",
        alt:"fotito5"
    },
]

const Foto4 = () => {
    return (
        <div className=" w-full flex flex-col gap-4 justify-center items-center">
            {imagenes.map(imagen =>(
                <div key={imagen.title}>
                <Image src={imagen.src} width={1000} height={1000} />
                </div>
            ))}
        </div>
    )
}

export default Foto4;