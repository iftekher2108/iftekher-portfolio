console.log("iftekher mahmud pervez")

// category selection
let btn_all =document.querySelector('.btn.all'),
btn_bootstrap =document.querySelector('.btn.bootstrap'),
btn_wordpress =document.querySelector('.btn.wordpress'),
btn_others =document.querySelector('.btn.others');
// category selection 

console.log(btn_others)

// project category 
let project_bootstrap =document.querySelectorAll('.project-hover.bootstrap'),
project_wordpress =document.querySelectorAll('.project-hover.wordpress'),
project_others =document.querySelectorAll('.project-hover.others');

console.table(project_wordpress)
// project category

btn_all.onclick = () => {
    console.log('clicked')
    btn_all.classList.add('active');
    btn_wordpress.classList.remove('active');
    btn_bootstrap.classList.remove('active');
    btn_others.classList.remove('active');


    project_bootstrap.forEach(bootstrap_project => {
        bootstrap_project.classList.remove('hide');
           
       });

    project_wordpress.forEach(wordpress_project => {
     wordpress_project.classList.remove('hide');
        
    });


    project_others.forEach(others_project => {
        others_project.classList.remove('hide');
           
       });



    
}



btn_bootstrap.onclick = () => {
    console.log('clicked')
    btn_all.classList.remove('active');
    btn_wordpress.classList.remove('active');
    btn_bootstrap.classList.add('active');
    btn_others.classList.remove('active');


    project_bootstrap.forEach(bootstrap_project => {
        bootstrap_project.classList.remove('hide');
           
       });

    project_wordpress.forEach(wordpress_project => {
     wordpress_project.classList.add('hide');
        
    });

    
    project_others.forEach(others_project => {
        others_project.classList.remove('hide');
           
       });


}


btn_wordpress.onclick = () => {
    console.log('clicked')
    btn_all.classList.remove('active');
    btn_wordpress.classList.add('active');
    btn_bootstrap.classList.remove('active');
    btn_others.classList.remove('active');

    project_bootstrap.forEach(bootstrap_project => {
        bootstrap_project.classList.add('hide');
           
       });

       project_wordpress.forEach(wordpress_project => {
        wordpress_project.classList.remove('hide');
           
       });
     
    project_others.forEach(others_project => {
        others_project.classList.add('hide');
           
       });


}


btn_others.onclick = () => {
    console.log('clicked')
    btn_all.classList.remove('active');
    btn_wordpress.classList.remove('active');
    btn_bootstrap.classList.remove('active');
    btn_others.classList.add('active');


    project_bootstrap.forEach(bootstrap_project => {
        bootstrap_project.classList.add('hide');
           
       });
       project_wordpress.forEach(wordpress_project => {
        wordpress_project.classList.add('hide');
           
       });

       
    project_others.forEach(others_project => {
        others_project.classList.remove('hide');
           
       });



    
}