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
      duration: 2.5,
      ease: 'elastic.out(1, 0.75)',
    });

    // Staggered animations for sections
    const sections = gsap.utils.toArray('.zigzag-section, .vertical-section') as HTMLElement[];

    sections.forEach((section: HTMLElement, i: number) => {
      const content = section.querySelector('.section-content') as HTMLElement;
      const image = section.querySelector('.section-image img') as HTMLImageElement;

      gsap.from(content, {
        opacity: 0,
        x: i % 2 === 0 ? -150 : 150,
        duration: 1.5,
        ease: 'power3.out',
        delay: i * 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      gsap.from(image, {
        opacity: 0,
        scale: 0.9,
        x: i % 2 === 0 ? 150 : -150,
        duration: 1.5,
        ease: 'power3.out',
        delay: i * 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });
    });

    // Advanced parallax effect for hero section
    gsap.to('.hero-image img', {
      yPercent: -30,
      scale: 1.1,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        // ease property is moved to the gsap.to animation, not inside scrollTrigger
      }
    });

    // Hover effects with advanced transitions
    const images = gsap.utils.toArray('.section-image img') as HTMLElement[];

    images.forEach((image: HTMLElement) => {
      gsap.set(image, { transformOrigin: 'center center' });

      const hoverAnimation = gsap.to(image, {
        scale: 1.1,
        rotation: 10,
        duration: 0.5,
        ease: 'power2.inOut',
        paused: true,
      });

      image.addEventListener('mouseenter', () => hoverAnimation.play());
      image.addEventListener('mouseleave', () => hoverAnimation.reverse());
    });

    // Continuous animations with more subtle movements
    this.initContinuousAnimations();
  }

  initContinuousAnimations(): void {
    // Hero Image slow rotation with smooth scaling
    gsap.to('.hero-image img', {
      rotation: 360,
      scale: 1.05,
      duration: 30,
      repeat: -1,
      ease: 'linear',
    });

    // Pulsating effect on CTA buttons with easing
    gsap.to('.cta-button', {
      scale: 1.07,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    // Floating effect on images with easing and subtle movement
    gsap.to('.section-image img', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Subtle text animation with slight rotation and scaling
    gsap.to('.section-content h2', {
      y: -10,
      scale: 1.02,
      rotation: 2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }
}
