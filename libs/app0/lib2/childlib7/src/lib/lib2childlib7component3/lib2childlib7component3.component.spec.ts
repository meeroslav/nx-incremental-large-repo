import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib7component3Component } from './lib2childlib7component3.component';

describe('Lib2childlib7component3Component', () => {
  let component: Lib2childlib7component3Component;
  let fixture: ComponentFixture<Lib2childlib7component3Component>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Lib2childlib7component3Component],
        teardown: { destroyAfterEach: false },
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
