// aget refernce to the foam display area
// const form =document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement;
// //Handle from submission
// form.addEventListener('submit',(event:Event)=>{
//     event.preventDefault();//prevent page reload
//     //collect input value
//     const name = (document.getElementById('name')as HTMLInputElement).value
//     const email = (document.getElementById('email')as HTMLInputElement).value
//     const phone = (document.getElementById('phone')as HTMLInputElement).value
//     const education = (document.getElementById('education')as HTMLInputElement).value
//     const experience = (document.getElementById('experience')as HTMLInputElement).value
//     const skills = (document.getElementById('skills')as HTMLInputElement).value
//     //content the resume content dynamically
//     const resumeHTML =`
//     <h2><b>Resume</b></h2>
//     <h2>Personal Information</h2>
//     <p><b>Name:</b>${name}</p>
//         <p><b>Email:</b>${name}</p>
//     <p><b>Phone:</b>${name}</p>
//     <h2><b>Education</b></h2>
//     <p>${education}</p>
//      <h2><b>Experience</b></h2>
//     <p>${experience}</p>
//  <h2><b>skills</b></h2>
//     <p>${skills}</p>
//     `;
//     //Display the genertes resume
// if(resumeDisplayElement){
//     resumeDisplayElement.innerHTML=resumeHTML;
// }
//     else{
//         console.error('The resume display element is missing')
//     }
// })
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Content the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h2>Personal Information</h2>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    \n    <h2><b>Education</b></h2>\n    <p>").concat(education, "</p>\n\n    <h2><b>Experience</b></h2>\n    <p>").concat(experience, "</p>\n\n    <h2><b>Skills</b></h2>\n    <p>").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
