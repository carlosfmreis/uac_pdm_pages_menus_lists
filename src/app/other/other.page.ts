import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {
  list: string[];

  constructor() {}

  ngOnInit() {
    this.list = ['Test 1', 'Test 2', 'Test 3'];
  }
}
