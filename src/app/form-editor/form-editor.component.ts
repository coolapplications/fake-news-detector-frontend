import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
})
export class FormEditorComponent {
  predictionForm = new FormGroup({
    language: new FormControl(''),
    news: new FormControl(''),
  });
  onSubmit() {
    console.log(this.predictionForm.value);
  }
}
