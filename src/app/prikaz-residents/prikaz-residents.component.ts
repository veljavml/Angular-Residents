import { Component, OnInit, ViewChild } from '@angular/core';
import { ResidentService } from 'src/services/resident.service';
import { Resident } from 'src/model/resident';
import { Router } from '@angular/router';
import { MatTable, MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-prikaz-residents',
  templateUrl: './prikaz-residents.component.html',
  styleUrls: ['./prikaz-residents.component.css']
})
export class PrikazResidentsComponent implements OnInit {

  constructor(private servis: ResidentService, private router: Router) { }

  data2: Resident[] = [];
  dataSource = new MatTableDataSource<Resident>();
  @ViewChild('tabela') tabela!: MatTable<any>;
  ngOnInit(): void {

    this.servis.getResident().subscribe(data => {
      console.log(data);
      this.data2 = data;
    })

    this.updateDataSource();
  }
  displayedColumns: string[] = ['id', 'ime', 'prezime', 'adresa', 'datumuseljenja', 'action'];

  add() {
    this.router.navigate(['/addedit']);
  }

  edit(id: number) {
    this.router.navigate(['/addedit/' + id], { queryParams: { edit: 'true' } });
  }

  delete(id: number) {

    if(confirm('Da li ste sigurni da zelite da nastavite sa brisanjem?'))
  {
    this.servis.deleteResident(id);
    this.dataSource._updateChangeSubscription();
    this.tabela.renderRows();
    this.updateDataSource();
    this.updateDataSource();
    this.tabela.renderRows();
  }



  }

  filter(event: any) {
    if (!event.target.value)
      return;
    this.dataSource.filter = event.target.value.trim().toLowerCase()
  }


  updateDataSource() {

    this.servis.getResident().subscribe(data => {
      console.log(data);
      this.data2 = data;
      this.dataSource.data = data;
    })

  }



}
