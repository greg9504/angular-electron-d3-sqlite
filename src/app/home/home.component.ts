import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';
import * as d3 from 'd3';
// const d3 = require('d3');
const nd3: typeof d3 =  window.require('d3');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private electronService: ElectronService) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
    const db = this.electronService.database('C:/src/bugs/TAnalyze/Tutorial/version 1.0/RQC dataset 7.tdb', {
      readonly: true,
      fileMustExist: true,
   });
   db.close();
   console.log('db opened');
   const num = nd3.round(323.23, 2);
   console.log(num);
  }

}
