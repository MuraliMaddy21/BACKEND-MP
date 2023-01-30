const express = require("express");
const parser = require("xml2js")
const fs = require("fs");
const bodyParser = require("body-parser");
var cors = require("cors")
const {response} = require('express')
const app = express();
const X2JS = require('x2js')

app.use(cors())




app.use(bodyParser.json())

var mainid;
var password;



app.post('/mplogin',function(req,res) 
{

  var result1;
    console.log(req.body.mainid)
    console.log(req.body.password)
    mainid = req.body.mainid
    password = req.body.password

    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_MURALI_MAINTENANCEPORTAL&receiverParty=&receiverService=&interface=SI_LOGIN_MP_MD&interfaceNamespace=http://MAINTENANCE-PORTAL-MD.com',
      'headers': {
        'SOAPAction': '"http://sap.com/xi/WebService/soap1.1"',
        'Content-Type': 'text/xml;charset=UTF-8',
        'Authorization': 'Basic cG91c2VyQDI6VGVjaEAyMDIy',
        'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDKIAAdkZWZhdWx0AQAIUE9VU0VSQDICAAMwMDADAANLUE8EAAwyMDIzMDEwNTA4MTkFAAQAAAAICgAIUE9VU0VSQDL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMTA1MDgxOTM3WjAjBgkqhkiG9w0BCQQxFgQUHfXTP0sx6KFVIoD%2F3Nux0kf6rWQwCQYHKoZIzjgEAwQuMCwCFDANZkMh4edWiCPIzewCjTDJPVB%2FAhQ03o35x9KAk74XErL9iJ9MOy04xQ%3D%3D; JSESSIONID=pLVXbzlXyym6XdKqCid1hjj1owOBhQF-Y2kA_SAP4t13dIPUUzgBj-QX1OAmnCKx; saplb_*=(J2EE6906720)6906750'
      },
      body:` <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_LOGIN_MP_MD>\r\n         <!--You may enter the following 2 items in any order-->\r\n         <I_PASSWORD>${password}</I_PASSWORD>\r\n         <I_USERID>${mainid}</I_USERID>\r\n      </urn:ZFM_LOGIN_MP_MD>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`
    };

request(options, function (error, response) {
  if (error) throw new Error(error);
  var x2js = new X2JS();
  var x2js = new X2JS();
  result1 = x2js.xml2js(response.body)
  result1 = JSON.stringify(result1)
  res.send(result1);
});


     
})


app.get('/mpworkorder',function(req,res) 
{
  var result2;



  var request = require('request');
  var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_MURALI_MAINTENANCEPORTAL&receiverParty=&receiverService=&interface=SI_WORKORDER_MP_MD&interfaceNamespace=http://MAINTENANCE-PORTAL-MD.com',
  'headers': {
    'SOAPAction': '"http://sap.com/xi/WebService/soap1.1"',
    'Content-Type': 'text/xml;charset=UTF-8',
    'Authorization': 'Basic cG91c2VyQDI6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDKIAAdkZWZhdWx0AQAIUE9VU0VSQDICAAMwMDADAANLUE8EAAwyMDIzMDEwNTE2MjAFAAQAAAAICgAIUE9VU0VSQDL%2FAQQwggEABgkqhkiG9w0BBwKggfIwge8CAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGBzzCBzAIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMTA1MTYyMDA1WjAjBgkqhkiG9w0BCQQxFgQUJo7a%2F!3zAa4omxvH40kg7lNGwBwwCQYHKoZIzjgEAwQuMCwCFBDkKRID5mbrKZ9jp5n2sxrgOhXDAhRuXG0Ac3ftd2vSm11gER76QATbVQ%3D%3D; JSESSIONID=yRTeXmGrBH0o5I5nA9VpJhqAhLuChQF-Y2kA_SAP4E3N0WSv1RXdCAZF7c6wV_oY; JSESSIONMARKID=ACgtVg5gFcZlGNZ5ng3IGON-3EA6KnCXJ-MX5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_WORKORDER_MP_MD>\r\n         <!--You may enter the following 4 items in any order-->\r\n         <I_PLANNER_GROUP>010</I_PLANNER_GROUP>\r\n         <I_PLANNING_PLANT>0001</I_PLANNING_PLANT>\r\n         <!--Optional:-->\r\n         <RETURN>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </RETURN>\r\n         <!--Optional:-->\r\n         <WO_LIST>\r\n            <!--Zero or more repetitions:-->\r\n           \r\n         </WO_LIST>\r\n      </urn:ZFM_WORKORDER_MP_MD>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  var x2js = new X2JS();
  result2 = x2js.xml2js(response.body)
  result2=result2['Envelope']['Body']['ZFM_WORKORDER_MP_MD.Response']['WO_LIST']['item'];
  res.send(result2)
  console.log(result2)
});


})

app.get('/mpnotification',function(req,res)
{
  var result3;
  
  var request = require('request');
  var options = {
  'method': 'POST',
  'url': 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_MURALI_MAINTENANCEPORTAL&receiverParty=&receiverService=&interface=SI_NOTIFICATION_MP_MD&interfaceNamespace=http://MAINTENANCE-PORTAL-MD.com',
  'headers': {
    'SOAPAction': '"http://sap.com/xi/WebService/soap1.1"',
    'Content-Type': 'text/xml;charset=UTF-8',
    'Authorization': 'Basic cG91c2VyQDI6VGVjaEAyMDIy',
    'Cookie': 'MYSAPSSO2=AjExMDAgAA9wb3J0YWw6cG91c2VyQDKIAAdkZWZhdWx0AQAIUE9VU0VSQDICAAMwMDADAANLUE8EAAwyMDIzMDEwNjE0MDIFAAQAAAAICgAIUE9VU0VSQDL%2FAQYwggECBgkqhkiG9w0BBwKggfQwgfECAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0TCBzgIBATAiMB0xDDAKBgNVBAMTA0tQTzENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjMwMTA2MTQwMjQ3WjAjBgkqhkiG9w0BCQQxFgQUYYuhkg8l3!4PEXj6IPwEe7tDaFswCQYHKoZIzjgEAwQwMC4CFQC!Tt7Ucge1NaXtzOOChfeRweHLQwIVALhxThXuKaspuZ5yeAi7oTc9WEEy; JSESSIONID=fjSQbjHg5zMx3rk3ZC9lB-qcLWSHhQF-Y2kA_SAP_pXO6AKGVM7nxUy2lrITdSTI; JSESSIONMARKID=d-rS_gZsSrCEnnkD7mr5c_Bf-lcJfDbwCVeH5jaQA; saplb_*=(J2EE6906720)6906750'
  },
  body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <urn:ZFM_NOTIFICATION_MP_MD>\r\n         <!--You may enter the following 7 items in any order-->\r\n         <I_NOTIFICATION_DATE>20220627</I_NOTIFICATION_DATE>\r\n         <I_PLANNER_GROUP>010</I_PLANNER_GROUP>\r\n         <I_PLANNING_PLANT>0001</I_PLANNING_PLANT>\r\n         <!--Optional:-->\r\n         <NOTIFICATION_LIST>\r\n            <!--Zero or more repetitions:-->\r\n           \r\n         </NOTIFICATION_LIST>\r\n         <!--Optional:-->\r\n         <NOTIFICATION_NODO>\r\n            <!--Zero or more repetitions:-->\r\n           \r\n         </NOTIFICATION_NODO>\r\n         <!--Optional:-->\r\n         <NOTIFICATION_NOPR>\r\n            <!--Zero or more repetitions:-->\r\n       \r\n         </NOTIFICATION_NOPR>\r\n         <!--Optional:-->\r\n         <NOTIFICATION_OSNO>\r\n            <!--Zero or more repetitions:-->\r\n            \r\n         </NOTIFICATION_OSNO>\r\n      </urn:ZFM_NOTIFICATION_MP_MD>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>`

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  var x2js = new X2JS();
  result3 = x2js.xml2js(response.body)
  result3=result3['Envelope']['Body']['ZFM_NOTIFICATION_MP_MD.Response']['NOTIFICATION_LIST']['item'];
  res.send(result3)
  console.log(result3);
});

})



app.listen(3030,()=>
{
    console.log("server listening on port 3030")
});
