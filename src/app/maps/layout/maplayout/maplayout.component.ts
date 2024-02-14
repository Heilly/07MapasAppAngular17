import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-maplayout',
  templateUrl: './maplayout.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, SidemenuComponent],
})
export class MaplayoutComponent {}
