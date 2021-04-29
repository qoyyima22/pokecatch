export const validate = (rules, value) => {
    let temp = []
    rules.forEach((el) => {
        if(el.rule(value)) {
            temp.push(el.message)
        }
    })

    return temp
}