import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { MyItem } from 'src/app/interfaces/my-item';
import { UserService } from 'src/app/services/user.service';
import { ButtonCellRendererComponent } from 'src/app/shared/button-cell-renderer/button-cell-renderer.component';
import { SubscriptionContainer } from 'src/app/shared/subscription-container';
import { ResidentdetailComponent } from '../residentdetail/residentdetail.component';

@Component({
  selector: 'app-residentmaster',
  templateUrl: './residentmaster.component.html',
  styleUrls: ['./residentmaster.component.css']
})
export class ResidentmasterComponent implements OnInit, OnDestroy  {


  housedata:MyItem[]=[];
  residentData:MyItem[]=[];
  houselabel:string;
  combowidth:string;
  subs = new SubscriptionContainer();
  defaultColDef;
  columnDefs: ColDef[]; 
  public dialogref:MatDialogRef<ResidentdetailComponent>;
  

  constructor( private router:Router,
    private userservice:UserService,
    private _Activatedroute:ActivatedRoute,
    private elementRef:ElementRef,
   
   private dialog:MatDialog,
    
    
    private renderer:Renderer2) {

   
   }

  ngOnInit(): void {

    this.houselabel="Select Mohalla";
    this.combowidth="100%";

    this.housedata.push( 
      {id:'3',label:"Prem Nagar"},
      {id:'4',label:"Vidyut Nagar"},
      {id:'5',label:"Swet Nagar"},
      {id:'6',label:"Soami Nagar"}
    )

    this.defaultColDef = {
      resizable: true,
      sortable: true,
      filter: true
         
  };

  this.columnDefs = [
    {
      headerName: 'Seq No',
      maxWidth: 100,
      valueGetter: this.hashValueGetter,
    },
    { headerName:'References',
        cellRendererFramework:ButtonCellRendererComponent,
        cellRendererParams: { onClick: this.onRefClicked.bind(this), label: 'View'}
      },
    { field: 'name',checkboxSelection: true  },
    { field: 'fathername' },
    { field: 'dob' }
  ];
  }


  onRefClicked(e) {
    let sel = e.rowData; //this.agGrid.api.getSelectedRows(); 
    console.log("Reference Add Clicked for rowData", sel);
    //this.agGrid.api.applyTransaction({ remove: [sel]});
    // this.selRequester = sel;
    // this.selReqName = sel.name;
    // this.selReqId = sel.id;
    // console.log("Clicked Requester :", this.selReqName, this.selReqId);
    // this.getAgencyReferencesByStatus();
  }
  onResidentSelected(event){


  }

  onGridReady(event){

  }

  ngOnDestroy(): void {
    this.subs.dispose();
    this.elementRef.nativeElement.remove();
   
  }
  hashValueGetter = function (params) {
  
    return params.node.rowIndex+1;
  };
  
  
  onOkClick(){

    const dialogConfig = new MatDialogConfig();
            
            //dialogConfig.width="90%";
            dialogConfig.height="90%";
            dialogConfig.width="90%"
            dialogConfig.data={
              "studentdata":"DATA",
             

            }
  this.dialogref=this.dialog.open(ResidentdetailComponent,dialogConfig);
  this.dialogref.disableClose = true;
  this.subs.add=this.dialogref.afterClosed().subscribe(result => {

console.log ("Dialog closed",result);
  
   });      

  }

}
