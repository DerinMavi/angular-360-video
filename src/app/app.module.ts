import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { VideoViewComponent } from './video-view/video-view.component';

const appRoutes: Routes = [
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'video-view/:url', component: VideoViewComponent },
  { path: '',
    redirectTo: '/file-upload',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent, FileUploadComponent, VideoViewComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, BrowserModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
