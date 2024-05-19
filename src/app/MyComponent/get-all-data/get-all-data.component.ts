import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-data',
  templateUrl: './get-all-data.component.html',
  styleUrl: './get-all-data.component.css'
})
export class GetAllDataComponent {
  data: any;
  ProfileDP!: string;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  filtername: string = '';
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    debugger
    this.ProfileDP = "assets/Image/noPhotoAvailable.jpg"
    this.GetAllUser();

  }
  GetAllUser(): void {
    console.log("this is GetAllUser")
    this.authService.GetAllData().subscribe(res => {
      console.log("this is retur api", res)
      debugger
      for (let item of res) {
        if (item.userPhoto != null) {
          item.userPhoto = 'data:image/*;base64,' + item.byteImage
        } else {
          this.ProfileDP = "assets/Image/noPhotoAvailable.jpg"
        }
      }
      this.data = res;
      console.log(res)
    }
    )
  }
  onTableDatachange(event: any) {
    this.page = event;
    this.GetAllUser();
  }
  onTableSizechange(event: any): void {
    console.log(event.target.value);
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetAllUser();
  }
  EditData(): void {

  }
  DeleteData(id: number): Boolean {
    let isSuccess = false
    console.log("id", id)
    debugger
    this.authService.DeleteDataById(id)
      .subscribe(res => {
        debugger
        console.log("delete data")
        isSuccess = true
        this.GetAllUser();
      })
    return isSuccess
  }
  Logout() {
    debugger
    sessionStorage.clear()
    this.router.navigateByUrl('/login');
  }
}
