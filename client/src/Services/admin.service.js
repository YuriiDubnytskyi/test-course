export const isIdMainExist = (data,id) => {
    const found = data.find(element=>element.idProductTitle == id)
    return found === undefined ? true : false
}
export const isIdSubMainExist = (data,id) => {
    const found = data.map(el => el.subTitle.find(element=>element.idProductSubTitle == id))
    return found.find(el => el !== undefined) === undefined ? true : false
}

export const isIdProductExist = (data,id) => {
    if(!isIdMainExist(data,id)) return false
    return true
    
}