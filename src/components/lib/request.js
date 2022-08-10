function request(method, url) {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest();
        ajax.open(method, url);
        ajax.send();
        ajax.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } // else {reject(new Error "Error")} выдает ошибку. Почему?
        }
    })
}

export default request;