/// <reference types="@types/google.maps" />
import {User} from './User';
import {Company} from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company =new Company();
const custMap = new CustomMap("map");

custMap.addMarker(user);
custMap.addMarker(company);