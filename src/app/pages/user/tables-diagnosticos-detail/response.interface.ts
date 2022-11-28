export interface ResponseRoles{
    "diagnosticoRolIngeniero":{
        "fk_diagnostico":number,
        "fk_rol_ingeniero":number,
        "id_diagnostico_rol_ingeniero":number,
        "porcentaje_similitud":number
    },
    "rolIngeniero":{
        "descripcion":string,
        "id_rol_ingeniero":number,
        "nombre":string
    }
}