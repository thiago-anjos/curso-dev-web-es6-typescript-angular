import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bd } from 'src/app/services/bd.service';
import * as firebase from 'firebase';
import { Progress } from 'src/app/services/progress.service';
import { interval, Subject, takeUntil } from 'rxjs';
import { UploadStatus } from './upload-status';
import { uploadImageStatus } from 'src/app/services/enum-upload-image';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.scss'],
})
export class IncluirPublicacaoComponent implements OnInit {
  public email: string = '';
  public imagem: any = null;

  public enumUpload = uploadImageStatus;

  public upload: UploadStatus = {
    publishProgress: uploadImageStatus.PENDING,
    uploadPercentagem: 0,
  };

  public formulario: FormGroup = new FormGroup({
    titulo: new FormControl(''),
  });

  @Output() public atualizarTimelineEmitter: EventEmitter<any> =
    new EventEmitter<any>();

  constructor(private Bd: Bd, private progress: Progress) {}

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user?.email) return;
      this.email = user?.email;
    });
  }

  publicar(): void {
    this.Bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0],
    });

    let acompanhamentoUpload = interval(1000);

    let stop: Subject<any> = new Subject<boolean>(); // This is the one which will stop the observable ( unsubscribe a like mechanism )

    acompanhamentoUpload.pipe(takeUntil(stop)).subscribe(() => {
      this.upload.publishProgress = this.enumUpload.RUNNING;

      this.upload.uploadPercentagem = Math.round(
        (this.progress.state.bytesTransferred /
          this.progress.state.totalBytes) *
          100
      );

      if (this.progress.status === this.enumUpload.DONE) {
        this.upload.publishProgress = this.enumUpload.DONE;
        stop.next(false);
        this.atualizarTimelineEmitter.emit(this.enumUpload.DONE);
      }
    });
  }

  preparaImageUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files;
  }
}
