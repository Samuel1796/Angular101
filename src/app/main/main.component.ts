import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';
import { CommonModule } from '@angular/common';

type VideoCard = {
  id: string;
  title: string;
  channelName: string;
  views: string;
  timeAgo: string;
  duration: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TestComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  videos: VideoCard[] = [
    {
      id: '1',
      title: 'How to Build a Modern Website from Scratch',
      channelName: 'Web Dev Mastery',
      views: '254K views',
      timeAgo: '2 weeks ago',
      duration: '5:15',
      thumbnailUrl: 'https://picsum.photos/seed/webdev1/320/180'
    },
    {
      id: '2',
      title: '10 JavaScript Tips You Didn\'t Know About',
      channelName: 'Code Academy',
      views: '128K views',
      timeAgo: '5 days ago',
      duration: '12:30',
      thumbnailUrl: 'https://picsum.photos/seed/javascript2/320/180'
    },
    {
      id: '3',
      title: 'CSS Grid Layout Masterclass',
      channelName: 'CSS Wizards',
      views: '89K views',
      timeAgo: '1 week ago',
      duration: '8:45',
      thumbnailUrl: 'https://picsum.photos/seed/cssgrid3/320/180'
    },
    {
      id: '4',
      title: 'React Hooks Deep Dive',
      channelName: 'React Masters',
      views: '176K views',
      timeAgo: '3 days ago',
      duration: '15:20',
      thumbnailUrl: 'https://picsum.photos/seed/reacthooks4/320/180'
    },
    {
      id: '5',
      title: 'UX Design Principles Explained',
      channelName: 'Design Hub',
      views: '92K views',
      timeAgo: '1 week ago',
      duration: '6:55',
      thumbnailUrl: 'https://picsum.photos/seed/uxdesign5/320/180'
    },
    {
      id: '6',
      title: 'TypeScript Best Practices',
      channelName: 'TypeScript Pro',
      views: '145K views',
      timeAgo: '4 days ago',
      duration: '10:15',
      thumbnailUrl: 'https://picsum.photos/seed/typescript6/320/180'
    },
    {
      id: '7',
      title: 'Docker for Beginners',
      channelName: 'DevOps Guide',
      views: '203K views',
      timeAgo: '1 week ago',
      duration: '7:30',
      thumbnailUrl: 'https://picsum.photos/seed/docker7/320/180'
    },
    {
      id: '8',
      title: 'Node.js Advanced Concepts',
      channelName: 'Backend Masters',
      views: '167K views',
      timeAgo: '6 days ago',
      duration: '9:45',
      thumbnailUrl: 'https://picsum.photos/seed/nodejs8/320/180'
    }
  ];

  openImage(imageUrl: string): void {
    window.open(imageUrl, '_blank');
  }
}