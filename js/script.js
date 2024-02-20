function handleSubmit() {
    const emailValue = document.getElementById('email').value.toLocaleLowerCase();

    const errorEmail = document.getElementById('error-email');

    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkEmail = emailValue.match(regex);

    const info1 = document.querySelector('#information .info1')
    console.log('check section', info1);

    const submitControl = document.querySelector('.submit-email')
    if (checkEmail) {
        info1.style.display = 'block';
        submitControl.style.display = 'none';
        errorEmail.innerHTML = ''

    } else {
        errorEmail.innerHTML = 'VUI LÒNG NHẬP ĐÚNG ĐỊNH DẠNG'
    }
}



function handleOnMouseOver(element) {
    const viewMore = element.querySelector('.view-more');
    viewMore.style.display = 'inline-block';
}

function handleOnMouseOut(element) {
    const viewMore = element.querySelector('.view-more');
    viewMore.style.display = 'none';
}

function handleViewMore(element) {
    const parentElement = element.closest('.job-card');
    const viewMore = parentElement.querySelector('.view-more');
    const elListContainer = parentElement.querySelector(".list-container");
    console.log(elListContainer);
    const isHide = elListContainer.classList.contains("hide");
    console.log(isHide);
    if (isHide){    
        showJobList(parentElement)
        viewMore.innerHTML = 'Less more';
    }else{
        hiddenJobList(parentElement)
        viewMore.innerHTML = 'View more';
    }

    /* console.log(viewMore.classList);
 
     if (viewMore.classList.value.includes('view more')){
     const  sectionContent = parentElement.querySelector('.job-list');
     sectionContent.forEach((element) => {
     element.style.display ='block';
    });
 
    viewMore.classList.remove('view-more')
    viewMore.classList.add('less-more')
    viewMore.innerHTML =='Less more';
 
  }else{
     const sectionContent = parentElement.querySelector('.job-list');
     sectionContent.forEach((element) => {
         element.style.display ='none';
        });
        viewMore.classList.remove('less-more')
    viewMore.classList.add('view-more')
        viewMore.innerHTML == 'View more';
     }
 }*/




    // const sectionContent = parentElement.querySelector(".job-list");
    // console.log('check section', sectionContent);
    // sectionContent.classList.remove("hide");
}

function showJobList(parentElement) {
    const sectionContent = parentElement.querySelector(".list-container");
    console.log('check section', sectionContent);
    sectionContent.classList.remove("hide");
}

function hiddenJobList(parentElement){
    const sectionContent = parentElement.querySelector(".list-container");
    console.log('check section', sectionContent);
    sectionContent.classList.add("hide");
}
