var admin = require('firebase-admin');
var serviceAccount = require('./push-notification-d3b59-firebase-adminsdk-8af0q-7fdb3a777f.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://push-notification-d3b59.firebaseio.com "
});

var message = {
    notification: {
        title: 'Test from admin sdk',
        body: 'this is a test message from admin SDK'
    },
    data: {

    },
    android: {
        notification: {
            sound: 'default'
        }
    },
    // token: 'fizti4JYQs-VKovi82cDd6:APA91bEkNO3dqA2pk1w_NrKeWBkNNxOfg7urOQA6rfng6zreLYADselJdo45-eFLiTDieSr1jGmJuo4QybQvfSMBNdc2CkFNas44ZE0OwA5vH78VrpCifNefVf6nbpcQjE6FVfFpdPAn'
    token: 'dz-KehYER2CFkEfeSgcIZG:APA91bEjrFE7Y8gocvi2QILQ5P1KNoL9Yfe5SoqGI6A8XI1xOCGKTkt6ZPsUXOalyqGJH6Wy5EOqdWICbID8AStfZfnx3i5Q89o2u5Sqi2VasZXYwm2YeYXt5ytbgsgvFAHJxXd8TnKw'
};

admin.messaging().send(message)
    .then(resp => {
        console.log('Successfully sent message: ', resp);
    })
    .catch(err => {
        console.log('err: ',err);
    });