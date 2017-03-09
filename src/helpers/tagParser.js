export default function tagParser(entry){
    entry.tags = entry.text.match(/#[a-z]*/ig);
    entry.tags = entry.tags.map((tag) => {
        return tag.substr(1);
    })
    return entry;
}
