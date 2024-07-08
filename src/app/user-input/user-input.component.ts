import { Component ,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(public investmentService:InvestmentService) {}

  enteredInitialInvestment = "0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn = "0";
  enteredDuration = "0";
  

  onFormSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: parseInt(this.enteredInitialInvestment),
      duration: parseInt(this.enteredDuration),
      expectedReturn: parseInt(this.enteredExpectedReturn),
      annualInvestment: parseInt(this.enteredAnnualInvestment) //other way use +variablename
    })
    console.log('Form submitted');
  }
}
