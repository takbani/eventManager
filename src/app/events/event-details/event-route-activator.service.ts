 import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router"
import {Injectable, Component} from "@angular/core"
import {EventService} from '../shared/event.service'


@Injectable()
export class EventRouteActivator implements CanActivate{
constructor(private eventService:EventService,private router:Router){

}
canActivate(route:ActivatedRouteSnapshot):any{
const eventExists=!!this.eventService.getEvent(+route.params['id'])
if(!eventExists)
this.router.navigate(['/404'])
return eventExists
}

}