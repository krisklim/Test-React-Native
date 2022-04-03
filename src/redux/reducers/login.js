import { inputName, inputPassword, validError } from "../constans";

//принимает текущее состояние, тип изменения и дополнительные данные. Возвращает обновленное состояние
const login = (state = {value: ''}, {type}) => {
    switch(type) {
        case inputName: return {...state, value: state.value};
        case inputPassword: return {...state, value: state.value};

        default: return state;
    }
}

export default login;