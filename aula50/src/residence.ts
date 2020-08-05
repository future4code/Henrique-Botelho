import {Place} from "./place"

export class Residence extends Place {
    constructor(
      private dwellersQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    
    public getDwellersQuantity(): number {
      return this.dwellersQuantity
    }
  }