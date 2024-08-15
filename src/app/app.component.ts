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
    // Hero section animations
    gsap.from('.hero-content h1', {
      opacity: 0,
      y: -100,
      duration: 2,
      ease: 'power4.out',
    });

    gsap.from('.hero-content p', {
      opacity: 0,
      y: -80,
      duration: 2,
      ease: 'power4.out',
      delay: 0.3,
    });

    gsap.from('.hero-image img', {
      opacity: 0,
      scale: 0.7,
      duration: 2,
      ease: 'elastic.out(1, 0.75)',
    });

    // Feature sections animation on scroll
    gsap.utils.toArray('.feature-item').forEach((item: any, i: number) => {
      gsap.from(item, {
        opacity: 0,
        y: i % 2 === 0 ? 100 : -100,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });
    });

    // Testimonial section animation
    gsap.from('.testimonial-section', {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.testimonial-section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    // Contact section animation
    gsap.from('.contact-section', {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    // Continuous animations
    this.initContinuousAnimations();
  }

  initContinuousAnimations(): void {
    // Gentle pulsating effect on CTA buttons
    gsap.to('.cta-button', {
      scale: 1.07,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Floating effect on images in feature sections
    gsap.to('.feature-icon img', {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Subtle text animation for feature section titles
    gsap.to('.feature-content h2', {
      y: -5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }
}
