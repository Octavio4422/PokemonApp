export default function typeParser(input, value) {
    let response = []
    if(Array.isArray(input.types)){
        response = input.types.push(value)
        console.log(input.types)
    }
    return response
}

