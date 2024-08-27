import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared';
import { MessageService } from '../../core/services';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss'
})
export class ProtectedComponent implements OnInit {
  message = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getProtectedResource()
      .subscribe((response) => {
        const {data, error} = response;

        if (data) {
          this.message = JSON.stringify(data, null, 2);
        }

        if (error) {
          this.message = JSON.stringify(error, null, 2);
        }
      });
  }
}
