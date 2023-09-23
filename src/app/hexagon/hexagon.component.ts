import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.css']
})
export class HexagonComponent {
  @Input() imageUrl: string = '';
  @Input() tooltipText: string = '';
  showTooltip: boolean = false;
}
