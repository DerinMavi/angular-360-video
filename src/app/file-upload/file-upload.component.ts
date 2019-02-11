import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  // Valid URL pattern, not perfect but works
  pattern = '^(https?:\\/\\/)?' + // protocol
    '((([a-zA-Z\\d]([a-zA-Z\\d-]{0,61}[a-zA-Z\\d])*\\.)+' + // sub-domain + domain name
    '[a-zA-Z]{2,13})' + // extension
    '|((\\d{1,3}\\.){3}\\d{1,3})' + // OR ip (v4) address
    '|localhost)' + // OR localhost
    '(\\:\\d{1,5})?' + // port
    '(\\/[a-zA-Z\\&\\d%_.~+-:@]*)*' + // path
    '(\\?[a-zA-Z\\&\\d%_.,~+-:@=;&]*)?' + // query string
    '(\\#[-a-zA-Z&\\d_]*)?$'; // fragment locator

  // Validate input
  urlControl = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(this.pattern)
    ]
  );
  videoSubmitForm = new FormGroup({
    url: this.urlControl
  });

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.videoSubmitForm.value);
    this.router.navigate(['/video-view/' +  encodeURIComponent(this.videoSubmitForm.value.url)]);
  }
}
