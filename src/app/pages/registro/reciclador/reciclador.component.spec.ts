import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecicladorComponent } from './reciclador.component';

describe('RecicladorComponent', () => {
  let component: RecicladorComponent;
  let fixture: ComponentFixture<RecicladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecicladorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecicladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
