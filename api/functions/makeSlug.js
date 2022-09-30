// make slug
export const makeSlug = (name) => {

    let arr = name.split(' ');
    return arr.join('-').toLowerCase()

}