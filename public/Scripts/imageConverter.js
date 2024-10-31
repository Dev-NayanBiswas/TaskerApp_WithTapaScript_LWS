function imageConverter(img){
    return new URL(`../../src/assets/${img}`, import.meta.url).href
}

export {imageConverter}