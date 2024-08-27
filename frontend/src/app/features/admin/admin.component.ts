import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../core/services';
import { SharedModule } from '../../shared';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  message = '';

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
      this.messageService.getAdminResource().subscribe((response) => {
        const {data, error} = response;

        if (data) {
          this.message = JSON.stringify(data, null, 2);
        }

        if (error) {
          this.message = JSON.stringify(error, null, 2)
        }
      });
  }
}
