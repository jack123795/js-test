//### JS Test
//
//For any question of this document, we aren't waiting for a number or answer, but we are waiting for javascript functions.
//
//Make a git public repo or add @loiu92 to your private repos.
//
//#### Assuming we have an array of factories


const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] }
]; 



//1.	Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]

const q1 = [];
for (var i = 0, len = factories.length; i < len; i++) {
  var obj = new Object();
  obj.name = factories[i].name;
  obj.count = factories[i].employees.length;
  q1.push(obj);
}
console.log(q1);



//2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]

var count = [] ;
var employee = [];
for (var i = 0, len = factories.length; i < len; i++) {
	for (var j = 0, len = factories[i].employees.length; j < len; j++) {
    	var x= factories[i].employees[j];
    	if (employee.indexOf(x)==-1){
          	employee.push(x);
          	count.push(1);
        }
      	else{
          	var y = employee.indexOf(x);
          	count[y]+=1;
      	}
    }
}
const q2 = [];
for (var i = 0, len = employee.length; i < len; i++) {
  var obj = new Object();
  obj.employee = employee[i];
  obj.count = count[i];
  q2.push(obj);
}
console.log(q2);


//3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }


for (var i = 0, len = factories.length; i < len; i++) {
  for (var j = 0, len = factories[i].employees.length; j < len; j++) {
	factories[i].employees.sort();
  }
}
console.log(factories);


//#### Assuming we have a different array
//

const employeeType = [
      {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
      {id; 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
      {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},];

const employees = [
        {id: 1, name: "Alice", type: 2},
        {id: 2, name: "Bob", type: 3},
        {id: 3, name: "John", type: 2},
        {id: 4, name: "Karen", type: 1},
        {id: 5, name: "Miles", type: 3},
        {id: 6, name: "Henry", type: 1}
];

const tasks = [
      {id: 1, title: "task01", duration: 60},//min
      {id: 2, title: "task02", duration: 120},
      {id: 3, title: "task03", duration: 180},
      {id: 4, title: "task04", duration: 360},
      {id: 5, title: "task05", duration: 30},
      {id: 6, title: "task06", duration: 220},
      {id: 7, title: "task07", duration: 640},
      {id: 8, title: "task08", duration: 250},
      {id: 9, title: "task09", duration: 119},
      {id: 10, title: "task10", duration: 560},
      {id: 11, title: "task11", duration: 340},
      {id: 12, title: "task12", duration: 45},
      {id: 13, title: "task13", duration: 86},
      {id: 14, title: "task14", duration: 480},
      {id: 15, title: "task15", duration: 900}
];


//4. Count total hours worked in 1 day ? // => 39


const q4 = [];
for (var i = 0, len = employeeType.length; i < len; i++) {
  a = employeeType[i].work_begin[0]+employeeType[i].work_begin[1];
  b = employeeType[i].work_end[0]+employeeType[i].work_end[1];
  if (b==00){
  	b=24;
  }
  q4.push(Number(b) - Number(a));
  
}

var total = 0;
for (var j = 0, len = employees.length; j < len; j++) {
	if (employees[j].type == 1) {
 		  total += q4[0];
	}
  	if (employees[j].type == 2) {
 		  total += q4[1];
	}
  	if (employees[j].type == 3) {
 		  total += q4[2];
	}
}
console.log(total);



//5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int

function howManyEmployeeByTime(time) {
    var day = 0;
    var alltme =0;
    for (var i = 0, len = tasks.length; i < len; i++) {
      alltme+=tasks[i].duration;
    }
  	while(alltme>=time){
    	alltme -= time;
      	day += 1;
    }
  	if (alltme>0){
    	day += 1;
    }
  	return day;
}
const employeework = [];
for (var i = 0, len = employeeType.length; i < len; i++) {
  a = employeeType[i].work_begin[0]+employeeType[i].work_begin[1];
  b = employeeType[i].work_end[0]+employeeType[i].work_end[1];
  if (b==00){
  	b=24;
  }
  employeework.push(Number(b) - Number(a));
}

var q5 = [];
for (var j = 0, len = employees.length; j < len; j++) {
	if (employees[j].type == 1) {
 		  q5.push(howManyEmployeeByTime(employeework[0]*60));
	}
  	if (employees[j].type == 2) {
 		  q5.push(howManyEmployeeByTime(employeework[1]*60));
	}
  	if (employees[j].type == 3) {
 		  q5.push(howManyEmployeeByTime(employeework[2]*60));
	}
}
console.log(q5);


//6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.

var min = 0;
var hr = 0;
var day = 0;
for (var i = 0, len = tasks.length; i < len; i++) {
  duration = tasks[i].duration;
  min += duration;
  while (min >= 60) {
      hr += 1;
      min -=60;
  } 
  while (hr >= 15) {
      day += 1;
      hr -=15;
  } 
}
console.log(day+" day "+hr+" hr "+min+ "min");

//© 2021 GitHub, Inc.
