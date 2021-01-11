import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
})
export class FormEditorComponent implements OnInit {
  predictionForm!: FormGroup;
  result: any;
  isAny = false;
  endpoint = '';
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.endpoint = environment.endpoint;
  }
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
    this.isAny = true;
    if (this.predictionForm.invalid) {
      return;
    }
    this.http
      .post(`${this.endpoint}/${this.predictionForm.value.language}`, {
        text: this.predictionForm.value.news,
      })
      .subscribe((data) => {
        this.isAny = false;
        this.result = data;
        this.result.value = parseFloat(this.result.value).toFixed(2);
      });
  }
}
