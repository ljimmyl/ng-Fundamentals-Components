import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BananaInABoxComponent } from './banana-in-a-box.component';

describe('BananaInABoxComponent', () => {
  let component: BananaInABoxComponent;
  let fixture: ComponentFixture<BananaInABoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BananaInABoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananaInABoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
