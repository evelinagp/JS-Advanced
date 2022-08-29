function factory(library, orders) {
    return orders.map(compose);

    function compose(order) {

        //Create empty objects and copy properties from template  
        const result = Object.assign({}, order.template);

        //Compose methods from library for every item in parts
        for (const part of order.parts) {
            result[part] = library[part];
        }
        //Return result
        return result;
    }
}