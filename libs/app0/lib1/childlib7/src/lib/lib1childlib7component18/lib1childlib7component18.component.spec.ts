import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib7component18Component } from './lib1childlib7component18.component';

describe('Lib1childlib7component18Component', () => {
  let component: Lib1childlib7component18Component;
  let fixture: ComponentFixture<Lib1childlib7component18Component>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Lib1childlib7component18Component],
        teardown: { destroyAfterEach: false },
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
