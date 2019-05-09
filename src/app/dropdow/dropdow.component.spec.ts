import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowComponent } from './dropdow.component';

describe('DropdowComponent', () => {
  let component: DropdowComponent;
  let fixture: ComponentFixture<DropdowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
