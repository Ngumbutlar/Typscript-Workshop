// function that takes a subject, verb and list of objects and return a grammatically correct sentence

export const sentence = (
    subject: string,
    verb: string,
    ...objects: string[]
): string => {
    return `${subject} ${verb} ${arraytpObjectSegment(objects)}.`;
};

export const arraytpObjectSegment = (words: string[]): string => {
    if(words.length < 1){
        return '';
    }
    if(words.length ===1){
        return `${words[0]}`;
    }
    let segment: string = '';
    for( let i: number =0; i <words.length; i++){
        if(i === words.length - 1){
            segment += `and ${words[i]}`;
        } else{
            segment += `${words[i]},`;
        }
    }
    return segment;
};

export const capitalize = ( sentence: string): string => {
    return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1).toLowerCase()}`;
};

// console.log(sentence('the cat', 'ate', 'apples', 'cheese', 'pancake'));
// console.log(sentence('the cat', 'ate', 'slept', 'all day'));
// console.log(sentence('the cat', 'ate', 'sneezed'));