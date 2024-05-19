import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { TodosListComponent } from './MyComponent/todos-list/todos-list.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common'; 
import { AboutComponent } from './MyComponent/about/about.component';
import { TampDrivenFormComponent } from './MyComponent/tamp-driven-form/tamp-driven-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterReactiveComponent } from './MyComponent/register-reactive/register-reactive.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {AuthServiceService} from './MyComponent/auth-service.service';
import { DeleteUserComponent } from './MyComponent/delete-user/delete-user.component';
import { EditUserComponent } from './MyComponent/edit-user/edit-user.component';
import { GetAllDataComponent } from './MyComponent/get-all-data/get-all-data.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { CustomPipesComponent } from './MyComponent/custom-pipes/custom-pipes.component';
import { CheckGenderPipe } from './pipes/check-gender.pipe';
import { ColorChangeDirective } from './color-change.directive'
import { LoginComponent } from './lazyLoading/login/login.component';
import { ListComponent } from './lazyLoading/list/list.component';
import { GetAllUserComponent } from './MyComponent/get-all-user/get-all-user.component';
import {NgxPaginationModule} from 'ngx-pagination'
import { AuthInterceptor } from './Interceptor/auth.interceptor';
import {FilterPipePipe} from './MyComponent/custom-pipes/filter-pipe.pipe'
import { ToastrModule } from 'ngx-toastr';
import { ValidationFormModule } from './MyComponent/validation/validation-form.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosListComponent,
    AddTodoComponent,
    AboutComponent,
    TampDrivenFormComponent,
    RegisterReactiveComponent,
    DeleteUserComponent,
    EditUserComponent,
    GetAllDataComponent,
    UsdInrPipe,
    CustomPipesComponent,
    CheckGenderPipe,
    ColorChangeDirective,
    LoginComponent,
    ListComponent,
    GetAllUserComponent,
    FilterPipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    ValidationFormModule
  ],
  exports: [NgxPaginationModule],
  providers: [
    AuthServiceService,
    {provide: HTTP_INTERCEPTORS ,useClass : AuthInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
