import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { PublicacoesModel } from '../components/home/publicacoes/publicacoes-model';
import { uploadImageStatus } from './enum-upload-image';
import { Progress } from './progress.service';

@Injectable()
export class Bd {
  constructor(private progress: Progress) {}

  public publicar(publicacao: any): void {
    firebase
      .database()
      .ref(`publicacoes/${btoa(publicacao.email)}`)
      .push({
        titulo: publicacao.titulo,
      })
      .then((res: any) => {
        let nomeImagem: string = res.key;
        firebase
          .storage()
          .ref()
          .child(`imagens/${nomeImagem}`)
          .put(publicacao.imagem)
          .on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot: any) => {
              //acompanhamento do progresso do upload
              this.progress.status = uploadImageStatus.PENDING;
              this.progress.state = snapshot;
            },
            (error) => {
              this.progress.status = uploadImageStatus.ERROR;
            },
            () => {
              //finalização do processo
              this.progress.status = uploadImageStatus.DONE;
            }
          );
      });
  }

  public consultaPublicacoes(email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(`publicacoes/${btoa(email)}`)
        .once('value')
        .then((snapshot) => {
          let publicacoes: Array<PublicacoesModel> = [];
          snapshot.forEach((childSnapshot: any) => {
            let publicacao = childSnapshot.val();

            // consultar a url da imagem
            firebase
              .storage()
              .ref()
              .child(`imagens/${childSnapshot.key}`)
              .getDownloadURL()
              .then((url: string) => {
                publicacao.url_image = url;

                //consultar nome do usuário
                firebase
                  .database()
                  .ref(`usuario_detalhe/${btoa(email)}`)
                  .once('value')
                  .then((snapshot: any) => {
                    publicacao.nome_usuario = snapshot.val().username;
                    publicacoes.push(publicacao);
                  });
              });
          });
          resolve(publicacoes);
        });
    });
  }
}
