import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/";

const createSubscriber = async (name: string, email: string) => {
    await axios.put(`${baseUrl}/subscribers`, {
      name,
      email
    });
  };



const createAndSendNotifications = async () => {
try {
    await createNews(
    "Novidade a caminho",
    "Labenu: uma nova escola de programação",
    1590522289000
    );

    const users = await getSubscribers();

    await sendNotifications(users, "Testando mensagens");
} catch (err) {
    console.log("err: ", err.message);
}
};


const getAllNotifications = async (): Promise<any> => {
    const users = await getSubscribers();
  
    const notificationPromises = [];
    for (const user of users) {
      notificationPromises.push(
        axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
      );
    }
  
    const result = await Promise.all(notificationPromises);
  
    const dataFromResult = result.map((res) => res.data);
  
    return dataFromResult;
  };