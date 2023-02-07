const axios = require("axios");

const baseUrl = "https://x8ki-letl-twmt.n7.xano.io/api:gHPd8le5";

const requestPayload = {
  coin1: "INR",
  coin2: "USDT",
  coin1Amount: 300,
  coin2Amount: 2,
};

console.log(
  "============================= POST API CALL ============================="
);
axios
  .post(`${baseUrl}/transaction`, requestPayload)
  .then( (response) => {
    console.log("Request Payload sent");
    console.table(requestPayload);
    console.log("============= END =============");

    console.log("Response received");
    console.table(response.data);
    console.log("============= END =============");
    const createdTrId = response.data.id;
      
    console.log(
      "============================= GET API CALL ============================="
    );
    axios
      .get(`${baseUrl}/transaction/${createdTrId}`)
      .then( (response) =>  {
        console.table(response.data);
      })
      .catch((error) => {
        //console.log(error);
      });
    
    console.log(
      "============================= GET API CALL END ============================="
    );
  })
  .catch( (error) => {
   // console.log(error);
  });

console.log(
  "============================= POST API CALL END ============================="
);


