import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { resolve } from 'dns';

import { userFake, UserServiceFake } from '../user/mock/user.service.mock';
import { UserService } from '../user/user.service';
import { HomeComponent } from './home.component';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [HomeComponent],
      providers: [
        {
          provide: UserService, useClass: UserServiceFake
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);

    spyOn(component, 'initVariables').and.callFake((): any => { });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.initVariables).toHaveBeenCalled();
  });

  it('Testing method initVariables', fakeAsync(() => {
    (<jasmine.Spy>component.initVariables).and.callThrough();
    spyOn(userService, "getUserInformation").and.callFake((): any => {
			new Promise(resolve => {
				resolve(userFake());
			});
		});
    const result = component.initVariables();
    tick();

    expect(userService.getUserInformation).toHaveBeenCalled();
    expect(result).not.toBeNull();
  }));
});
