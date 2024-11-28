// OOP - Object-Oriented Programming



// 1 Misol

{
    class Student {
        constructor(fname, lname, tel, address) {
            this.lname = lname
            this.fname = fname
            this.tel = tel
            this.address = address
        }
        getFullName() {
            return `Full name: ${this.fname} ${this.lname}`
        }
        info() {
            return `Info: ${this.fname} ${this.lname} Tel: ${this.tel} Address: ${this.address}`

        }

    }
    let student = new Student("Alimardonov", "Samandar", +998900162654, "Toshkent")
    console.log(student.getFullName());
    console.log(student.info());
}

// 2 Misol

{
    class Teacher {
        constructor(lname, fname, address, salary, level) {
            this.lname = lname
            this.fname = fname
            this.address = address
            this.salary = salary
            this.level = level
        }
        getFullName() {
            return `Full name: ${this.lname} ${this.fname}`
        }
        description() {
            return `Info: ${this.fname} ${this.lname}  Address: ${this.address}  Salary: ${this.salary}$  Level: ${this.level}`

        }
    }
    let teacher = new Teacher("Rasulov", "Boburmirzo", "Toshkent", 1500, "Senior")
    console.log(teacher.getFullName());
    console.log(teacher.description());

}

// 3 Misol 

{
    class Group {
        constructor(name, room, studyType, level, studentCounts, teacher) {
            this.name = name
            this.room = room
            this.studyType = studyType
            this.level = level
            this.studentCounts = studentCounts
            this.teacher = teacher
        }
        fullInformation() {
            return `Group: ${this.name}  Room: ${this.room}  Study Type: ${this.studyType}  Level: ${this.level}  Student counts: ${this.studentCounts}  Teacher: ${this.teacher}`
        }
    }
    let group = new Group("N83", "Slack", "Frontend", "Beginer", 16, "Boburmirzo Rasulov")
    console.log(group.fullInformation());

}

// 4 Misol

{
    class Payment {
        constructor(from, to, amount, status) {
            this.from = from;
            this.to = to;
            this.amount = amount;
            this.date = new Date();
            this.status = status;
        }

        getStatus() {
            if (this.status) {
                return "Completed"
            } else {
                return "Payment Failed"
            }
        }


        info() {
            return `From: ${this.from}, To: ${this.to}, Amount: ${this.amount} $, ${this.date} Status: ${this.getStatus()}`;
        }
    }

    let payment = new Payment("John", "Nurbek", 1000, false);
    console.log(payment.info());

}

// 5 Misol 

{
    class Salary {
        constructor(to, amount, type, status) {
            this.to = to
            this.amount = amount
            this.type = type
            this.date = new Date()
            this.status = status
        }
        getStatus() {
            if (this.status) {
                return "Complated"
            } else {
                return "Payment failed"
            }

        }
        getInfo() {
            return `To: ${this.to},  Amount: ${this.amount}, Type: ${this.type}, Date: ${this.date}, Status: ${this.getStatus()}`
        }
    }
    let salary = new Salary("Mike", 1200, "USD", true)
    console.log(salary.getInfo());

}

// 6 Misol 

{
    class Organization {
        constructor(name, founder, address, employeCount){
            this.name = name
            this.founder = founder
            this.address = address
            this.employeCount = employeCount
        }
        getInfo(){
            return `Name: ${this.name}, Founder: ${this.founder}, Address: ${this.address}, Employe count: ${this.employeCount}`
        }

    }
    let organization = new Organization("Najot Ta'lim", "Temurbek Adhamov", "Toshkent Chilonzor", 400)
    console.log(organization.getInfo());
    
}