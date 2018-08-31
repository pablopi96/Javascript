function scriptApiaLogicaFormulario() {
  const frmTratCom = ApiaFunctions.getForm("PL_0_TRATAMIENTO_COMISION_CSS");
  const frmDG = ApiaFunctions.getForm("PL_0_DATOS_GENERALES");

  const eleva = frmTratCom.getField("PL_0_COMISION_ELEVA_STR").getValue();
  const distribuye = frmTratCom.getField("PL_0_SEDISTRIBUYE_STR");
  const cuerpoactual = frmDG.getField("PL_CUERPO_ACTUAL_STR").getValue();
  const frm13 = ApiaFunctions.getForm("PL_13_ORDENA_DISTRIBUIDO");
  const frm217 = ApiaFunctions.getForm("PL_217_ELEVA_SECRETARIA");
  const frm230 = ApiaFunctions.getForm("PL_230_ELEVA_ART163");
  const frm231 = ApiaFunctions.getForm("PL_231_ELEVA_ART147");
  const frm233 = ApiaFunctions.getForm("PL_233_ARCHIVO_FIN_LGL");

  if (eleva == "C") {
    distribuye.setValue(false);
    distribuye.setProperty(IProperty.PROPERTY_VISIBILITY_HIDDEN, true);
    frm13.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
    frm217.setProperty(IProperty.PROPERTY_FORM_HIDDEN, false);
    frm230.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
    frm231.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
    frm233.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
  } else {
    if (eleva == "F") {
      distribuye.setValue(false);
      distribuye.setProperty(IProperty.PROPERTY_VISIBILITY_HIDDEN, true);
      frm13.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
      frm217.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
      frm233.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
      if (cuerpoactual == "CRR") {
        frm230.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm231.setProperty(IProperty.PROPERTY_FORM_HIDDEN, false);
      } else {
        if (cuerpoactual == "CSS") {
          frm230.setProperty(IProperty.PROPERTY_FORM_HIDDEN, false);
          frm231.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        }
      }
    } else {
      if (eleva == "S") {
        distribuye.setValue(false);
        distribuye.setProperty(IProperty.PROPERTY_VISIBILITY_HIDDEN, true);
        frm13.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm233.setProperty(IProperty.PROPERTY_FORM_HIDDEN, false);
        frm217.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm230.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm231.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
      } else if (eleva == "R") {
        distribuye.setValue(false);
        distribuye.setProperty(IProperty.PROPERTY_VISIBILITY_HIDDEN, true);
        frm13.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm217.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm230.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm231.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm233.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
      } else {
        if (cuerpoactual != "CRR") {
          distribuye.setProperty(IProperty.PROPERTY_VISIBILITY_HIDDEN, false);

          if (distribuye.getValue() == true) {
            frm13.setProperty(IProperty.PROPERTY_FORM_HIDDEN, false);
          } else {
            frm13.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
          }
        }
        frm233.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm217.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm230.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
        frm231.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
      }
    }
  }

  if (cuerpoactual == "CRR") {
    distribuye.setValue(false);
    distribuye.setProperty(IProperty.PROPERTY_VISIBILITY_HIDDEN, true);
    frm13.setProperty(IProperty.PROPERTY_FORM_HIDDEN, true);
  }
}
