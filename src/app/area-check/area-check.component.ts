import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-area-check',
  templateUrl: './area-check.component.html',
  styleUrls: ['./area-check.component.css']
})
export class AreaCheckComponent {
  
  @Input('img')
  infoTemplateImg : String;
  
  @Output()
  getData = new EventEmitter();
  
  areas : any = [
    {
      id: 'aacc_mx',
      name: 'AACC CMDX',
      value: false
    },
    {
      id: 'redes_mx',
      name: 'Redes CMDX',
      value: false
    },
    {
      id: 'redes_t',
      name: 'Redes Territorios',
      value: false
    },
    {
      id: 'aacc_t',
      name: 'AACC Territorios',
      value: false
    }
  ];

  constructor() { }
  
  valueChanged(event, index) {
    this.areas[index].value = event.target.checked;
    this.getData.emit(this.areas);
  }

}
