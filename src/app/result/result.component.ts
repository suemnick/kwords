import { Component, OnInit } from '@angular/core';
import { LettersService } from '../letters.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  word = "";

  constructor(private lettersService: LettersService) {}

  ngOnInit(): void {
    this.word = this.lettersService.word;
  }
}
