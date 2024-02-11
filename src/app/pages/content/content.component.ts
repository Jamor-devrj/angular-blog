import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {  
  @Input()
  photoCover:string = "https://unblast.com/wp-content/uploads/2022/08/Programmer-Illustration-Dark.jpg"
  @Input()
  contentTitle:string = "MINHA NOTÍCIA"
  @Input()
  contentDescription:string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi non, tempore id quos nostrum vitae numquam fuga fugiat, eum nemo perspiciatis natus doloremque quisquam unde sequi rerum voluptas voluptates enim?"

  constructor(
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
