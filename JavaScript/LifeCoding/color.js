var Link = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length){
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        
        // jQuery
        $('a').css('color', color);
    }
}

var Body = {
    setColor:function(color){
        // document.querySelector('body').style.color = color;

        // jQuery
        $('body').css('color',color);
    },
    setBackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor = color;

        // jQuery
        $('body').css('backgroundColor',color);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        // target.style.backgroundColor = 'black';
        Body.setBackgroundColor('black');
        // target.style.color = 'white';
        Body.setColor('white');
        self.value = 'day';
        Link.setColor('powderblue');
        

    } else {
        // target.style.backgroundColor = 'white';
        Body.setBackgroundColor('white');
        // target.style.color = 'black';
        Body.setColor('black');
        self.value = 'night';
        Link.setColor('blue');
    }
}