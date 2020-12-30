const get_attachment = (path, name) => encodeURI(path.substring(2) + name),
    capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = {
    get_attachment: get_attachment,
    capitalizeFirstLetter: capitalizeFirstLetter
};
