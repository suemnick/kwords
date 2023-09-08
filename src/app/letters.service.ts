import { Injectable } from '@angular/core';
import { SelectableLetter } from './selectable-letter';

@Injectable({
  providedIn: 'root'
})
export class LettersService {
  readonly CONSONANTS_COUNT = 6;
  readonly VOCALS_COUNT = 3;
  readonly consonants = 'vvrrpplljjffccttssnnmmhhggbbddkkqqwwxxyyzz'.split('');
  readonly vocals = 'eeeeaaaauuuuooooäöüiii'.split('');
  private availableLetters: SelectableLetter[] = [];
  word = "";

  constructor() { }

  init() {
    this.availableLetters = [];
    const consonants = [...this.consonants];
    this.availableLetters.push(...this.getRandomLetters(consonants, this.CONSONANTS_COUNT));
    const vocals = [...this.vocals];
    this.availableLetters.push(...this.getRandomLetters(vocals, this.VOCALS_COUNT));
  }

  getLetters(): SelectableLetter[] {
    return [...this.availableLetters];
  }

  setLetterSelected(letterIndex: number, selected: boolean): SelectableLetter[] {
    this.availableLetters[letterIndex].selected = selected;
    this.word += this.availableLetters[letterIndex].letter;
    return this.getLetters();
  }

  returnLetter() {
    const lastWordLetter = this.word.slice(-1);
    this.word = this.word.slice(0, -1);
    const selectableLetter = this.availableLetters.find(letter => letter.letter === lastWordLetter && letter.selected);
    if (selectableLetter) {
      selectableLetter.selected = false;
    }
    return this.getLetters();
  }

  private getRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }

  private getRandomLetters(letters: string[], count: number): SelectableLetter[] {
    const randomLetters: SelectableLetter[] = [];
    while (randomLetters.length < count) {
      const index = this.getRandomIndex(letters.length);
      randomLetters.push({
        letter: letters.splice(index, 1)[0],
        selected: false
      });
    }
    return randomLetters;
  }
}
