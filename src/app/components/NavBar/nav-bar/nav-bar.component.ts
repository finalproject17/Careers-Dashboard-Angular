import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CompanyserviceService } from '../../../services/companyservice.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule,CommonModule],
templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  company: any = {};
  companyId: string | null = '';

  constructor(
    private _companyService: CompanyserviceService,
    private _activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRouter.paramMap.subscribe((paramMap) => {
      this.companyId = paramMap.get('companyId');
      if (this.companyId) {
        this.getById();
      }
    });
  }

  getById() {
    if (this.companyId) {
      this._companyService.getCompanyDetails(this.companyId).subscribe((response) => {
        if (response && response.message === 'success') {
          this.company = response.data;
          console.log(this.company);
        }
      });
    }
  }

  @ViewChild('navbar') navbar!: ElementRef;
  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}


