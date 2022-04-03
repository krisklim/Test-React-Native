import { inputName, inputPassword, signBtn } from "../constans";

export const getName = (text) => ({
    type: inputName,
    value: text,
});

export const getPassword = (text) => ({
    type: inputPassword,
    value: text,
});

export const validSign = (login, password) => ({
    type: signBtn,
    value: [login, password],
})