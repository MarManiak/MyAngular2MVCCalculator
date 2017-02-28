"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var operands;
(function (operands) {
    operands[operands["noOp"] = 0] = "noOp";
    operands[operands["plusOp"] = 1] = "plusOp";
    operands[operands["minusOp"] = 2] = "minusOp";
    operands[operands["multOp"] = 3] = "multOp";
    operands[operands["divOp"] = 4] = "divOp";
    operands[operands["eqOp"] = 5] = "eqOp";
})(operands || (operands = {}));
;
var Calculator = (function () {
    function Calculator() {
        this.title = 'Angular2 Calculator';
        this.clearAll();
    }
    Calculator.prototype.clearAll = function () {
        this.displayValue = '0';
        this.holdValue = 0;
        this.memoryValue = 0;
        this.resetDisplay = true;
        this.lastOperand = operands.noOp;
        this.lastBtnIsDot = false;
        this.lastBtnIsOp = false;
        this.hasDot = false;
    };
    Calculator.prototype.handleNumberClick = function (value) {
        if (this.resetDisplay || this.displayValue == '0') {
            this.displayValue = value;
        }
        else {
            this.displayValue = this.displayValue + value;
        }
        this.lastBtnIsDot = false;
        this.lastBtnIsOp = false;
        this.resetDisplay = false;
    };
    Calculator.prototype.clickBtnDot = function () {
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
    };
    Calculator.prototype.handleOperator = function (value) {
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
    };
    Calculator = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/calculator.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Calculator);
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=app.component.js.map