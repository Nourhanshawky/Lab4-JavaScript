///////constructor function////////////
function Person(pfullname ,pmoney ,psleepMood,pHealthRate){
    this.fullname = pfullname;
    this.money = pmoney;
    this.sleepMood = psleepMood;
    this.healthRate = pHealthRate;
}
Person.prototype.Sleep =function(hours){
    if(hours == 7) 
    { 
    this.sleepMood="Happy";
    }
    else if(hours < 7)
    {
        this.sleepMood="Tired";
    }
    else if(hours > 7) 
    {
        this.sleepMood="Lazy";
    }
}
Person.prototype.Eat =function(meals){
    if(meals == 3){
        this.healthRate=100;
    }
    else if(meals == 2){
       this.healthRate=75;
    }
    else if(meals == 1){
        this.healthRate=50;
    }

}
Person.prototype.Buy=function(items){
   
        this.money = this.money-items*10
    
}
let person1 =new Person("nour shawky" ,100 ,"",0);

person1.Sleep(10);
person1.Eat(2);
person1.Buy(5);
console.log(person1);

///////////////classes////////////
class Person2{
constractor(pfullname ,pmoney ,psleepMood,pHealthRate){
    this.fullname = pfullname;
    this.money = pmoney;
    this.sleepMood = psleepMood;
    this.healthRate = pHealthRate;
}
Sleep(hours){
    if(hours == 7) 
    { 
    this.sleepMood="Happy";
    }
    else if(hours < 7)
    {
        this.sleepMood="Tired";
    }
    else if(hours > 7) 
    {
        this.sleepMood="Lazy";
    }
}
Eat(meals){
    if(meals == 3){
        this.healthRate=100;
    }
    else if(meals == 2){
       this.healthRate=75;
    }
    else if(meals == 1){
        this.healthRate=50;
    }

}
Buy(items){
   
    this.money = this.money-items*10

}
}
let person2 =new Person("nour shawky" ,1000 ,"",10);

person2.Sleep(7);
person2.Eat(3);
person2.Buy(2);
console.log(person2);

////////////////////Objects Linking to Other Objects//////////////
const Person3 ={
    init(pfullname ,pmoney ,psleepMood,pHealthRate){
        this.fullname = pfullname;
        this.money = pmoney;
        this.sleepMood = psleepMood;
        this.healthRate = pHealthRate;
    return this;
    },

    Sleep(hours){
        if(hours == 7) 
        { 
        this.sleepMood="Happy";
        }
        else if(hours < 7)
        {
            this.sleepMood="Tired";
        }
        else if(hours > 7) 
        {
            this.sleepMood="Lazy";
        }
    },
    Eat(meals){
        if(meals == 3){
            this.healthRate=100;
        }
        else if(meals == 2){
           this.healthRate=75;
        }
        else if(meals == 1){
            this.healthRate=50;
        }
    
    },
    Buy(items){
       
        this.money = this.money-items*10
    
    }
};
const person3 = Object.create(Person3).init("Nourshawky", 100, "", 100);
person3.Sleep(8);
person3.Eat(2);
person3.Buy(3);
console.log(person3);

//////////////Factory Functions///////////////
function Person4(pfullname ,pmoney ,psleepMood,pHealthRate) {
    return {
      pfullname,
      pmoney,
      psleepMood,
      pHealthRate,
  
      Sleep(hours){
        if(hours == 7) 
        { 
        this.sleepMood="Happy";
        }
        else if(hours < 7)
        {
            this.sleepMood="Tired";
        }
        else if(hours > 7) 
        {
            this.sleepMood="Lazy";
        }
    },
    Eat(meals){
        if(meals == 3){
            this.healthRate=100;
        }
        else if(meals == 2){
           this.healthRate=75;
        }
        else if(meals == 1){
            this.healthRate=50;
        }
    
    },
    Buy(items){
       
        this.money = this.money-items*10
    
    }
    };
  }
  
  
  const person4 = Person4("Nourhan shawky", 10, "happy", 90);
  person4.Sleep(8);
  person4.Eat(2);
  person4.Buy(3);
  console.log(person4)