import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
})
export class FormEditorComponent implements OnInit {
  predictionForm!: FormGroup;
  result: any;
  endpoint = 'http://localhost:5000/predict';
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.predictionForm = this.formBuilder.group({
      language: ['spanish', [Validators.required]],
      news: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(3000),
        ],
      ],
    });
  }

  onSubmit() {
    /* if (this.predictionForm.invalid) {
      return;
    }
    this.http
      .post(`${this.endpoint}/${this.predictionForm.value.language}`, {
        text: this.predictionForm.value.news,
      })
      .subscribe((data) => {
        this.result = data;
      });
  } */
    this.result = {
      fake: 'True',
      value: '0.9637991',
    };
  }
}
