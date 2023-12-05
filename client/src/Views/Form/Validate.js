const Validate = (input) => {
  let errors = {};
  const regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;

  if (!input.name) {
    errors.name = "A name is required";
  } else if (input.name.length > 10) {
    errors.name = "Must be less than 10 characters";
  }

  if (!regexImage.test(input.image)) {
    errors.image = "Please enter a valid URL";
  } else if (!input.image) {
    errors.image = "Image cannot be empty";
  }

  const isPositiveNumber = (value) => /^[0-9]+$/.test(value);

  if (!isPositiveNumber(input.hp)) {
    errors.hp = "HP must be a positive number";
  }

  if (!isPositiveNumber(input.attack)) {
    errors.attack = "Attack must be a positive number";
  }

  if (!isPositiveNumber(input.defense)) {
    errors.defense = "Defense must be a positive number";
  }

  if (input.speed && !isPositiveNumber(input.speed)) {
    errors.speed = "Speed must be a positive number";
  }

  if (input.height && !isPositiveNumber(input.height)) {
    errors.height = "Height must be a positive number";
  }

  if (input.weight && !isPositiveNumber(input.weight)) {
    errors.weight = "Weight must be a positive number";
  }

  if (input.types.length < 2) {
    errors.types = "You must choose at least 2 types";
  } else if (input.types.length > 2) {
    errors.types = "You cannot choose more than 2 types";
  }

  return errors;
};

export default Validate;