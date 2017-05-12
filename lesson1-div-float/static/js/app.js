/**
 * Created by virgil on 2017/5/12.
 */
window.onload = function () {
    console.log('the window load over include the image')
};


function show(event) {
    console.log('change the visibility');
    var videoContent = document.getElementById('video-content');
    var focus = event.target;

    var left = event.target.offsetLeft;
    var top = event.target.offsetTop;

    videoContent.style.width = focus.width + 'px';
    videoContent.style.height = focus.height / 3 + 'px';
    videoContent.style.left = left + 'px';
    videoContent.style.top = top + 2 * focus.height / 3 + 'px';
    videoContent.style.visibility = 'visible';
}

function hide(event) {
    console.log('change the visibility');



    var videoContent = document.getElementById('video-content');
    videoContent.getAttribute('mouseover')


    videoContent.style.visibility = 'hidden';



}

document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM content is loaded !');
    //add mouseover event for a

    var videoThumb = document.getElementsByClassName('video');

    for (var i = 0; i < videoThumb.length; i++) {
        console.log(i);
        videoThumb[i].setAttribute('id', 'video' + i);

        videoThumb[i].addEventListener('mouseover', function (event) {
            console.log(event.target.id + " mouse over");
            setTimeout(show(event), 200);
        });

        videoThumb[i].addEventListener('mouseout', function () {
            console.log(event.target.id + " mouse out");

            setTimeout(hide(event),200);
        });
    }

    var videoContent = document.getElementById('video-content');
    videoContent.addEventListener('mouseover',function (event) {
        console.log("videoContent mouse over");
        this.style.visibility = 'visiable';
    });

})
