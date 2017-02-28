import { Component } from '@angular/core';

enum operands { noOp, plusOp, minusOp, multOp, divOp, eqOp };

@Component({
  selector: 'my-app',
  templateUrl: './app/calculator.component.html'
})


export class Calculator {
    title = 'Angular2 Calculator';
    memoryValue: number;
    displayValue: string;
    resetDisplay: boolean;
    holdValue: number;
    lastOperand: operands;
    lastBtnIsDot: boolean;
    lastBtnIsOp: boolean;
    hasDot: boolean;

    constructor() {
        this.clearAll();
    }

    clearAll() {
        this.displayValue = '0';
        this.holdValue = 0;
        this.memoryValue = 0;
        this.resetDisplay = true;
        this.lastOperand = operands.noOp;
        this.lastBtnIsDot = false;
        this.lastBtnIsOp = false;
        this.hasDot = false;
    }

    handleNumberClick(value: string) {
        if (this.resetDisplay || this.displayValue == '0') {
            this.displayValue = value;
        } else {
            this.displayValue = this.displayValue + value;
        }
        this.lastBtnIsDot = false;
        this.lastBtnIsOp = false;
        this.resetDisplay = false;
    }

    clickBtnDot() {
        if (!this.hasDot && !this.lastBtnIsDot) {
            if (this.resetDisplay) {
                this.displayValue = '0';
            } 
            this.displayValue = this.displayValue + '.';
            this.hasDot = true;
            this.lastBtnIsDot = true;
            this.lastBtnIsOp = false;
            this.resetDisplay = false;
        }
    }

    handleOperator(value: string) {
        if (!this.lastBtnIsOp) {
            switch (this.lastOperand) {
                case operands.noOp:
                    this.memoryValue = Number(this.displayValue);
                    break;
                case operands.plusOp:
                    this.memoryValue = this.memoryValue + Number(this.displayValue);
                    break;
                case operands.minusOp:
                    this.memoryValue = this.memoryValue - Number(this.displayValue);
                    break;
                case operands.divOp:
                    this.memoryValue = this.memoryValue / Number(this.displayValue);
                    break;
                case operands.multOp:
                    this.memoryValue = this.memoryValue * Number(this.displayValue);
                    break;
            }
            this.displayValue = String(this.memoryValue);
            this.resetDisplay = true;
        }

        if (value == '/') {
            this.lastOperand = operands.divOp;
        }
        else if (value == '*') {
            this.lastOperand = operands.multOp;
        }
        else if (value == '+') {
            this.lastOperand = operands.plusOp;
        }
        else if (value == '-') {
            this.lastOperand = operands.minusOp;
        }
        else if (value == '=') {
            this.lastOperand = operands.eqOp;
        }
        this.lastBtnIsOp = true;
        this.lastBtnIsDot = false;
        this.hasDot = false;
    }
}
