import { Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MyItem } from 'src/app/interfaces/my-item';
import { UserService } from 'src/app/services/user.service';
import { SubscriptionContainer } from 'src/app/shared/subscription-container';

@Component({
  selector: 'app-residentdetail',
  templateUrl: './residentdetail.component.html',
  styleUrls: ['./residentdetail.component.css']
})
export class ResidentdetailComponent implements OnInit, OnDestroy, OnChanges {

  subs = new SubscriptionContainer();

  not_edit_firstname: Boolean;
  not_edit_fathername: Boolean;
  not_edit_mothername: Boolean;
  not_edit_dob: Boolean;
  not_edit_gender: Boolean;
  not_edit_category: Boolean;
  not_edit_email: Boolean;
  not_edit_religion: Boolean;
  not_edit_address: Boolean;
  not_edit_phone: Boolean;
  not_edit_adhnum: Boolean;

  not_edit_firstname_hindi: Boolean;
  not_edit_fathername_hindi: Boolean;
  not_edit_mothername_hindi: Boolean;

  fileToUpload: File = null;
  upload = true;


  // subs = new SubscriptionContainer();

  residentForm: FormGroup;
  submitted = false;


  admissionMode: string;
  appnumber: any;
  spinnerstatus: boolean;
  option: string;
  enrolvalid: boolean;
  enrvaild: boolean;
  filests: any;
  filename: string;
  filepath: string;
 
  rolelabel: string;
  rolewidth: string;
  roledata:MyItem[]=[];

  deptlabel: string;
  deptwidth: string;
  deptdata:MyItem[]=[];


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userservice: UserService,
    private elementRef: ElementRef,
   ) {


  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {

    this.rolewidth="100%";
    this.rolelabel= "Select Role";
    this.residentForm = this.formBuilder.group({
      //title: ['', Validators.required],
      appnumber: [''],
      firstName: ['', Validators.required],
      fatherFirstName: ['', Validators.required],
      fatherMiddleName: [''],
      fatherLastName: [''],

      motherFirstName: ['', Validators.required],
      motherMiddleName: [''],
      motherLastName: [''],

      gender: ['', Validators.required],
      category: ['', Validators.required],

      religion: ['', Validators.required],
      physicallyHandicapped: ['', Validators.required],
      minority: ['', Validators.required],
      perAddress: ['', Validators.required],
      officePhone: ['', Validators.required],
      aadhaarNumber: ['', Validators.required],

      enrollmentNumber: [''],
      lastdegree: ['', Validators.required],

      studentNameinHindi: ['', Validators.required],
      fatherNameinHindi: ['', Validators.required],
      motherNameinHindi: ['', Validators.required],

      dateOfBirth: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      primaryEmailId: ['', [Validators.required, Validators.email]],
      status: [''],
      studentId: [''],
      sessionStartDate: [''],
      sessionEndDate: [''],
      programId: [''],
      masterExists: [''],

      regRollNumber: [''],
      registrationNumber: [''],

      entityId: [''],
      branchCode: [''],
      newSpecialization: [''],
      semesterCode: [''],
      sequenceNumber: [''],
      admissionMode: [''],
      attempt: [''],
      rollNumberGroupCode: [''],
      longField: [''],






    });

    this.roledata.push(
      {id:"1",label:"Doctor"},
      {id:"2",label:"Engineer"},
      {id:"3",label:"Lawyer"},
      {id:"4",label:"Teacher"},
      {id:"5",label:"Others"}
      );

      this.deptdata.push(
        {id:"100",label:"SNC"},
        {id:"101",label:"Construction"},
        {id:"102",label:"Bhandar Ghar"},
        {id:"103",label:"Updesh Vibagh"},
        {id:"104",label:"Others"}
        );


  }

  // convenience getter for easy access to form fields
  get f() {
          
    return this.residentForm.controls; }

  ngOnDestroy(): void {
    this.subs.dispose();
    this.elementRef.nativeElement.remove();


  }

}
