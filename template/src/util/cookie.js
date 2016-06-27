export const setCookie = (name, value, minute) => {
    var date = new Date();
    var minute = minute ? minute : 2;
    date.setTime(date.getTime() + (minute * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
};

export const getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    };
};

export const delCookie = (name) => {
    setCookie(name, "", -1);
};
