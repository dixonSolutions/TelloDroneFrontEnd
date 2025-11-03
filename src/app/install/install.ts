import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-install',
  standalone: true,
  imports: [Topbar, MenubarModule, ButtonModule],
  templateUrl: './install.html',
  styleUrl: './install.css',
})
export class Install {

}
