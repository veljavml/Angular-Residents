import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Resident } from 'src/model/resident';
import { ResidentService } from 'src/services/resident.service';

@Component({
  selector: 'app-add-edit-residents',
  templateUrl: './add-edit-residents.component.html',
  styleUrls: ['./add-edit-residents.component.css'],
})
export class AddEditResidentsComponent implements OnInit {
  constructor(
    private servis: ResidentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  formResident: FormGroup;
  onemoguci: boolean;

  ngOnInit(): void {
    this.formResident = new FormGroup({
      id: new FormControl(),
      ime: new FormControl(),
      prezime: new FormControl(),
      adresa: new FormControl(),
      datumuseljenja: new FormControl(),
    });

    if (this.route.snapshot.queryParams['edit'] == 'true') {
      this.servis
        .getResidentByID(this.route.snapshot.params['id'])
        .subscribe((data) => {
          console.log(data);
          this.formResident.setValue(data);
          this.formResident.controls['id'].disable();
        });
    } else {
      this.formResident.controls['id'].disable();
    }
  }

  save() {
    let noviResident: Resident;
    noviResident = this.formResident.getRawValue();
    console.log(noviResident);
    this.servis.addEditResident(noviResident);

    this.goBack();
  }

  goBack() {
    this.router.navigate(['']);
  }
}
