var ImagePicker = require('react-native-image-picker');
import uploadFile from './uploadFile'

export default(callback) => {

    const options = {
        title: 'Seleccionar foto',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Tomar foto',
        chooseFromLibraryButtonTitle: 'Galería',
        mediaType: 'photo',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    };

    ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            callback('ImagePicker Error: ')
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            uploadFile(response.fileName, response.path, response.type, (error, url, percentageUpload) => {
                callback(error, url, percentageUpload)
            })
        }
    });

}