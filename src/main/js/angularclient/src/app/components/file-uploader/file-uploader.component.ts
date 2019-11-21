import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileServiceService} from "../../services/serviceFile/file-service.service";

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });
  private fileName;
  private file;

  constructor(private fb: FormBuilder, private fileService: FileServiceService) {
  }

  public onFileChange(event) {
    if (event.target.files.length > 0) {
      console.log("file length ", event.target.files[0]);
      this.fileName = event.target.files[0].name;
      this.file = event.target.files[0];
    }

    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
      };
    }
  }

  public onSubmit(): void {
    const formData = new FormData();
    formData.append('data', this.file);
    formData.append("name", this.fileName);
    this.fileService.upload(formData);
    console.log(this.formGroup.get('file'));
    console.log(this.fileName);
  }
}
