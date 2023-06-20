export const handleDataForAutocomplete = (array) => {
    array.forEach(object => {
        object.label = object.name;
        object.value = object.code
    });
}