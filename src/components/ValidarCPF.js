import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ValidarCPF = () => {
    const { register, handleSubmit, errors } = useForm();
    const [cpf, setCpf] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = () => {
        if (cpfValidator(cpf)) {
            setMessage("CPF válido");
        } else {
            setMessage("CPF inválido");
        }
    };

    const cpfValidator = cpf => {
        if (cpf.length !== 11) {
            return false;
        }

        let rest = 0;
        let sum = 0;

        cpf = cpf.split("");

        for (let i = 9; i > 1; i--) {
            sum = sum + cpf[9 - i] * i;
        }

        rest = (sum * 10) % 11;

        if (rest === 10 || rest === 11) {
            rest = 0;
        }

        if (rest !== cpf[9]) {
            return false;
        }

        rest = 0;

        for (let i = 10; i > 1; i--) {
            sum = sum + cpf[10 - i] * i;
        }

        rest = (sum * 10) % 11;

        if (rest === 10 || rest === 11) {
            rest = 0;
        }

        if (rest !== cpf[10]) {
            return false;
        }

        return true;
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="cpf"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    ref={register({ required: true })}
                />
                {errors.cpf && errors.cpf.type === "required" && (
                    <span className="error">Campo obrigatório</span>
                )}
                <button type="submit">Validar CPF</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default ValidarCPF;
