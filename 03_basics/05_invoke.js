// Immediately Invoked Function Expressions (IIFE)
// globel scope ke pollution se problem hoti h to us globel scope ke jo variable h ya jo bhi declaration h uske pollution k htane ke liye invoke function ka use hota h 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();
// semicolon lagana jruri h taki pta lg ske ki function ko rokna kha h 



(function aurcode(){
    console.log(`DB CONNECTED`)

})();

((name) => {
    //bina naam vala IIFE
    console.log(`DB CONNECTED ${name}`)

})("Priyanka");

// ye do IIFE ek sath ek hi file me likhne ke liye sirf semicolon ko hi lgana h bss apna kaam ho gya 

