Name : Conor McBride
Student no. 20063017
Project: Bar Management system

The idea of the project is to create the means for managment to oversee the running of multiple bars can manage them remotely
through this web application.
The manager should be able to return a list of all employees across every bar under his/her managmenet, or each staff member
individually by their unique id.
The manager should be able to add staff members as the become employed and remove staff members when they decide to leave.
The manager should also have the option of updating each employee's hourly wage when he/she deems fit.
A rolling number of days missed or absent should also be available and updateable to the manager when an employee fails
to show without prior notice.



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

All of the routes either took from or updated to the mongo database staffs, which contains a collection called staffs.

I have been running a git repo since the start of the project and have had multiple branches and merges.


