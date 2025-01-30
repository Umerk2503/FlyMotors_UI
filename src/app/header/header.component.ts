import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandNavComponent } from '../expand-nav/expand-nav.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ExpandNavComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hoveredMessage: string | null = null;


  onMouseEnter(message: string) {
    this.hoveredMessage = message;
  }

  onMouseLeave() {
    this.hoveredMessage = null;
  }

  isMenuVisible: boolean = false; 

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
