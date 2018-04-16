import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';

fdescribe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ SigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a signInFormGroup', () => {
    expect(component.signInFormGroup).toBeDefined();
  });
  it('should have a username control', () => {
    expect(component.signInFormGroup.controls.username).toBeDefined();
  });
  it('should have required username', () => {
    const control = component.signInFormGroup.controls.username;
    expect(control.errors.required).toBeDefined();
  });
  it('should have required email', () => {
    const control = component.signInFormGroup.controls.username;
    expect(control.errors.email).toBeDefined();
  });
  it('should have a password control', () => {
    expect(component.signInFormGroup.controls.password).toBeDefined();
  });
  it('should require min length of 6', () => {
    const control = component.signInFormGroup.controls.password;
    component.signInFormGroup.setValue({username:'sa',password:'bad'});

    expect(control.errors).toBeDefined();
    expect(control.errors.minlength.requiredLength).toEqual(6);
  });
  it('should have an onsubmit method', () => {
    expect(component.onSubmit).toBeDefined();
  });
  it('should prepare data model with form values', () => {
    component.signInFormGroup.setValue({username: 'stu', password: '1234'});

    expect(component.prepareSignInModel()).toBeDefined();
    const signInModel = component.prepareSignInModel();
    expect(signInModel.username).toEqual('stu');
    expect(signInModel.password).toEqual('1234');


  });


});
