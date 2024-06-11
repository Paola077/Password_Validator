import { passwordValid } from "../src/password-validator"


describe ("Validador de contraseña", () => {
    it ('Debe tener al menos 8 caracteres', () => 
{
        expect(passwordValid.length >= 8)
})}
)