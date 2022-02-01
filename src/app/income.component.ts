import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent {
  content: any = {
    landingPage: {
      incomeOptions: ['1', '2', '3'],
      incomeQuestionIncome: 'question',
      incomeAsterisktext: 'text'
    }
  };
  commonContent: any = {
    landingPage: {
      formErrorText: 'error',
      continueButton: 'continue',
      backLink: 'back'
    }
  };
  formSubmitted = false;
  employment: FormControl;
  spouseEmployment: FormControl;
  householdIncome: FormControl;
  customActionSheetOptions: any = {};

  incomeForm = this.formBuilder.group({
    employment: new FormControl('', [Validators.required]),
    spouseEmployment: new FormControl('', [Validators.required]),
    householdIncome: new FormControl('', [Validators.required]),
  });

  constructor(public formBuilder: FormBuilder, private router: Router) { }

  submitFWAssessmentForm(): void {
    this.formSubmitted = true;
    if (this.incomeForm.valid) {
      this.router.navigateByUrl('/financial-wellness/confidence');
    }
  }
}
