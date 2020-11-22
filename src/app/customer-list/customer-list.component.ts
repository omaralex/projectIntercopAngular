import { Observable } from "rxjs";
import { CustomerService } from "./../customer.service";
import { Customer } from "./../customer";
import { Component, OnInit } from "@angular/core";
import { ResponseGet } from "../responseGet";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]>;
  operations: ResponseGet = new ResponseGet();

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customers = this.customerService.getCustomersList();
    this.customerService.getOperations().subscribe(data => {
      this.operations = data;
    }, error => console.log(error));
  }
}