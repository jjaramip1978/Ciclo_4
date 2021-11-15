export default function validateInfo(values) {
    let errors = {};
  
    //trim para evitar los espacios en blanco
    if (!values.nombre.trim()) {
      errors.nombre = 'Por favor ingrese su nombre';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Por favor ingrese su correo';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Su dirección de correo es incorrecta';
    }

    if (!values.ciudad.trim()) {
        errors.ciudad = 'Por favor ingrese ciudad';
    }

    if (!values.celular) {
        errors.celular = 'Por favor ingrese teléfono';
    }
    
    if (!values.password) {
      errors.password = 'Se requiere ingresar una constraseña';
    } else if (values.password.length < 8) {
      errors.password = 'La constraseña necesita 8 o más carácteres';
    }
  
    if (!values.password2) {
      errors.password2 = 'Se requiere ingresar una constraseña';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Las contraseñas no coinciden';
    }

    return errors;
  }
  