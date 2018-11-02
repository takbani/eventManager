import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    template: `  
<div [routerLink]="['/events',even.id]" class="well hoverwell thumbnail">
<h2>{{even?.name}}</h2>
<div>Date: {{even?.date}}</div>
<div [ngClass]="getStarttimeClass()" [ngSwitch]="even?.time">
Time: {{even?.time}}
<span *ngSwitchCase="'8:00 am'">(Early Start)</span>
<span *ngSwitchCase="'10:00 am'">(Late Start)</span>
<span *ngSwitchDefault>(Normal Start)</span>
</div>

<div *ngIf="even?.location">
    <span>Location: {{even?.location?.address}}</span>
    <span class="pad-left">{{even?.location?.city}},{{even.location?.country}}</span>
</div>
<div *ngIf="even?.onlineUrl">
Online URL: {{even?.onlineUrl}}
</div>
</div>
`,
    styles: [`
    .green{color: #003300 !important;}
    .bold{font-weight:bold;}
    .thumbnail{min-height:270px;}
    .pad-left{margin-left: 100 px; }
    .well div {color: #bbb; }
    `
    ]
})

export class EventThumbnailComponent {
    @Input() even: IEvent

    getStarttimeClass() {
        const isEarlyStart = this.even && this.even.time === '8:00 am';
        return { green: isEarlyStart, bold: isEarlyStart }
    }

}