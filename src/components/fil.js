

export const files = 
    [{
       id:1,
       marca:"Dodge",
       modelo:"Journey",
       foto: "./assets/img/auto1.png",
       estado:"Excelente, se exhibe sin detalles y gomas nuevas.",
       categoria:"camionetas"

       
    },
    {   
        id:2,
        marca:"Mercedez",
        modelo:"Clc 250",
        foto:"./assets/img/auto2.png",
        estado:"Excelente, se exhibe sin detalles y gomas nuevas.",
        categoria:"autos"
    },
    {
        id:3,
        marca:"Volkswagen",
        modelo:"Passat",
        foto:"./assets/img/auto3.png",
        estado:"Excelente, se exhibe sin detalles y gomas nuevas.",
        categoria:"autos"
    },
    {
        id:4,
        marca:"Toyota",
        modelo:"Hilux",
        foto:"./assets/img/auto4.png",
        estado:"Excelente, se exhibe sin detalles y gomas nuevas.",
        categoria:"camionetas"
    }]

const getFetch = new Promise((res) =>{
  
    setTimeout(()=>{
                res(files)}
               ,2000);
    })
export default getFetch;