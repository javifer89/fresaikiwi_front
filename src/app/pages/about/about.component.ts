import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('componentToScrollTo') componentToScrollTo!: ElementRef;
  scrollToComponent = true; // Variable para controlar el scroll

  ngAfterViewInit() {

    if (this.scrollToComponent) {
      const containerElement = document.getElementById('containerToScrollTo');
      if (containerElement) {
        containerElement.scrollIntoView({
          behavior: 'smooth', 
        });
      }
    }
  }
}
