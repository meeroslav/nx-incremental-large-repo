import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib6component29Component } from './lib3childlib6component29.component';

describe('Lib3childlib6component29Component', () => {
  let component: Lib3childlib6component29Component;
  let fixture: ComponentFixture<Lib3childlib6component29Component>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Lib3childlib6component29Component],
        teardown: { destroyAfterEach: false },
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
