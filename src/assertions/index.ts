let hello=load();

// throwing error because type is unknown so we need to check the type first and then perform the operation

if(typeof hello==="string"){
    const trimmed=hello.trim()
}

const trimmed=(hello as string).trim()
