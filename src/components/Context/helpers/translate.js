export const translate = (language, key) => {
    const dictionary = {
        login: {
            vi: 'Đăng nhập',
            en: 'Login'
        },
        hello: {
            vi: "Xin chào",
            en: 'Hello'
        }
    }
    return dictionary[key][language]
}