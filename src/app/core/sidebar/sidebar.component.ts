import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  toggle() {
    console.log('sidebar toggled')
    this.sidenav.toggle();
  }

  ngOnInit() {
    console.log(this.sidenav)
  }
}
