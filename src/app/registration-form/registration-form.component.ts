import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  requestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snack: MatSnackBar,
    private router: Router
  ) {
    // Inicializar el formulario después de que fb esté disponible
    this.requestForm = this.fb.group({
      nombresCompletos: ['', [Validators.required, Validators.pattern(/^[A-Za-zÁÉÍÓÚÑ ]+$/), Validators.minLength(5)]],
      cedula: ['', [Validators.required, Validators.pattern(/^\d{6,12}$/)]],
      lugarExpedicion: ['', Validators.required],
      fechaExpedicion: [null, Validators.required],
      estadoCivil: ['', Validators.required],
      genero: [null, Validators.required],
      cabezaFamilia: [null, Validators.required],
      fechaNacimiento: [null, Validators.required],
      lugarNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      estrato: [null, [Validators.required, Validators.min(1), Validators.max(6)]],
      personasCargo: [null, [Validators.required, Validators.min(0)]],
      barrio: ['', Validators.required],
      municipio: ['', Validators.required],
      departamento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{7}$/)]],
      celular: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      nivelEscolar: [null, Validators.required],

      conyugeNombre: [''],
      conyugeCedula: ['', Validators.pattern(/^\d{6,12}$/)],
      conyugeFechaNacimiento: [null],
      conyugeOcupacion: [''],

      docenteActivo: [false],
      docentePensionado: [false],
      docenteRetirado: [false],
      fechaNombramiento: [null],
      escalafon: [''],
      jornada: [''],
      cargoDocente: [''],
      institucion: [''],
      institucionTelefono: ['', Validators.pattern(/^\d{7}$/)],
      localidad: [''],

      empresa: [''],
      empleado: [null, Validators.required],
      cargoNoDocente: [''],
      direccionEmpresa: [''],
      telefonoEmpresa: ['', Validators.pattern(/^\d{7}$/)],
      tipoContrato: [''],

      ingresos: ['', Validators.pattern(/^[0-9]+(\.[0-9]{3})*$/)],
      egresos: ['', Validators.pattern(/^[0-9]+(\.[0-9]{3})*$/)],
      activos: ['', Validators.pattern(/^[0-9]+(\.[0-9]{3})*$/)],
      pasivos: ['', Validators.pattern(/^[0-9]+(\.[0-9]{3})*$/)],

      coopA: [''],
      coopB: [''],
      coopC: [''],
      coopD: [''],
      coopE: [''],
      aporteMensual: [null, [Validators.required, Validators.min(1)]],
      entidadPagadora: [''],

      refFamiliarNombre: [''],
      refFamiliarDireccion: [''],
      refFamiliarTelefono: ['', Validators.pattern(/^\d{7}$/)],
      refFamiliarCelular: ['', Validators.pattern(/^\d{10}$/)],

      refPersonalNombre: [''],
      refPersonalDireccion: [''],
      refPersonalTelefono: ['', Validators.pattern(/^\d{7}$/)],
      refPersonalCelular: ['', Validators.pattern(/^\d{10}$/)],

      grupoFamiliar: this.fb.array([]),

      capacitacionCooperativa: [''],
      nivelCapacitacion: [''],
      medioConocio: [''],
      asociadoVincula: [''],
      tieneParentesco: [null],
      parentescoDirectivo: [''],
      nombreDirectivo: [''],
      cargoDirectivo: [''],

      aceptaAutorizacion: [false, Validators.requiredTrue]
    });
  }

  get familiares(): FormArray {
    return this.requestForm.get('grupoFamiliar') as FormArray;
  }

  addFamiliar(): void {
    this.familiares.push(
      this.fb.group({
        nombre: ['', Validators.required],
        identificacion: ['', [Validators.required, Validators.pattern(/^\d{6,12}$/)]],
        fechaNacimiento: [null, Validators.required],
        estadoCivil: [''],
        parentesco: [''],
        nivelEducativo: ['']
      })
    );
  }

  removeFamiliar(index: number): void {
    this.familiares.removeAt(index);
  }

  onSubmit(): void {
    if (this.requestForm.invalid) {
      this.requestForm.markAllAsTouched();
      this.snack.open('Por favor complete todos los campos requeridos.', 'Cerrar', { duration: 5000 });
      return;
    }

    const payload = this.requestForm.value;

    this.http.post('https://api.ejemplo.com/solicitud', payload).subscribe({
      next: () => this.afterSuccess(),
      error: () => this.snack.open('Error al enviar. Intenta de nuevo.', 'Cerrar', { duration: 6000 })
    });
  }

  private afterSuccess(): void {
    this.snack.open('Su registro está en trámite. ¡Gracias!', 'Cerrar', { duration: 5000 });
    this.router.navigate(['/']);
  }
}
