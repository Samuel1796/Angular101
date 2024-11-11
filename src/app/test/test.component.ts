import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  @Input() video!: {
    id: string;
    title: string;
    channelName: string;
    views: string;
    timeAgo: string;
    duration: string;
    thumbnailUrl: string;
  };

  
}