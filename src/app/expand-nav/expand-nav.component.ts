import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expand-nav',
  standalone: true,
  imports: [],
  templateUrl: './expand-nav.component.html',
  styleUrl: './expand-nav.component.css'
})
export class ExpandNavComponent {
  @Input() message !: string; // Declare an input property
  @Input() source !: string; // Declare an input property
}
