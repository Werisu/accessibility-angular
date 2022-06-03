import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accessibility';
  public form!: FormGroup;

  constructor(formBuilder: FormBuilder){
    this.form = formBuilder.group({
      yesNoAnswer: ['no']
    });
  }

  submit(): void{
    console.log(this.form.value);

  }
}
