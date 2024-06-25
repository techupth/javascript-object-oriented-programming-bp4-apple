class Notification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    } 

}

class EmailNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver);
    }
 }

class SMSNotification extends Notification { 
    constructor(notificationId, createdTime, content, receiver, phoneNumber) {
        super(notificationId, createdTime, content, receiver);
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`);
    }
}

const emailNotification = new EmailNotification("1", "2024-06-25 09:00", "Hello, this is an email notification", "example@example.com");
const smsNotification = new SMSNotification("2", "2024-06-25 10:00", "Hello, this is an SMS notification", "example@example.com", "1234567890");


emailNotification.send(); 
smsNotification.send(); 