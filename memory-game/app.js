document.addEventListener('DOMContentLoaded',()=>{
  const cardsArray = [
    {
      name: 'fries',
      img: 'js-1st_game_images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'js-1st_game_images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'js-1st_game_images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'js-1st_game_images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'js-1st_game_images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'js-1st_game_images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'js-1st_game_images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'js-1st_game_images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'js-1st_game_images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'js-1st_game_images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'js-1st_game_images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'js-1st_game_images/hotdog.png'
    }
  ];

    //randomly sort the array
    cardsArray.sort(()=>0.5-Math.random)

    let grid = document.querySelector('.grid')

    let cardobjImage=[]
    let cardobjID=[]
    let cardswon=[]

    //function to create grid
    for(var i = 0 ; i <cardsArray.length ; i++)
    {
        let card = document.createElement('img');
        card.setAttribute('src','js-1st_game_images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard);
        grid.appendChild(card)
    }
  
    //checking for match
    function checkMatch()
    {
      let cards=document.querySelectorAll('img')
      //if user selects the same image
      if(cardobjID[0]===cardobjID[1])
      {
        alert("you have choose the same image choose different one !!!!!!!!!!!!")
        cards[cardobjID[0]].setAttribute('src','js-1st_game_images/blank.png')
        cards[cardobjID[1]].setAttribute('src','js-1st_game_images/blank.png')
      }

      //if user selects the correct pair
      else if(cardobjImage[0]===cardobjImage[1])
      {
        alert("you got a correct pair :)))")
        cardswon.push(cardobjImage[0])
        cards[cardobjID[0]].setAttribute('src','js-1st_game_images/white.png')
        cards[cardobjID[1]].setAttribute('src','js-1st_game_images/white.png')
      }

      //if user selects wrong pair
      else
      {
        alert("you got a wrong pair :(((")
        cards[cardobjID[0]].setAttribute('src','js-1st_game_images/blank.png')
        cards[cardobjID[1]].setAttribute('src','js-1st_game_images/blank.png')
      }

      //if he selects all pairs available
      if(cardswon.length===cardsArray/2)
      {
        alert("huraay!!!!!!! you found all the pairs :)))))))))))")
        
      }
       
      cardobjID=[]
      cardobjImage=[]
      
    }
   

//function to flip card
    function flipcard()
    {
      let imgID=this.getAttribute('data-id');
      cardobjImage.push(cardsArray[imgID].name);
      cardobjID.push(imgID);
      this.setAttribute('src',cardsArray[imgID].img)
      if(cardobjImage.length===2)
      {
        //check for the cards match
        setTimeout(checkMatch,500)
      }
    }

})