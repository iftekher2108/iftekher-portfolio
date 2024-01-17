console.log("Iftekher Mahmud Pervez")

// category selection
btn_all =$('.btn-all'),
btn_bootstrap =$('.btn-bootstrap'),
btn_wordpress =$('.btn-wordpress'),
btn_others =$('.btn-others');
// category selection 

// console.log(btn_others)

// project category 
project_bootstrap =$('.bootstrap'),
project_wordpress =$('.wordpress'),
project_others =$('.others');

// console.table(project_wordpress)

// project all category
btn_all.click(function(){
    //   console.log('clicked')
    btn_all.addClass('active');
    btn_wordpress.removeClass('active');
    btn_bootstrap.removeClass('active');
    btn_others.removeClass('active');


    // project hide
        project_bootstrap.slideDown(300);  

        project_wordpress.slideDown(300); 

        project_others.slideDown(300);
    // project hide

    
});



btn_bootstrap.click(function(){
    // console.log('clicked')
    btn_all.removeClass('active');
    btn_wordpress.removeClass('active');
    btn_bootstrap.addClass('active');
    btn_others.removeClass('active');

    // project hide
    project_bootstrap.slideDown(300);

    project_wordpress.slideUp(300);

    project_others.slideUp(300);
    // project hide

})

btn_wordpress.click(function(){
//   console.log('clicked')
    btn_all.removeClass('active');
    btn_wordpress.addClass('active');
    btn_bootstrap.removeClass('active');
    btn_others.removeClass('active');

        project_bootstrap.slideUp(300);

        project_wordpress.slideDown(300);
     
        project_others.slideUp(300);
})


btn_others.click(function(){
//  console.log('clicked')
    btn_all.removeClass('active');
    btn_wordpress.removeClass('active');
    btn_bootstrap.removeClass('active');
    btn_others.addClass('active');


        project_bootstrap.slideUp(300);

        project_wordpress.slideUp(300);
    
        project_others.slideDown(300);
           

})
   