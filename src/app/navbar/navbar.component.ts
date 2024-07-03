import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  downloadFile() {
    let papers = document.body.querySelectorAll('.paper');
    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    let images: string[] = [];

    papers.forEach((paper, index) => {
      html2canvas(paper as HTMLElement, {useCORS: true}).then(canvas => {
        // Few necessary setting options
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var position = 0;
        let contentDataURL = canvas.toDataURL('image/png');

        images.push(contentDataURL);
        if (images.length === papers.length && images[0] !== '') {
          images.forEach((image, index) => {
            pdf.setPage(index+1).addImage(image, 'PNG', 0, position, imgWidth, imgHeight);
            index !== images.length -1 && pdf.addPage();
          })
          pdf.save('fiche-d\'identification.pdf'); // Generated PDF
          // window.open(pdf.output('bloburl'), '_blank')
        }
      });
    })
  }
}
