import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeContactComponent } from './aboutme-contact.component';

describe('AboutmeContactComponent', () => {
  let component: AboutmeContactComponent;
  let fixture: ComponentFixture<AboutmeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutmeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
