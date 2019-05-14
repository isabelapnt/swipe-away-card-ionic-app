import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { mobiscroll, MbscCardOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
    lang: 'pt-BR',
    theme: 'ios'
}

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  settings: MbscCardOptions = {
        actionable: false,
        stages: [{
            percent: -20,
            action: (event, inst) => {
                inst.remove(event.target);
                return false;
            }
        }, {
            percent: 20,
            action: (event, inst) => {
                inst.remove(event.target);
                return false;
            }
        }]
    };

}
