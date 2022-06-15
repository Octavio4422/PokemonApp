export default function validation(input){
    const error = {}

    if (input.name.length > 20) {
        error.name = "Name must be less than or equal to 20 characters";
      } else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
        error.name = "Name must be a string";
      } else if (!input.name) {
        error.name = "Name cannot be empty";
      }

      if (input.height < 0) {
        error.height = "Height must be greater than or equal to 0";
      } else if (input.height > 255) {
        error.height = "Height must be less than or equal to 255";
      } else if (!input.height) {
        error.height = "Height cannot be null";
      }
      
      if (input.weight < 0) {
        error.weight = "Weight must be greater than or equal to 0";
      } else if (input.weight > 255) {
        error.weight = "Weight must be less than or equal to 255";
      } else if (!input.weight) {
        error.weight = "Height cannot be null";
      }

      if(!input.image){
        error.image = "Image cannot be empty"
      }
      if(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(input.image)){
        error.image = "Image should be a valid url"
      }

    return error
}