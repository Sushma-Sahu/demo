import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { TampDrivenFormComponent } from './MyComponent/tamp-driven-form/tamp-driven-form.component';
import { RegisterReactiveComponent } from './MyComponent/register-reactive/register-reactive.component';
import { GetAllDataComponent } from './MyComponent/get-all-data/get-all-data.component';
import { EditUserComponent } from './MyComponent/edit-user/edit-user.component';
import { CustomPipesComponent } from './MyComponent/custom-pipes/custom-pipes.component';
import { ValidationFormComponent } from './MyComponent/validation/validation.component';

const routes: Routes = [
  { path: 'todo', component: TodosComponent },
  { path: '', component: TampDrivenFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: TampDrivenFormComponent },
  { path: 'register-reactive', component: RegisterReactiveComponent },
  { path: 'Display-Data', component: GetAllDataComponent },
  { path: 'Edit/:id/user', component: EditUserComponent },
  { path: 'CustomPipes', component: CustomPipesComponent },
  { path: 'validation', component: ValidationFormComponent },
  {
    path: 'LazyLoading', loadChildren: () => import('./lazyLoading/lazy-loading.module')
      .then(mod => mod.LazyLoadingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//tamp-driven-form/