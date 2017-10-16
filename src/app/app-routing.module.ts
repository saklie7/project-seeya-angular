import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './fixed/sidebar/sidebar.component';
import { MainHomeComponent } from './unfixed/main-home/main-home.component';
import { BoardComponent } from './unfixed/board/board.component';
import { AlbumComponent } from './unfixed/album/album.component';
import { FileRoomComponent } from './unfixed/file-room/file-room.component';
import { MainHotComponent } from './unfixed/main-hot/main-hot.component';
import { MainGroupComponent } from './unfixed/main-group/main-group.component';
import { MainCarouselComponent } from './unfixed/main-carousel/main-carousel.component';
import { MainCategoryComponent } from './unfixed/main-category/main-category.component';
import { ProfilePageComponent } from './fixed/profile-page/profile-page.component';
import { UserListComponent } from './fixed/user-list/user-list.component';
import { SignUpComponent } from './unfixed/sign-up/sign-up.component';
import { IntroPageComponent } from './fixed/intro-page/intro-page.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'app', component: AppComponent },
  { path: 'main-home', component: MainHomeComponent },
  { path: 'board', component: BoardComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'file-room', component: FileRoomComponent },
  { path: 'main-hot', component: MainHotComponent },
  { path: 'main-group', component: MainGroupComponent },
  { path: 'main-carousel', component: MainCarouselComponent },
  { path: 'main-category', component: MainCategoryComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'intro-page', component: IntroPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
