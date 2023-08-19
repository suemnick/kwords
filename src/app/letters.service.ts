import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LettersService {
  readonly CONSONANTS_COUNT = 6;
  readonly VOCALS_COUNT = 3;
  readonly consonants = 'vvrrpplljjffccttssnnmmhhggbbddkkqqwwxxyyzz'.split('');
  readonly vocals = 'eeeeaaaauuuuooooäöüiii'.split('');
  private availableLetters: string[] = [];
  private selectedLetters: string[] = [];

  constructor() { }

  init() {
    this.availableLetters = [];
    this.selectedLetters = [];
    const consonants = [...this.consonants];
    this.availableLetters.push(...this.getRandomLetters(consonants, this.CONSONANTS_COUNT));
    const vocals = [...this.vocals];
    this.availableLetters.push(...this.getRandomLetters(vocals, this.VOCALS_COUNT));
  }

  getLetters(): string[] {
    return [...this.availableLetters];
  }

  removeLetter(letterIndex: number): string {
    const letter = this.availableLetters.splice(letterIndex, 1)[0];
    this.selectedLetters.push(letter);
    return letter;
  }

  backLetter() {
    const letter = this.selectedLetters.pop();
    if (letter) {
      this.availableLetters.push(letter);
    }
  }

  private getRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }

  private getRandomLetters(letters: string[], count: number): string[] {
    const randomLetters: string[] = [];
    while (randomLetters.length < count) {
      const index = this.getRandomIndex(letters.length);
      randomLetters.push(letters.splice(index, 1)[0]);
    }
    return randomLetters;
  }
}
