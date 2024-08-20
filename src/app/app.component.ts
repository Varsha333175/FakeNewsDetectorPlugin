import { Component, AfterViewInit, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      import('@lottiefiles/lottie-player');  // Dynamic import for the lottie-player
    }
  }

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  initAnimations(): void {
    // Hero section animations
    gsap.from('.hero-content', {
      opacity: 0,
      y: -50,
      duration: 1, // Increased speed
      ease: 'power3.out',
    });

    gsap.from('.hero-image img', {
      opacity: 0,
      scale: 0.8,
      duration: 1, // Increased speed
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
        duration: 1, // Increased speed
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reset', // Ensures animation plays every time
        }
      });

      gsap.from(image, {
        opacity: 0,
        x: i % 2 === 0 ? 100 : -100,
        duration: 1, // Increased speed
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reset', // Ensures animation plays every time
        }
      });
    });

    // Continuous animations
    this.initContinuousAnimations();
  }

  initContinuousAnimations(): void {
    // Hero Image rotation with smooth scaling
    gsap.to('.hero-image img', {
      rotation: 360,
      scale: 1.05,
      duration: 10, // Increased speed
      repeat: -1,
      ease: 'linear',
    });

    // Gentle pulsating effect on CTA buttons
    gsap.to('.cta-button', {
      scale: 1.05,
      duration: 1, // Increased speed
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Floating effect on images in feature sections
    gsap.to('.feature-image img', {
      y: -10,
      duration: 1, // Increased speed
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Subtle text animation
    gsap.to('.feature-content h2', {
      y: -5,
      duration: 1, // Increased speed
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }
}
