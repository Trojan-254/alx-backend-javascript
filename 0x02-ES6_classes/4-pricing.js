#!/usr/bin/node
/**
** module for  Pricing
*/

import Currency from "./3-currency.js";

export default class Pricing {
   constructor(amount, currency) {
      this._amount = amount;
      this._currency = currency;
   }

   get amount() {
      return this._amount;
   }

   set amount(value) {
      if (typeof value !== "number") {
         throw new TypeError("Value must be number");
      }
      return this._amount = value;
   }

   get currency() { 
      return this._amount;
   }

   set currency(value) {
      if (!(value instanceof Currency)) {
         throw new TypeError("Value must be a string");
      }
      return this._currency = value;
   }

   displayFullPrice() {
      return `${this._amount} ${this._currency.displayFullCurrency()}`;
   }

   static convertPrice(amount, conversionRate) {
      return amount * conversionRate;
   }
}
