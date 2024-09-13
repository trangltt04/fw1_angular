import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'trang';
  // khoahoc = 'ky18 - 2023';
  // monhoc = 'angular';
  // student = {
  //   hoten: 'Le Thi Thu Trang',
  //   gioitinh: 'Nu',
  //   ngaysinh: '09/10/2004',
  //   anh: 'a1.jpg',
  //   diemTB: 8.2,
  // };
}
