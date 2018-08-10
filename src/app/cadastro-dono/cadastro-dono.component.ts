import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-dono',
  templateUrl: './cadastro-dono.component.html',
  styleUrls: ['./cadastro-dono.component.css']
})
export class CadastroDonoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  inputFoto(event) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];
      const formData = new FormData();
      formData.append('foto', foto);

      let canvas, ctx, img, base64;
      canvas = <HTMLCanvasElement> document.createElement('canvas');
      ctx = canvas.getContext('2d');
      img = new Image();
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);
        base64 = canvas.toDataURL('image/png');

        console.log(base64);
      };

      img.src = URL.createObjectURL(event.target.files[0]);

      try {
        // this.http.post('http://localhost:8080/fotos', formData)
      // .subscribe(resposta => console.log('Imagem OK!'));
        this.http.post('http://localhost:8080/fotos', base64)
      .subscribe(resposta => console.log('Imagem OK!'));
    } catch (error) {
       console.log(error);
      }
    }
  }

  salvar() {
    console.log('Ainda não ta salvando, mas relaxa!');
  }
}
