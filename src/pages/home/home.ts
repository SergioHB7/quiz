import { Component, keyframes } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { AgregarPage } from '../agregar/agregar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  registrar= RegistrarPage;
  agregar= AgregarPage;
  usu= "";
  cont= "";
  usuarios=[{Correo: "", Pass: ""}]

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage:Storage) {
    this.storage.keys()
    .then(keys =>{
      console.log(keys);
      if(keys.some(key => key == 'usuarios')){
        this.storage.get('usuarios')
        .then(usuarios =>{
          this.usuarios = JSON.parse(usuarios);
        });
      }
    });

  }
   
  Iniciar()
  {
    let index = this.usuarios.findIndex(u => u.usu == this.usu);
    let index2 = this.usuarios.findIndex(p => p.cont == this.cont);

    if(index == index2)
    {
      const alert = this.alertCtrl.create({
        title: 'Login exitoso',
        buttons: ['OK']
    });
    alert.present();
  }
}

  Registrar()
 {
   this.navCtrl.push(this.registrar)
 }
 
}
