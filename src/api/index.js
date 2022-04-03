export const HotelsCost = async() => {
    const request = await fetch('http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1');
    return await request.json();
}