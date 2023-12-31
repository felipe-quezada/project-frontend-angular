import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ComponentsService } from '../../components/components.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private componentService: ComponentsService) {}
}
