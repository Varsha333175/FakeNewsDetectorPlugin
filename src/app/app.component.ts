import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  initAnimations(): void {
    // DOM-related animations
    gsap.from('.hero-content', {
      opacity: 0,
      y: -50,
      duration: 1, 
      ease: 'power3.out',
    });

    gsap.from('.hero-image img', {
      opacity: 0,
      scale: 0.8,
      duration: 1, 
      ease: 'elastic.out(1, 0.75)',
    });

    // Feature sections animation on scroll
    const sections = gsap.utils.toArray('.feature-item') as Element[];

    sections.forEach((section: Element, i: number) => {
      const content = section.querySelector('.feature-content') as HTMLElement;
      const image = section.querySelector('.feature-image img') as HTMLImageElement;

      gsap.from(content, {
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100,
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      });

      gsap.from(image, {
        opacity: 0,
        x: i % 2 === 0 ? 100 : -100,
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      });
    });

    this.initContinuousAnimations();
  }

  initContinuousAnimations(): void {
    gsap.to('.hero-image img', {
      rotation: 360,
      scale: 1.05,
      duration: 10,
      repeat: -1,
      ease: 'linear',
    });

    gsap.to('.cta-button', {
      scale: 1.05,
      duration: 1, 
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to('.feature-image img', {
      y: -10,
      duration: 1, 
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to('.feature-content h2', {
      y: -5,
      duration: 1, 
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }
}
