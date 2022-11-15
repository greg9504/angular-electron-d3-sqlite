import { Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { promises as fsp } from 'fs-extra';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private efsp: typeof fsp;
  constructor(
    private electronService: ElectronService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
      this.electronService.elog.info('Hello, log');
      let f = electronService.fs.openSync('c:/temp/prefsplotdefaults.txt', 'r');
      console.log('opened file');
      electronService.fs.close(f);
      this.efsp = window.require('fs-extra');
      this.efsp.writeFile('c:/temp/angularelectronfile.txt', 'data');
      console.log('file written');
    } else {
      console.log('Run in browser');
    }
  }
}
