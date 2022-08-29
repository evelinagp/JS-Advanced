function heroicInventory(array) {
    const result = [];
    array.forEach(element => {
        let [name , level, items] = element.split(' / ');
        result.push({
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        })
    });
    return JSON.stringify(result);
}