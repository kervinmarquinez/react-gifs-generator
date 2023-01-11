
export const getGifs = async(search) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=bKIcPBdhX0l0SGHrciJi841e7P7ehV4I&q=${search}&limit=25`;
    const resp = await fetch(url);
    const {data} = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        url: img.images.downsized_medium.url
    }))

    return gifs

}