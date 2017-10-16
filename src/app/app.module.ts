import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginModalComponent } from './fixed/login-modal/login-modal.component';
import { SearchModalComponent } from './fixed/search-modal/search-modal.component';
import { MainHomeComponent } from './unfixed/main-home/main-home.component';
import { SidebarComponent } from './fixed/sidebar/sidebar.component';
import { TopbarComponent } from './fixed/topbar/topbar.component';
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
import { SignUpTermsComponent } from './unfixed/sign-up-terms/sign-up-terms.component';
import { SignUpPrivacyComponent } from './unfixed/sign-up-privacy/sign-up-privacy.component';
import { IntroPageComponent } from './fixed/intro-page/intro-page.component';

import { IntroPageService } from './fixed/intro-page/intro-page.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent,
    SearchModalComponent,
    MainHomeComponent,
    SidebarComponent,
    TopbarComponent,
    BoardComponent,
    AlbumComponent,
    FileRoomComponent,
    MainHotComponent,
    MainGroupComponent,
    MainCarouselComponent,
    MainCategoryComponent,
    ProfilePageComponent,
    UserListComponent,
    SignUpComponent,
    SignUpTermsComponent,
    SignUpPrivacyComponent,
    IntroPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [IntroPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
