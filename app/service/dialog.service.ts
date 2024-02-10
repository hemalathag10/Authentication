// dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openRegistrationDialog(): Observable<any> {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '400px',
      height:'400px'
      // You can customize dialog options here
    });

    return dialogRef.afterClosed();
  }

  openLoginDialog(): Observable<any> {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      // You can customize dialog options here
    });

    return dialogRef.afterClosed();
  }
}
