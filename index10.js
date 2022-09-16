
// ----------------------------------
// Reomve properties from Object 
// ----------------------------------



const student = {
    name : "waheed",
    rollNumber : '57 ',

    hobbies : [ '123' , '456' , '45'],
    new : function(){
        document.write('hello World ! ')
 
   }

}

  delete student.new;
  
  delete student.rollNumber;

  console.log(student);