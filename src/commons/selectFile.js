var ImagePicker = require('react-native-image-picker');
import uploadFile from './uploadFile'


export default (callback) => {

    const options = {
        title: 'Select Avatar',
      //  customButtons: [
      //    {name: 'fb', title: 'Choose Photo from Facebook'},
      //  ],
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };

      
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        
        if (response.didCancel) {
        console.log('User cancelled image picker');
    } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        callback('ImagePicker Error: ')
    } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
    } else {
      //  let source = {
          //      uri: response.uri
          //  };
          
          uploadFile(response.fileName,response.path, response.type, (error, url) =>{
              
              callback(error, url)
              
        })
        
        
        // You can also display the image using data: let source = { uri:
        // 'data:image/jpeg;base64,' + response.data }; response.path
        
        
        
        
        //this.setState({  avatarSource: source });
    }
});

}