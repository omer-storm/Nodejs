//Callbacks
//Promises
//Async,await

console.log('First');

getUser(1, (user) => {
    console.log(user);
    getRepository( (repo)=>{
        console.log(repo);
    });
});

console.log('third');

console.log('fourth');

function getUser(id,callback){
    setTimeout(() =>{ 
        console.log('reading database');
        callback ({ id , GitHubUsername: "omer"  });
    } , 2000);
}

function getRepository(callback){
    setTimeout(() => {console.log("Fetching repos");
    callback(['repo 1','repo 2','repo 3','repo 4']);
},2000);

    

}