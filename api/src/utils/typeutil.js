const cleanTypes = (arr) =>
    arr.map((data) => {
        return {
            name: data.name
        }
    });

module.exports = cleanTypes;