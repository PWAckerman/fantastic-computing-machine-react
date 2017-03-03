export function srcSelector(url){
    if(url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i)){
        return url;
    } else {
        return './assets/' + url.slice(2)
    }
}
