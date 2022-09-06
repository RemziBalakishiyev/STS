import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SharedModule } from './Shared/shared.module';
import { AccountModule } from './modules/account/account.module';
import { SidebarComponent } from './modules/Sidebar/feature/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [SharedModule, AccountModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
