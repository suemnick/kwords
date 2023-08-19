import { Component, ViewChild, OnInit } from '@angular/core';
import { LettersService } from '../letters.service';
import { WordComponent } from '../word/word.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-letter-selection',
  templateUrl: './letter-selection.component.html',
  styleUrls: ['./letter-selection.component.css']
})
export class LetterSelectionComponent implements OnInit {
  @ViewChild(WordComponent)
  private wordComponent!: WordComponent;
  word = "";
  letters: string[] = [];

  constructor(public dialog: MatDialog, private lettersService: LettersService) { }

  openShuffleDialog(): void {
    const dialogRef = this.dialog.open(ShuffleDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.shuffle(true);
      }
    });
  }

  ngOnInit(): void {
    this.shuffle(false);
  }

  letterSelected(letterIndex: number) {
    const letter = this.lettersService.removeLetter(letterIndex);
    this.letters = this.lettersService.getLetters();
    this.word += letter;
    this.wordComponent.word = this.word;
  }

  letterBack() {
    this.lettersService.backLetter();
    this.letters = this.lettersService.getLetters();
    this.word = this.word.slice(0, -1);
    this.wordComponent.word = this.word;
  }

  shuffle(clearWord: boolean) {
    if (clearWord) {
      this.word = "";
      this.wordComponent.word = this.word;
    }
    this.lettersService.init();
    this.letters = this.lettersService.getLetters();
  }
}

@Component({
  selector: 'shuffle-dialog',
  templateUrl: './shuffle-dialog.html',
})
export class ShuffleDialog {}
