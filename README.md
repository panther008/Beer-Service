# Beer-Service
First run npm install
To add sqlite db dependency run npm install sqlit3
There are total 4 methods get,put,post,delete
Open post man and enter url http://localhost:12345/api/v1/beer and select GET , if no params passed in body then all data will be displayed else if Name is given in body e.g "NAME":"%NA%", then it will fetch record by matching name.
PUT Method will insert row
POST method will update rating by taking average of new and old value
DELETE will delete record 
