function populate(){
    var gridDiv = document.getElementsByClassName('grid')[0];
    for(var i = 0;i<books.length;i++){
        console.log('hi');
        var article = document.createElement('article');
        gridDiv.appendChild(article);
        var img = document.createElement('img');
        img.setAttribute('src','./images/' + books[i]['image'] + '.jpg');
        
        img.setAttribute('alt','Book Photo');
        article.appendChild(img);
        var div = document.createElement('div');
        div.setAttribute('class','text');
        article.appendChild(div);
        var h3 = document.createElement('h3');
        div.appendChild(h3);
        h3.appendChild(document.createTextNode(books[i]['name']));
        var p = document.createElement('p');
        div.appendChild(p);
        var readLess = String(books[i]['shortDes']).substring(0,50);
        p.appendChild(document.createTextNode(readLess));
        var dotSpan = document.createElement('span');
        dotSpan.setAttribute('id','dots');
        p.appendChild(dotSpan);
        dotSpan.appendChild(document.createTextNode('...'));
        var moreButton = document.createElement('button');
        moreButton.setAttribute('id','myBtn');
        moreButton.setAttribute('onclick','showMoreFunction()');
        p.appendChild(moreButton);
        moreButton.appendChild(document.createTextNode('Read More'));
        var priceP = document.createElement('p');
        div.appendChild(priceP);
        var icon = document.createElement('i');
        icon.setAttribute('class','fa fa-rupee');
        priceP.appendChild(icon);
        priceP.appendChild(document.createTextNode(books[i]['price']));
        var button = document.createElement('button');
        button.setAttribute('id','cardButton');
        div.appendChild(button);
        var a = document.createElement('a');
        a.setAttribute('href',"addToCart.html?index="+i);
        a.appendChild(document.createTextNode('Add To Cart'));
        button.appendChild(a);
    }
}




