import { userInfo } from "os";
import User from "./User";
import Customer from "./Customer"
import Employee from "./Employee"
import Seller from "./Seller"

// const usuario = new User("2","jj","jjj","kkoko")
const customer = new Customer("3", "Kkk", "Henrique", "okok", "kki")
console.log(customer.introduceYourself())

const employee = new Employee("3","henrique@gmail.com", "Kkk", "koko", 21, 33);

console.log(employee.getEmail())


const seller = new Seller("3","henrique@gmail.com", "Kkk", "koko", 21, 44)