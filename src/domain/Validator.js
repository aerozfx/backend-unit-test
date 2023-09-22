export class Validator {
  checkAdult = (age) => {
    if (age < 18) throw new Error("El usuario debe ser mayor de edad");
    return true;
  };

  checkPasswordLength = (password) => {
    if (password.length < 6)
      throw new Error("La contraseña debe tener como minimo 6 caracteres");
    return true;
  };

  checkEmail = (email) => {
    if (email.indexOf === -1) throw new Error("El email debe ser válido");
    return true;
  };
}
