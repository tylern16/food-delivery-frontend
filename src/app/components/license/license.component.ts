import { Parser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { License } from 'src/app/license';
import { LicenseService } from 'src/app/services/license.service';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit{

  restaurantId: number = this.route.snapshot.params['restaurantId'];

  license: License = new License();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private licenseService: LicenseService,
  ){}

  ngOnInit(): void {
      this.loadLicense();
  }

  loadLicense() {
    this.licenseService.getLicense(this.restaurantId).subscribe(
      (data) => {
        this.license = data
        console.log("License: " + this.license.name);
      }, 
      (error) => console.log(error)
    );
  }

  parseImageData() {
  }

}
