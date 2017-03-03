export default function tagParser(entry){
    entry.tags = entry.text.match(/#[a-z]*/ig);
    return entry;
}
