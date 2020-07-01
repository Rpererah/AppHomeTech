
const data = { 
	      "notification": { 
	      "title": "Teste hometech", 
	      "body": `Ola seja bem vindo`
      },
        "to":`${firebaseID}`
      }

$.ajax({
        type: 'POST',
        url: "https://fcm.googleapis.com/fcm/send",
        headers: {
          "Authorization": "key=AAAAToZqtNQ:APA91bEthXVBV3zqKcnQ2UUQBmkYgeig9CXdUVcfuQNvZ5rcNTZ4n_wMDuwe_he9SypZxcmG2CbhRzZ6prTkuDWTa3y_x_jD9hujBlhLs8osBwElxaRwAdmoy6OqMK0cdyVdeC_v9sG7",
          "Content-type": "application/json"
        },
        data: JSON.stringify(data),
        dataType: 'json'
      })

