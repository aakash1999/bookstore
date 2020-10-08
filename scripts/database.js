document.addEventListener('DOMContentLoaded', function(e){
    populateAll();
});

function populateAll(){
    books = [];
    cart = [];
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const index = urlParams.get('msg');
    if(index!=null){
        document.getElementsByClassName('alert')[0].style = 'display:block';
        
    }

    var db = openDatabase('bookdb','1.0','online bookstore',2*1024*1024);
db.transaction(function (tx){
    tx.executeSql('create table if not exists books(bookId unique, name, author, price, description, shortDes, image)');
    tx.executeSql('create table if not exists cart(cartId unique, bookId, name, price)');
});

db.transaction(function (tx) { 
   tx.executeSql('SELECT * FROM books', [], function (tx, results) { 
      var len = results.rows.length, i;
      if(len==0){
         console.log('No records present');
         books = [{
             bookId : "1",
             name : "The Alchemist",
             author : 'Paulo Coelho',
             price : "150",
             shortDes : "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain",
             description : "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago is an eternal testament to the transforming power of our dreams and the importance of listening to our hearts.",
             image : "alchemist"
             
         },
         {
             bookId : "2",
             name : "1984",
             author : 'George Orwell',
             price : "180",
             shortDes : "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.",
             description : "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.",
             image : "1984"
             
         },
         {
             bookId : "3",
             name : "The Great Gatsby",
             author : 'F. Scott Fitzgerald',
             price : "200",
             shortDes : "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers.",
             description : "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.The Great Gatsby is one of the great classics of twentieth-century literature.",
             image : "gatsby"
             
         },
         {
             bookId : "4",
             name : "The Old Man and the Sea",
             author : 'Ernest Hemingway',
             price : "200",
             shortDes : "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal.",
             description : "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream. Using the simple, powerful language of a fable, Hemingway takes the timeless themes of courage in the face of defeat and personal triumph won from loss and transforms them into a magnificent twentieth-century classic.",
             image : "oldman"
             
         },
         {
             bookId : "5",
             name : "The Hobbit There and Back Again",
             author : 'J.R.R. Tolkien',
             price : "300",
             shortDes : "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.Written for J.R.R. Tolkien’s own children.",
             description : "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001). Unforgettable!",
             image : "hobbit"
             
         },
         {
             bookId : "6",
             name : "Murder on the Orient Express",
             author : 'Agatha Christie',
             price : "250",
             shortDes : "Le train est aussi dangereux que le paquebot » affirme Hercule Poirot…",
             description : "Le train est aussi dangereux que le paquebot » affirme Hercule Poirot…Le lendemain, dans une voiture de l’Orient-Express bloqué par les neiges yougoslaves, on découvre le cadavre d’un américain lardé de douze coups de couteau. L’assassin n’a pu venir de l’extérieur : voici donc un huis clos, le plus fameux, peut-être, de toute la littérature policière. Pour mener son enquête, le petit détective belge a le choix entre une princesse russe, une Américaine fantasque, le secrétaire de la victime, un couple de Hongrois distingués, l’inévitable colonel de retour des Indes, les domestiques de tout ce beau monde et le contrôleur du train.",
             image : "orient"
             
         },
         {
             bookId : "7",
             name : "The Little Prince",
             author : 'Antoine de Saint-Exupéry',
             price : "220",
             shortDes : "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language.",
             description : "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures.",
             image : "price"
             
         },
         {
             bookId : "8",
             name : "The Metamorphosis",
             author : 'Franz Kafka',
             price : "350",
             shortDes : "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely.",
             description : "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes. With it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosishas taken its place as one of the most widely read and influential works of twentieth-century fiction. As W.H. Auden wrote, Kafka is important to us because his predicament is the predicament of modern man.",
             image : "meta"
             
         },
         {
             bookId : "9",
             name : "A Study in Scarlet",
             author : 'Arthur Conan Doyle',
             price : "350",
             shortDes : "There's a scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it.'From the moment Dr John Watson takes lodgings in Baker Street with the consulting detective Sherlock Holmes, he becomes intimately acquainted with the bloody violence and frightening ingenuity of the criminal mind.",
             description : "'There's a scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it.'From the moment Dr John Watson takes lodgings in Baker Street with the consulting detective Sherlock Holmes, he becomes intimately acquainted with the bloody violence and frightening ingenuity of the criminal mind.In A Study in Scarlet , Holmes and Watson's first mystery, the pair are summoned to a south London house where they find a dead man whose contorted face is a twisted mask of horror. The body is unmarked by violence but on the wall a mysterious word has been written in blood.The police are baffled by the crime and its circumstances. But when Sherlock Holmes applies his brilliantly logical mind to the problem he uncovers a tragic tale of love and deadly revenge .",
             image : "sherlock"
             
         },
         {
             bookId : "10",
             name : "Do Androids Dream of Electric Sheep?",
             author : 'Philip K. Dick',
             price : "450",
             shortDes : "It was January 2021, and Rick Deckard had a license to kill.",
             description : "It was January 2021, and Rick Deckard had a license to kill.Somewhere among the hordes of humans out there, lurked several rogue androids. Deckard's assignment--find them and then...retire them. Trouble was, the androids all looked exactly like humans, and they didn't want to be found!",
             image : "blade"
             
         }];
          books.forEach(function (item,index){
              tx.executeSql('INSERT INTO books VALUES (?,?,?,?,?,?,?)', [item['bookId'], item['name'],item['author'],item['price'],item['shortDes'],item['description'],item['image']]); 
          });
          
          
          console.log('records inserted');
          if(document.title==='Online Bookstore - Index'){
            populate();   
          }
      }else{
          retrievedBooks = results.rows;
          var len = retrievedBooks.length;
          for(var i = 0;i<len;i++){
              books.push(retrievedBooks[i]);
          }
          console.log('Array populated');
          if(document.title==='Online Bookstore - Index'){
            populate();   
          }
      }
  
   }, null); 
});

db.transaction(function(tx){
    tx.executeSql('SELECT * FROM cart', [], function (tx, results) { 
      var len = results.rows.length;
      if(len==0){
          console.log('cart is empty');
      }else{
          retrievedBooks = results.rows;
          var len = retrievedBooks.length;
          for(var i = 0;i<len;i++){
              cart.push(retrievedBooks[i]);
          }
          console.log('Cart populated');
      }
      var navDiv = document.getElementsByClassName('navbar')[0];
        var a1 = document.createElement('a');
        a1.setAttribute('href','index.html');
        navDiv.appendChild(a1);
        a1.appendChild(document.createTextNode('Home'));
        
        var a2 = document.createElement('a');
        a2.setAttribute('href','cart.html');
        navDiv.appendChild(a2);
        a2.appendChild(document.createTextNode('Cart['+ cart.length + ']'));
  
   }, null); 
});
}
function addToCart(){
    books = [];
    cart = [];

    var db = openDatabase('bookdb','1.0','online bookstore',2*1024*1024);
db.transaction(function (tx){
    tx.executeSql('create table if not exists books(bookId unique, name, author, price, description, shortDes, image)');
    tx.executeSql('create table if not exists cart(cartId unique, bookId, name, price)');
});
db.transaction(function(tx){
    tx.executeSql('SELECT * FROM cart', [], function (tx, results) { 
      var len = results.rows.length;
      if(len==0){
          console.log('cart is empty');
      }else{
          retrievedBooks = results.rows;
          var len = retrievedBooks.length;
          for(var i = 0;i<len;i++){
              cart.push(retrievedBooks[i]);
          }
          console.log('Cart populated');
      }
  
   }, null); 
});
db.transaction(function (tx) { 
   tx.executeSql('SELECT * FROM books', [], function (tx, results) { 
      var len = results.rows.length, i;
      if(len==0){
         console.log('No records present');
         books = [{
             bookId : "1",
             name : "The Alchemist",
             author : 'Paulo Coelho',
             price : "150",
             shortDes : "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain",
             description : "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago is an eternal testament to the transforming power of our dreams and the importance of listening to our hearts.",
             image : "alchemist"
             
         },
         {
             bookId : "2",
             name : "1984",
             author : 'George Orwell',
             price : "180",
             shortDes : "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.",
             description : "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.",
             image : "1984"
             
         },
         {
             bookId : "3",
             name : "The Great Gatsby",
             author : 'F. Scott Fitzgerald',
             price : "200",
             shortDes : "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers.",
             description : "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.The Great Gatsby is one of the great classics of twentieth-century literature.",
             image : "gatsby"
             
         },
         {
             bookId : "4",
             name : "The Old Man and the Sea",
             author : 'Ernest Hemingway',
             price : "200",
             shortDes : "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal.",
             description : "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream. Using the simple, powerful language of a fable, Hemingway takes the timeless themes of courage in the face of defeat and personal triumph won from loss and transforms them into a magnificent twentieth-century classic.",
             image : "oldman"
             
         },
         {
             bookId : "5",
             name : "The Hobbit There and Back Again",
             author : 'J.R.R. Tolkien',
             price : "300",
             shortDes : "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.Written for J.R.R. Tolkien’s own children.",
             description : "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001). Unforgettable!",
             image : "hobbit"
             
         },
         {
             bookId : "6",
             name : "Murder on the Orient Express",
             author : 'Agatha Christie',
             price : "250",
             shortDes : "Le train est aussi dangereux que le paquebot » affirme Hercule Poirot…",
             description : "Le train est aussi dangereux que le paquebot » affirme Hercule Poirot…Le lendemain, dans une voiture de l’Orient-Express bloqué par les neiges yougoslaves, on découvre le cadavre d’un américain lardé de douze coups de couteau. L’assassin n’a pu venir de l’extérieur : voici donc un huis clos, le plus fameux, peut-être, de toute la littérature policière. Pour mener son enquête, le petit détective belge a le choix entre une princesse russe, une Américaine fantasque, le secrétaire de la victime, un couple de Hongrois distingués, l’inévitable colonel de retour des Indes, les domestiques de tout ce beau monde et le contrôleur du train.",
             image : "orient"
             
         },
         {
             bookId : "7",
             name : "The Little Prince",
             author : 'Antoine de Saint-Exupéry',
             price : "220",
             shortDes : "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language.",
             description : "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures.",
             image : "price"
             
         },
         {
             bookId : "8",
             name : "The Metamorphosis",
             author : 'Franz Kafka',
             price : "350",
             shortDes : "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely.",
             description : "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes. With it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosishas taken its place as one of the most widely read and influential works of twentieth-century fiction. As W.H. Auden wrote, Kafka is important to us because his predicament is the predicament of modern man.",
             image : "meta"
             
         },
         {
             bookId : "9",
             name : "A Study in Scarlet",
             author : 'Arthur Conan Doyle',
             price : "350",
             shortDes : "There's a scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it.'From the moment Dr John Watson takes lodgings in Baker Street with the consulting detective Sherlock Holmes, he becomes intimately acquainted with the bloody violence and frightening ingenuity of the criminal mind.",
             description : "'There's a scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it.'From the moment Dr John Watson takes lodgings in Baker Street with the consulting detective Sherlock Holmes, he becomes intimately acquainted with the bloody violence and frightening ingenuity of the criminal mind.In A Study in Scarlet , Holmes and Watson's first mystery, the pair are summoned to a south London house where they find a dead man whose contorted face is a twisted mask of horror. The body is unmarked by violence but on the wall a mysterious word has been written in blood.The police are baffled by the crime and its circumstances. But when Sherlock Holmes applies his brilliantly logical mind to the problem he uncovers a tragic tale of love and deadly revenge .",
             image : "sherlock"
             
         },
         {
             bookId : "10",
             name : "Do Androids Dream of Electric Sheep?",
             author : 'Philip K. Dick',
             price : "450",
             shortDes : "It was January 2021, and Rick Deckard had a license to kill.",
             description : "It was January 2021, and Rick Deckard had a license to kill.Somewhere among the hordes of humans out there, lurked several rogue androids. Deckard's assignment--find them and then...retire them. Trouble was, the androids all looked exactly like humans, and they didn't want to be found!",
             image : "blade"
             
         }];
          books.forEach(function (item,index){
              tx.executeSql('INSERT INTO books VALUES (?,?,?,?,?,?,?)', [item['bookId'], item['name'],item['author'],item['price'],item['shortDes'],item['description'],item['image']]); 
          });
          
          const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const index = urlParams.get('index');
    var bookItem = books[index];
           var cartId = 0;
          console.log(cart.length)
          if(cart.length != 0){
              cartId = cart.length;
          }
          
          
    var cartItem = {cartId : String(cartId), bookId : bookItem['bookId'], name : bookItem['name'], price : bookItem['price']};
          console.log(cartItem);
          
          tx.executeSql('INSERT INTO cart VALUES (?,?,?,?)', [cartItem['cartId'], cartItem['bookId'],cartItem['name'],cartItem['price']]);
          console.log('added to cart successfully');
          
          window.location.href = 'index.html?msg=Added To Cart Successfully';
          
        
          
      }else{
          retrievedBooks = results.rows;
          var len = retrievedBooks.length;
          for(var i = 0;i<len;i++){
              books.push(retrievedBooks[i]);
          }
         const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const index = urlParams.get('index');
    var bookItem = books[index];
           var cartId = 0;
          console.log(cart.length);
          if(cart.length != 0){
              cartId = cart.length;
          }
          
          
    var cartItem = {cartId : String(cartId), bookId : bookItem['bookId'], name : bookItem['name'], price : bookItem['price']};
          console.log(cartItem);
          
          tx.executeSql('INSERT INTO cart VALUES (?,?,?,?)', [cartItem['cartId'], cartItem['bookId'],cartItem['name'],cartItem['price']]);
          console.log('added to cart successfully');
          
          window.location.href = 'index.html?msg=Added To Cart Successfully';
    
      }
  
   }, null); 
});


}
function displayCart(){
    cartItems = [];

    var db = openDatabase('bookdb','1.0','online bookstore',2*1024*1024);
db.transaction(function (tx){
    tx.executeSql('create table if not exists books(bookId unique, name, author, price, description, shortDes, image)');
    tx.executeSql('create table if not exists cart(cartId unique, bookId, name, price)');
});
db.transaction(function(tx){
    tx.executeSql('SELECT * FROM cart', [], function (tx, results) { 
      var len = results.rows.length;
      if(len==0){
          console.log('cart is empty');
      }else{
          retrievedBooks = results.rows;
          var len = retrievedBooks.length;
          for(var i = 0;i<len;i++){
              cartItems.push(retrievedBooks[i]);
          }
          
          var x = document.getElementById("menuTable");
    
    var totalPrice = 0;
    var x = document.getElementById("menuTable");
    var heading = document.createElement('tr');
    x.appendChild(heading);
    var head = document.createElement('th');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Name'));
    head = document.createElement('th');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Price'));
    head = document.createElement('th');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Action'));
    
   function pop(item, index){
       var tr = document.createElement('tr');
       x.appendChild(tr);
       
       var td = document.createElement('td');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['name']));
        td = document.createElement('td');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['price']));
        td = document.createElement('td');
       tr.appendChild(td);
       td.innerHTML = "<button><a href = 'deleteFromCart.html?index="+index+"'>Delete</a></button>";
       
       totalPrice = parseInt(totalPrice) + parseInt(item['price']);
       
   }
cartItems.forEach(pop);
          document.getElementById('total').innerHTML = "<h4>Total Price : "+totalPrice+"</h4>"
          
          const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const index = urlParams.get('msg');
    if(index!=null){
    document.getElementById('result').innerHTML = "<h3>"+index+"</h3>";
      }
          
        var button = document.createElement('button');
          button.setAttribute('class','button button1');
          var body = document.getElementsByClassName('body')[0];
          body.appendChild(button);
          var a = document.createElement('a');
          a.setAttribute('href','payment.html');
          a.setAttribute('id','payButton');
          button.appendChild(a);
          a.appendChild(document.createTextNode('Proceed To Pay'));
    
      }
    

  
   }, null); 
});
               }
function deleteFromCart(){
     cartItems = [];

    var db = openDatabase('bookdb','1.0','online bookstore',2*1024*1024);
db.transaction(function (tx){
    tx.executeSql('create table if not exists books(bookId unique, name, author, price, description, shortDes, image)');
    tx.executeSql('create table if not exists cart(cartId unique, bookId, name, price)');
});
db.transaction(function(tx){
    tx.executeSql('SELECT * FROM cart', [], function (tx, results) { 
      var len = results.rows.length;
      if(len==0){
          console.log('cart is empty');
      }else{
          retrievedBooks = results.rows;
          var len = retrievedBooks.length;
          for(var i = 0;i<len;i++){
              cartItems.push(retrievedBooks[i]);
          }
          
          const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const index = urlParams.get('index');
    var rowId = parseInt(index) + 1;
    tx.executeSql('DELETE FROM cart WHERE name = ?', [cartItems[index]['name']]);
    window.location.href = 'cart.html?msg=Deleted From Cart Successfully';
          
      }
    },null);
    
    
});
}
function payment(){
    cartItems = [];

    var db = openDatabase('bookdb','1.0','online bookstore',2*1024*1024);
db.transaction(function (tx){
    tx.executeSql('create table if not exists books(bookId unique, name, author, price, description, shortDes, image)');
    tx.executeSql('create table if not exists cart(cartId unique, bookId, name, price)');
});
db.transaction(function(tx){
    tx.executeSql('SELECT * FROM cart', [], function (tx, results) { 
      var len = results.rows.length;
      if(len==0){
          console.log('cart is empty');
      }else{
          retrievedBooks = results.rows;
          var len = retrievedBooks.length;
          for(var i = 0;i<len;i++){
              cartItems.push(retrievedBooks[i]);
          }
    var totalPrice = 0;
   function pop(item, index){
       
       totalPrice = parseInt(totalPrice) + parseInt(item['price']);
       
   }
cartItems.forEach(pop);
          console.log(totalPrice);
          document.getElementById('total').innerHTML = "<h4>Total Price : "+totalPrice+"</h4>";
          
          
    
      }
    

  
   }, null); 
});
    var creditCard = document.getElementById('ccnum').value;
    var isValidCreditCard = valid_credit_card(creditCard);
    var buyerName = document.getElementById('fname').value;
    if(isValidCreditCard==true){
        db.transaction(function(tx){
            console.log('deleting');
            tx.executeSql('DELETE from cart');
            window.location.href = 'confirmation.html?name='+buyerName;
        });
        
    }else{
        document.getElementById('error').innerHTML = '<p style = "color:red;">Invalid Card Details</p>'
    }
}