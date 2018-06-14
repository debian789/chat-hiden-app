var RNFS = require('react-native-fs');
var uploadUrl = 'http://192.168.1.111:3000/upload'; // For testing purposes, go to http://requestb.in/ and create your own link

export default(fileName, path, type, callback) => {
    var files = [
        {
            name: 'file',
            filename: fileName,
            filepath: path,
            filetype: type
        }
    ];

    var uploadBegin = (response) => {
        var jobId = response.jobId;
        // console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    };

    var uploadProgress = (response) => {
        var percentage = Math.floor((response.totalBytesSent / response.totalBytesExpectedToSend) * 100);
        // console.log('UPLOAD IS ' + percentage + '% DONE!');
        callback(null, null, percentage)
    };

    // upload files
    RNFS.uploadFiles({
        toUrl: uploadUrl,
        files: files,
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        fields: {
            'hello': 'world'
        },
            begin: uploadBegin,
            progress: uploadProgress
        })
        .promise
        .then((response) => {
            if (response.statusCode == 200) {
                const urlImageUpload = JSON.parse(response.body)
                // console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
                callback(null, urlImageUpload.file, undefined)
            } else {
                // console.log('SERVER ERROR');
                callback("SERVER ERROR")
            }
        })
        .catch((err) => {
            // console.log(err);
            callback("SERVER ERROR")
        });

}