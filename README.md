# Assignment 1 - API testing and Source Control.

Name: Conor McBride

## Overview.

The idea of the project is to create the means for managment to oversee the running of multiple bars can manage them remotely
through this web application.
The manager should be able to return a list of all employees across every bar under his/her managmenet, or each staff member
individually by their unique id.
The manager should be able to add staff members as the become employed and remove staff members when they decide to leave.
The manager should also have the option of updating each employee's hourly wage when he/she deems fit.
A rolling number of days missed or absent should also be available and updateable to the manager when an employee fails
to show without prior notice.
## API endpoints.
STAFF
app.delete('/staff/:id', staffroutes.deleteStaff);
This gets the id entered and finds the staff member associated and deletes it.
/staff/59ff64473a6a8891c13bb4a5

app.get('/staff/:id', staffroutes.findOne);
This gets the id entered and finds the staff member associated then prints it.
/staff/59ff64473a6a8891c13bb4a5

app.get('/staff', staffroutes.findAll);
This prints all staff members.
/staff

app.post('/staff', staffroutes.newStaff);
This takes the information entered and creates a new staff member.
/staff
request ={"name":"brian o neill","wage":12.50, "role":"waiter"}


app.post('/staff/:id', staffroutes.updateRateOfPay)
This takes in the id entered and the request to update a staff wages
/staff/59ff64473a6a8891c13bb4a5
request = {"wage":12.50}

app.put('/staff/:id', staffroutes.incrementDaysAbscent);
This takes in the staff id and increments the days absent. If a staff member has 5 or more absences the system tells the
manager to talk to them about it.
/staff/59ff64473a6a8891c13bb4a5

BAR
app.delete('/bar/:id', barroutes.deleteBar);
This gets the id entered and finds the bar associated and deletes it.
/bar/59ff8ce67c2ea71884261f16

app.get('/bar/:id', barroutes.findOne);
This gets the id entered and finds the bar associated then prints it.
/bar/59ff8ce67c2ea71884261f16

app.get('/bar', barroutes.findAll);
This prints all staff members.
/bar

app.post('/bar', barroutes.newBar);
This takes the information entered and creates a new bar.
/bar
request = {"barName": "oneills", "location":"waterford" "earnings":7000};

app.post('/bar/:id', barroutes.updateBarEarnings);
This takes in the id entered and the request to update the staff earning.
/bar/59ff8ce67c2ea71884261f16
request = { "earnings":7000}


## Data storage.
I have two different schemas in this project.

Bar
var BarSchema = new mongoose.Schema({
    barName: String,
    location: String,
    earnings: Number
});

Staff
var StaffSchema = new mongoose.Schema({
    name: String,
    wage: Number,
    role:String,
    daysabsent: {type: Number, default: 0}
});

## Sample Test execution.
. . . . . In this section include a listing of the output from running your tests, e.g.

        C:\Users\conor\WebstormProjects\barmang>npm test

        > barmang@0.0.0 test C:\Users\conor\WebstormProjects\barmang
        > mocha --timeout 10000 test/routes/*

        (node:8108) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
          Bar
            GET /bar
        connected to database
        connected to database
        connected to database
        (node:8108) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
        GET /bar 200 37.972 ms - 209
              ? should return all the bars in the collection (110ms)
            GET /bar/id
        GET /bar/5a00e4020bdef11a9cd6720f 200 12.104 ms - 104
              ? should return a single staff member from the collection (47ms)
            POST /Bar
        Adding bar: undefined
        POST /bar 200 65.469 ms - 25
              ? should return confirmation message and update collection (84ms)
            DELETE /bar
        DELETE /bar/59f6f0b99bd9dc7f544d7dac 200 13.864 ms - 26
              ? should return confirmation message and delete staff member (40ms)
            POST /bar/id
        POST /bar/5a00e4020bdef11a9cd6720f 200 17.017 ms - 163
              ? should return confirmation message and update bar earnings (40ms)

          Staff
            GET /staff
        GET /staff 200 8.384 ms - 198
              ? should return all the staff members in the collection
            POST /staff
        Adding staff member: undefined
        POST /staff 200 28.502 ms - 33
              ? should return confirmation message and update collection (45ms)
            GET /staff/id
        GET /staff/5a01839c6ae69425c47e1faf 200 11.942 ms - 99
              ? should return a single staff member from the collection (38ms)
            POST /staff
        POST /staff/5a01839c6ae69425c47e1faf 200 13.113 ms - 169
              ? should return confirmation message and update staff members wages (45ms)
            DELETE /staff
        DELETE /staff/59f6f0b99bd9dc7f544d7dac 200 5.602 ms - 35
              ? should return confirmation message and delete staff member
            PUT /staff/:id
        PUT /staff/5a01839c6ae69425c47e1faf 200 23.215 ms - 138
              ? should change the absent days by one and print message (49ms)


          11 passing (1s)

[ Markdown Tip: By indenting the above listing, GitHub will display it in a 'box' and preserve any formatting.]

## Extra features.

