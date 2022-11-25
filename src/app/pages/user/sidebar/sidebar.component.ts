import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categorias:any;
  constructor(
    private cuestionarioService:CuestionarioService,
    private snack:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cuestionarioService.listarCategorias().subscribe(
      (data:any) => {
        this.categorias = data;
      },
      (error) => {
        this.snack.open('Error al cargar las categorías','',{
          duration:3000
        })
        console.log(error);
      }
    )
  }

}
