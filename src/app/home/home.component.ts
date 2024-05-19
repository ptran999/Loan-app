/*
    Title: home.component.ts
    Author: Phuong Tran
    Date: 05/05/2024
    Description: Loan App - Capstone Project.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // capture the input values
  principle: number;
  interestRate: number;
  loanTerm: number;

  // output the calculated values for display
  monthlyPayment: number = 0;
  totalInterest: number = 0;

  constructor() {

  }

  ngOnInit(): void {
  }

  // calculate the input from the app form
  calculate() {
    const monthlyRate = this.interestRate / 100 / 12;
    const payments = this.loanTerm * 12;
    const paymentPerPeriod = this.principle *
    (
      (monthlyRate * Math.pow(1 + monthlyRate, payments))
      / (Math.pow(1 + monthlyRate, payments) - 1)
    );
    this.monthlyPayment = +paymentPerPeriod.toFixed(2);
    this.totalInterest = +(paymentPerPeriod * payments - this.principle).toFixed(2);
  }

}
