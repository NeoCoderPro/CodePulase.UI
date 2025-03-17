import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  imports: [],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css',
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  id: string | null = null;
  paramsSubcription?: Subscription;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.paramsSubcription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      },
    });
  }
  ngOnDestroy(): void {
    this.paramsSubcription?.unsubscribe();
  }
}
