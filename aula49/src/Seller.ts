import Employee from "./Employee";

export default class Seller extends Employee{
    static SELLING_COMMISSION: number = 5;
    private salesQuantity: number = 0;


	public getSalesQuantity(): number {
		return this.salesQuantity
	}

    public calculateTotalSalary(): number {
        return (
                this.baseSalary + 
                Employee.BENEFITS_VALUE + 
                Seller.SELLING_COMMISSION * 5
            )
      }
}
