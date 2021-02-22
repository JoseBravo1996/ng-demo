import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  public formPerson: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formPerson = this.formBuilder.group({
      name: new FormControl(),
      lastname: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      province: new FormControl(),
      codePostal: new FormControl()
    });
  }

  save() {
    console.log(this.formPerson.value);
  }

  clear() {
    this.formPerson.reset();
  }

}
