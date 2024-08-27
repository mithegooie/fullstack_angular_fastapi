import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared';
import { MessageService } from '../../core/services';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent implements OnInit {
  message = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getPublicResource()
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
