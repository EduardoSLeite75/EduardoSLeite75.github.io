import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoComponentComponent } from './contato-component.component';

describe('ContatoComponentComponent', () => {
  let component: ContatoComponentComponent;
  let fixture: ComponentFixture<ContatoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
