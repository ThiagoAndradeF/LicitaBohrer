import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.scss']
})
export class QrReaderComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  qrCodeFound: boolean = false;
  videoWidth = 640;
  videoHeight = 480;

  ngAfterViewInit(): void {
  }


  handleQrCodeResult(result: string): void {
    console.log('Resultado do QR Code: ', result);
    this.qrCodeFound = true;
    setTimeout(() => this.qrCodeFound = false, 2000);
  }
}
