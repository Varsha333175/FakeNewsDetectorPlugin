import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    // Typing section as HTMLElement
    gsap.utils.toArray<HTMLElement>('.horizontal-section').forEach((section: HTMLElement) => {
      gsap.from(section, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          toggleActions: 'play none none none',
        }
      });
    });

    gsap.utils.toArray<HTMLElement>('.vertical-section').forEach((section: HTMLElement) => {
      gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          toggleActions: 'play none none none',
        }
      });
    });
  }
}
