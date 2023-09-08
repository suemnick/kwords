import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { LettersService } from '../letters.service';
import { WordComponent } from '../word/word.component';
import { Router } from '@angular/router';
import { SelectableLetter } from '../selectable-letter';

@Component({
  selector: 'app-letter-selection',
  templateUrl: './letter-selection.component.html',
  styleUrls: ['./letter-selection.component.css']
})
export class LetterSelectionComponent implements OnInit, AfterViewInit {
  @ViewChild(WordComponent)
  private wordComponent!: WordComponent;
  letters: SelectableLetter[] = [];

  constructor(
    private lettersService: LettersService,
    private router: Router) { }

  ngOnInit(): void {
    this.shuffle();
  }

  ngAfterViewInit(): void {
    this.wordComponent.word = this.lettersService.word;
  }

  selectLetter(letterIndex: number) {
    this.letters = this.lettersService.setLetterSelected(letterIndex, true);
    this.wordComponent.word = this.lettersService.word;
  }

  selectSpaceLetter() {
    this.lettersService.addSpaceLetter();
    this.wordComponent.word = this.lettersService.word;
  }

  returnLetter() {
    this.letters = this.lettersService.returnLetter();
    this.wordComponent.word = this.lettersService.word;
  }

  shuffle() {
    this.lettersService.word = "";
    this.lettersService.init();
    this.letters = this.lettersService.getLetters();
  }

  isWordEmpty(): boolean {
    return this.lettersService.word === "";
  }

  isWordInvalid(): boolean {
    return this.isWordEmpty() || this.lettersService.isLastLetterSpace();
  }

  spaceLetterSelectable(): boolean {
    if (this.isWordEmpty()) {
      return false;
    }
    if (this.lettersService.isLastLetterSpace()) {
      return false;
    }
    return true;
  }
}
