const validateEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
};
const validateCPF = (cpf) => {
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regexCPF.test(cpf);
};

const validatePhone = (phone) => {
    const regexPhone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return regexPhone.test(phone);
};

const validateStatus = (status) => {
    const allStatus = ["ativo", "inativo", "desativo" ,"aguardando"];
    return allStatus.includes(status);
};

const formatCPF = (cpf) => {
    let formated = cpf.replace(/[^\d]/g, "")
    formated = formated.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return formated
}
const formatPhone = (phone) => {
    let formated = phone.replace(/\D/g, "");
    formated = formated.replace(/^(\d{2})(\d)/g, "($1) $2");
    formated = formated.replace(/(\d)(\d{4})$/, "$1-$2");
    return formated
}


export default {
    validateEmail,
    validateCPF,
    validatePhone,
    validateStatus,
    formatCPF,
    formatPhone,
}