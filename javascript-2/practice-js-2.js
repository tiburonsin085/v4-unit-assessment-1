/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a constiable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/
//CODE HERE
const gitDefinition = 'Git can talk with the terminal, and help us to communicate with the repositories like GITHUB, they are no the same, git is a single comand line user interface that help us to cummincate with the cumputer';

//////////////////PROBLEM 2////////////////////
/*
    Create a constiable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

const gitHubDefinition = 'github is a cloud to storage code is like the DRIVE for coders you can store repositories inside and people can see it and work with it sharing the same code '
//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    description: 'we use the init command to star our folder, so that folser can work with the repositories',
    code: 'git init'
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    description: 'after you create or fork a repositorie in githib or other place, you need to have it inside your machine so you use the clone command to do it, you do it with url of the repositorie',
    code:'git clone url'
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    description: 'thi command help us to see the things we had cahnge inside aour repocitorie ',
    code: 'git status'
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    description: 'we are adding the change to the repositories well we dont have it yet in the cloud but they are ready now',
    code: 'git add'}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description: 'we are commenting the thigns we change so the other devolepers know the things we are cahnging ',
    code: 'git commit -m'}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
const addRemote = {
    description: 'we didn t use this too mucha but i understand that we can add some of our work to a clean repositorie ',
    code: 'git remote add origin url'}
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    description: ' this is where all ends you have finished your work and you can put it back to the cloud, maybe you didn t finished but you can save your work in the cloud',
    code: 'git push'}