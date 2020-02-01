console.log('Before');
/*getUser(1, (user)=>{
    console.log('User', user);
});*/
console.log(getUser(1));
console.log('After');
function getUser(id){
    setTimeout(()=>{
        return{id:id , githubUserName: 'HaroldMaster1994'};
    },2000);
}
/*function getUser(id , funcion){
    setTimeout(()=>{
        funcion({id:id , githubUserName: 'HaroldMaster1994'});
    },2000);
}*/