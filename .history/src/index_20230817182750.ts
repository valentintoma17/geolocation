/// <reference types="@types/google.maps" />
import {User} from './User';
import {Company} from './Company';

const user = new User();
const company =new Company();

console.log(user, company);

new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: {lat:0, lng: 0},
    zoom: 3
    
});