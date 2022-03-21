import {Component, OnInit} from '@angular/core';
import {SearchTwitterService} from "../../services/searchTwitter.service";

@Component({
  selector: 'app-twitt-grid',
  templateUrl: './twitt-grid.component.html',
  styleUrls: ['./twitt-grid.component.css'],
  providers: [SearchTwitterService]
})
export class TwittGridComponent implements OnInit {
  public searchString: string;
  public twittsFind: any;
  public userName: string | null
  constructor(
    private _searchTwitts: SearchTwitterService
  ) {
    this.searchString = "";
    this.userName=null;
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem("fullname");
  }

  onClickSearch(): void{
    if (this.searchString!==""){
      this._searchTwitts.searchTwitts(this.searchString).subscribe(response => {
        this.twittsFind = response.statuses;
      }, error => {
        console.log(error);
      })
    }
  }




}
