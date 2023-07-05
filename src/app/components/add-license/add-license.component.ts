import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LicenseService } from 'src/app/services/license.service';

@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {

  constructor(
    private licenseService: LicenseService,
    private route: ActivatedRoute,
  ) { }

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  // message = '';
  restaurantId: number = this.route.snapshot.params['restaurantId'];

  fileInfos?: Observable<any>;


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.licenseService.upload(this.currentFile, this.restaurantId).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              // this.message = event.body.message;
              this.fileInfos = this.licenseService.getLicense(this.restaurantId);
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            // if (err.error && err.error.message) {
            //   this.message = err.error.message;
            // } else {
            //   this.message = 'Could not upload the file!';
            // }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }

}
