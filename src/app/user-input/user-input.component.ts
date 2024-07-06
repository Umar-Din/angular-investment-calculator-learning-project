import { Component ,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>();
  
  enteredInitialInvestment = "0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn = "0";
  enteredDuration = "0";
  

  onFormSubmit(){
    console.log(this.enteredInitialInvestment);
    this.calculate.emit({
      initialInvestment: parseInt(this.enteredInitialInvestment),
      duration: parseInt(this.enteredDuration),
      expectedReturn: parseInt(this.enteredExpectedReturn),
      annualInvestment: parseInt(this.enteredAnnualInvestment) //other way use +variablename
    })
    console.log('Form submitted');
  }
}
