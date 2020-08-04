import User from "./User"

export default class Employee extends User {
    protected admissionDate : number
    protected baseSalary : number
    static BENEFITS_VALUE: number = 400

    constructor(
        id: string, 
        email: string, 
        name: string, 
        password: string,
        admissionDate : number, 
        baseSalary : number,
    ){
        super(id, email, name, password)
        this.admissionDate = admissionDate,
        this.baseSalary = baseSalary 
    }

    public getAdmissionDate(): number{
        return this.admissionDate
    }

    public getBaseSalary(): number{
        return this.baseSalary
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE;
      }


} 