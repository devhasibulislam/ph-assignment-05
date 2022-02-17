document.getElementById('first-portion').addEventListener('mouseover', function(){
    document.getElementById('first-portion').style.overflow = 'hidden';
});

document.querySelector('#site-image img').addEventListener('mouseover', function(){
    document.querySelector('#site-image img').style.transition = '1s linear';
    document.querySelector('#site-image img').style.transform = 'scale(1.05)';
});

document.querySelector('#site-image img').addEventListener('mouseout', function(){
    document.querySelector('#site-image img').style.transition = '1s linear';
    document.querySelector('#site-image img').style.transform = 'scale(1)';
});
