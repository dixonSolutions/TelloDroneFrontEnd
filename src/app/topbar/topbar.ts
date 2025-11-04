import { Component, EventEmitter, Output, signal, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MenubarModule, ButtonModule, ToggleSwitch, FormsModule, NgClass, RouterLink, RouterLinkActive, Sidebar],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  protected readonly darkMode = signal(true);
  protected readonly drawerVisible = signal(false);

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.darkMode()) {
      document.documentElement.classList.add('app-dark');
    }
  }

  onToggleMenu(): void {
    this.drawerVisible.update(v => !v);
    this.menuToggle.emit();
  }

  onToggleTheme(): void {
    const isDark = !this.darkMode();
    this.darkMode.set(isDark);
    document.documentElement.classList.toggle('app-dark', isDark);
  }

  goToFeatures(): void {
    this.router.navigate(['/'], { fragment: 'features' });
  }
}
