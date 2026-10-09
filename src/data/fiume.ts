import city from '@/assets/H-i301.jpg.asset.json';
import hero from '@/assets/H-i303.jpg.asset.json';
import rijeka from '@/assets/H-i302.jpg.asset.json';
import van from '@/assets/kombi2.jpg.asset.json';
import transfer from '@/assets/skoda-superb-2.jpg.asset.json';
import rental from '@/assets/slike-kombija.jpg.asset.json';
import interior from '@/assets/03-full.jpg.asset.json';
import small from '@/assets/up.jpg.asset.json';
import rear from '@/assets/01-full.jpg.asset.json';
import logo from '@/assets/taxi-fiume.svg.asset.json';
import whiteLogo from '@/assets/taxi-fiume-white.svg.asset.json';
import play from '@/assets/image-1.png.asset.json';
import apple from '@/assets/image-2.png.asset.json';
import pricePdf from '@/assets/Cjenik_usluga.pdf.asset.json';
export const assets = {city,hero,rijeka,van,transfer,rental,interior,small,rear,logo,whiteLogo,play,apple,pricePdf};
export const contact = {phone:'051 515 515',tel:'tel:+38551515515',email:'taxi.fiume051@gmail.com',address:'Rujevica 6, 51000 Rijeka'};
export const apps = {play:'https://play.google.com/store/apps/details?id=com.taxifiume.customer',apple:'https://apps.apple.com/hr/app/taxi-fiume/id6801137953?l=hr'};
export const rates = {cityStart:7,cityKm:1.4,vanStart:14,vanKm:2.5,waiting:15,rental:79.5};
export const services = [
 {id:'gradski-taksi',title:'Gradski taksi',label:'RIJEKA I OKOLICA',image:city.url,description:'Najpovoljniji i najpouzdaniji taxi na području Riječkog prstena, dostupan 0–24.'},
 {id:'kombi-prijevoz',title:'Kombi prijevoz',label:'VIŠE MJESTA, VIŠE UDOBNOSTI',image:van.url,description:'Siguran i udoban prijevoz putnika novim, bogato opremljenim vozilima Opel Vivaro najnovije generacije.'},
 {id:'transferi',title:'Transferi',label:'VAŠE ODREDIŠTE, NAŠA BRIGA',image:transfer.url,description:'Transferi od i do zračnih luka, kolodvora, hotela te na poslovna i međugradska putovanja.'},
 {id:'rent-a-car',title:'Rent a car',label:'SLOBODA NA ČETIRI KOTAČA',image:rental.url,description:'Fleksibilne opcije najma, povoljne cijene i pouzdana usluga. Opel Vivaro već od 79,50 € na dan.'},
];
export function pageHead(title:string,description:string) {return {meta:[{title:`${title} | Taxi Fiume`},{name:'description',content:description},{property:'og:title',content:`${title} | Taxi Fiume`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]};}
