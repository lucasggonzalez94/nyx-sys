import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-carousel-title',
  templateUrl: './carousel-title.component.html',
  styleUrls: ['./carousel-title.component.scss']
})
export class CarouselTitleComponent implements OnInit {
  @Input() word: string = '';

  words: string[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.word) {
      this.initializeWords();
      this.startCarouselAnimation();
    }
  }

  initializeWords() {
    if (this.word) {
      const numberOfWords = Math.ceil(window.innerWidth / this.word.length);
      this.words = Array(numberOfWords).fill(this.word);
    }
  }

  startCarouselAnimation() {
    setInterval(() => {
      if (this.word) {
        const firstWord = this.words.shift();
        this.words.push(firstWord as string);
      }
    }, 10000); // Ajusta la velocidad de la animación según tus necesidades
  }
}

