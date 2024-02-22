class Impuesto{
    constructor (MontoBrutoAnual, deducciones){
      this.MontoBrutoAnual= MontoBrutoAnual;
      this.deducciones=deducciones;
    }
    get MontoBrutoAnual(){
        return this._MontoBrutoAnual;
    }
    set MontoBrutoAnual(nuevo_MontoBrutoAnual){
        this._MontoBrutoAnual= nuevo_MontoBrutoAnual;
    }
    get deducciones(){
        return this._deducciones;
    }
    set deducciones(nuevas_deducciones){
this._deducciones=nuevas_deducciones;
    }
  }


export default Impuesto