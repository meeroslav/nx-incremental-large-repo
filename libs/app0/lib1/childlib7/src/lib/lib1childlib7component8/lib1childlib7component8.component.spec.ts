import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib7component8Component } from './lib1childlib7component8.component';

describe('Lib1childlib7component8Component', () => {
  let component: Lib1childlib7component8Component;
  let fixture: ComponentFixture<Lib1childlib7component8Component>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Lib1childlib7component8Component],
        teardown: { destroyAfterEach: false },
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
