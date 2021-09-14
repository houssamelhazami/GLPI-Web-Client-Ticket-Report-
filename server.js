const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/api/channels/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  console.log("signing");

  if ((username === "manager" && password === "manager") || (username === "collaborateur" && password === "collaborateur") ) {
    const payload = { username };
    const secretOrKey = process.env.JWT_SECRET;
    jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
      res.json({
        success: true,
        token: `Bearer ${token}`
      });
    });
  } else {
    msg = "Invalid credentials";
    return res.status(400).json({
      success: false,
      msg
    });
  }
});

app.get("/api/channels/view-data-status", (req, res) => {

  let tokenKnown = "b838n96j9tk1toljt9hsk81pbd";
  let countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  let percentage = Array(6); 
  let status= Array(6);
  let occurence=Array(6);
  let sum = 0.0; 
  let getData  = () =>  {
            axios
                .get(`http://localhost:8080/glpi/apirest.php/Ticket`, {
                  headers: {
                    'App-Token': 'IeWOWx89cOI3yIplh1odqW5ZxSHjcUFNLsPMiW0n',
                    'Authorization': 'Basic Z2xwaTpnbHBp',
                    'Session-Token' : `${tokenKnown}`
                  }
                })
                .then(response => {
                 
                  for (let i in response.data) {
                    status[i]=(response.data[i].status);
                }
                
            
                for (let i=1 ; i<=6 ;i++) {
                    occurence[i-1]=(countOccurrences(status, i));
            
                };
                for (let i in occurence) {
                    sum = sum + occurence[i];
            
                }
                for (let i in occurence) {
                    percentage[i]=(occurence[i]/sum);
            
                }
                
                var dataa = [
                  ["data"],
                  [Math.floor(percentage[0]*100)],
                  [Math.floor(percentage[1]*100)],
                  [Math.floor(percentage[2]*100)],
                  [Math.floor(percentage[3]*100)],
                  [Math.floor(percentage[4]*100)],
                  [Math.floor(percentage[5]*100)]
                 ]
    
    
    
                let convertToArrayOfObjects = (data) => {
                  
                    var keys = data.shift(),
                        i = 0, k = 0,
                        obj = null,
                        output = [];
                
                    for (i = 0; i < data.length; i++) {
                        obj = {};
                
                        for (k = 0; k < keys.length; k++) {
                            obj[keys[k]] = data[i][k];
                        }
                
                        output.push(obj);
                    }

                    return output;
                    
                }  
                var target = convertToArrayOfObjects(dataa);
                //this.setState({ data: target });
                res.send(target);
                //res.send("she");

                })
            
                .catch(error => {
                  console.log(error);
                });
            }   
          getData(); 
});

app.get("/api/channels/view-data-urgence", (req, res) => {
  let tokenKnown = "b838n96j9tk1toljt9hsk81pbd";
  let countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  let percentage = Array(5); 
  let status= Array(5);
  let occurence=Array(5);
  let sum = 0.0; 
  let getData  = () =>  {
            axios
                .get(`http://localhost:8080/glpi/apirest.php/Ticket`, {
                  headers: {
                    'App-Token': 'IeWOWx89cOI3yIplh1odqW5ZxSHjcUFNLsPMiW0n',
                    'Authorization': 'Basic Z2xwaTpnbHBp',
                    'Session-Token' : `${tokenKnown}`
                  }
                })
                .then(response => {
                 
                  for (let i in response.data) {
                    status[i]=(response.data[i].urgency);
                }
              
                for (let i=1 ; i<=5 ;i++) {
                    occurence[i-1]=(countOccurrences(status, i));
            
                };
                for (let i in occurence) {
                    sum = sum + occurence[i];
            
                }
                for (let i in occurence) {
                    percentage[i]=(occurence[i]/sum);
            
                }
               
                var dataa = [
                  ["data"],
                  [Math.floor(percentage[0]*100)],
                  [Math.floor(percentage[1]*100)],
                  [Math.floor(percentage[2]*100)],
                  [Math.floor(percentage[3]*100)],
                  [Math.floor(percentage[4]*100)]   ]
                let convertToArrayOfObjects = (data) => {
                  
                    var keys = data.shift(),
                        i = 0, k = 0,
                        obj = null,
                        output = [];
                
                    for (i = 0; i < data.length; i++) {
                        obj = {};
                
                        for (k = 0; k < keys.length; k++) {
                            obj[keys[k]] = data[i][k];
                        }
                
                        output.push(obj);
                    }

                    return output;
                    
                }  
                var target = convertToArrayOfObjects(dataa);
                res.send(target);
                })
            
                .catch(error => {
                  console.log(error);
                });
            }   
          getData(); 
});

app.get("/api/channels/view-data-type", (req, res) => {
  let tokenKnown = "b838n96j9tk1toljt9hsk81pbd";
  let countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  let percentage = Array(2); 
  let status= Array(2);
  let occurence=Array(2);
  let sum = 0.0; 
  let getData  = () =>  {
            axios
                .get(`http://localhost:8080/glpi/apirest.php/Ticket`, {
                  headers: {
                    'App-Token': 'IeWOWx89cOI3yIplh1odqW5ZxSHjcUFNLsPMiW0n',
                    'Authorization': 'Basic Z2xwaTpnbHBp',
                    'Session-Token' : `${tokenKnown}`
                  }
                })
                .then(response => {
                 
                  for (let i in response.data) {
                    status[i]=(response.data[i].type);
                }
                
            
                for (let i=1 ; i<=2 ;i++) {
                    occurence[i-1]=(countOccurrences(status, i));
            
                };
                for (let i in occurence) {
                    sum = sum + occurence[i];
            
                }
                for (let i in occurence) {
                    percentage[i]=(occurence[i]/sum);
            
                }
                
                var dataa = [
                  ["data"],
                  [Math.floor(percentage[0]*100)],
                  [Math.floor(percentage[1]*100)]
                  
                 ]
    
    
    
                let convertToArrayOfObjects = (data) => {
                  
                    var keys = data.shift(),
                        i = 0, k = 0,
                        obj = null,
                        output = [];
                
                    for (i = 0; i < data.length; i++) {
                        obj = {};
                
                        for (k = 0; k < keys.length; k++) {
                            obj[keys[k]] = data[i][k];
                        }
                
                        output.push(obj);
                    }

                    return output;
                    
                }  
                var target = convertToArrayOfObjects(dataa);
                res.send(target);
                })
            
                .catch(error => {
                  console.log(error);
                });
            }   
          getData(); 
});

app.get("/api/channels/view-data-impact", (req, res) => {

  let tokenKnown = "b838n96j9tk1toljt9hsk81pbd";
  let countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  let percentage = Array(5); 
  let status= Array(5);
  let occurence=Array(5);
  let sum = 0.0; 
  let getData  = () =>  {
            axios
                .get(`http://localhost:8080/glpi/apirest.php/Ticket`, {
                  headers: {
                    'App-Token': 'IeWOWx89cOI3yIplh1odqW5ZxSHjcUFNLsPMiW0n',
                    'Authorization': 'Basic Z2xwaTpnbHBp',
                    'Session-Token' : `${tokenKnown}`
                  }
                })
                .then(response => {
                 
                  for (let i in response.data) {
                    status[i]=(response.data[i].impact);
                }
                
            
                for (let i=1 ; i<=5 ;i++) {
                    occurence[i-1]=(countOccurrences(status, i));
            
                };
                for (let i in occurence) {
                    sum = sum + occurence[i];
            
                }
                for (let i in occurence) {
                    percentage[i]=(occurence[i]/sum);
            
                }
                
                var dataa = [
                  ["data"],
                  [Math.floor(percentage[0]*100)],
                  [Math.floor(percentage[1]*100)],
                  [Math.floor(percentage[2]*100)],
                  [Math.floor(percentage[3]*100)],
                  [Math.floor(percentage[4]*100)]
                  
                 ]
    
    
    
                let convertToArrayOfObjects = (data) => {
                  
                    var keys = data.shift(),
                        i = 0, k = 0,
                        obj = null,
                        output = [];
                
                    for (i = 0; i < data.length; i++) {
                        obj = {};
                
                        for (k = 0; k < keys.length; k++) {
                            obj[keys[k]] = data[i][k];
                        }
                
                        output.push(obj);
                    }

                    return output;
                    
                }  
                var target = convertToArrayOfObjects(dataa);
                res.send(target);

                })
            
                .catch(error => {
                  console.log(error);
                });
            }   
          getData(); 
});
app.get("/api/channels/view-data-priority", (req, res) => {

  
  let tokenKnown = "b838n96j9tk1toljt9hsk81pbd";
  let countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  let percentage = Array(6); 
  let status= Array(6);
  let occurence=Array(6);
  let sum = 0.0; 
  let getData  = () =>  {
            axios
                .get(`http://localhost:8080/glpi/apirest.php/Ticket`, {
                  headers: {
                    'App-Token': 'IeWOWx89cOI3yIplh1odqW5ZxSHjcUFNLsPMiW0n',
                    'Authorization': 'Basic Z2xwaTpnbHBp',
                    'Session-Token' : `${tokenKnown}`
                  }
                })
                .then(response => {
                 
                  for (let i in response.data) {
                    status[i]=(response.data[i].priority);
                }
                
            
                for (let i=1 ; i<=6 ;i++) {
                    occurence[i-1]=(countOccurrences(status, i));
            
                };
                for (let i in occurence) {
                    sum = sum + occurence[i];
            
                }
                for (let i in occurence) {
                    percentage[i]=(occurence[i]/sum);
            
                }
                
                var dataa = [
                  ["data"],
                  [Math.floor(percentage[0]*100)],
                  [Math.floor(percentage[1]*100)],
                  [Math.floor(percentage[2]*100)],
                  [Math.floor(percentage[3]*100)],
                  [Math.floor(percentage[4]*100)],      
                  [Math.floor(percentage[5]*100)]

                 ]
    
    
    
                let convertToArrayOfObjects = (data) => {
                  
                    var keys = data.shift(),
                        i = 0, k = 0,
                        obj = null,
                        output = [];
                
                    for (i = 0; i < data.length; i++) {
                        obj = {};
                
                        for (k = 0; k < keys.length; k++) {
                            obj[keys[k]] = data[i][k];
                        }
                
                        output.push(obj);
                    }

                    return output;
                    
                }  
                var target = convertToArrayOfObjects(dataa);
                res.send(target);

                })
            
                .catch(error => {
                  console.log(error);
                });
            }   
          getData(); 
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running on port ${port}`));
