import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  usuarios = "";
  pass = "";
  usu=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.usu = this.navParams.get("users")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  clickAgregar()
  {
    if(this.pass.length > 7)
    {
      let usuarios = new usuario();
      let mail = usuarios.getMail();
      let pass = usuarios.getPass();

      this.usu.push({
        usuario: mail + '/' + pass,
        user: this.usuarios
      });
      this.usuarios = "";

      this.storage.set('usuarios', JSON.stringify(this.usuarios));
    }

    else{
      console.log('la contraseña tiene que tener mínimo 8 caracteres');
      const alert = this.alertCtrl.create({
        title: 'Oos!',
        subTitle: 'La nota tiene 0 letras',
        buttons: ['OK']
      });
      alert.present();
    }
  }
 

}

