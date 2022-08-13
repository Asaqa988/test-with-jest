function myUserFunction(username) {

   
    if (username.length>=7) {
        username= username.substring(0,5)
         
     }
    if (username.startsWith(" ")||username.endsWith(" ")) {
        username= username.trim();
        
    }
   

    return username.toLowerCase(); 
    
}


module.exports = myUserFunction; 