let logoCo = [
    {id:1, Image:'./images/svg/google.svg'},
    {id:2, Image:'./images/svg/microsoft.svg'},
    {id:3, Image:'./images/svg/paypal.svg'},
    {id:4, Image:'./images/svg/shopify.svg'},
    {id:5, Image:'./images/svg/spotify.svg'},
]

let userBox= [
    {id:1, number:'33',text:'محصول'},
    {id:1, number:'7,000',text:'تعداد مشتریان'},
    {id:1, number:'18',text:'مدرس'},
    {id:1, number:'15,400',text:'نظر شرکت کننده'},
]

let articles= [
    {id:1 , Image: "./images/man1.png" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" ,data:'26مرداد 1401'},
    {id:2 , Image: "./images/woman2.png" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" ,data:'26مرداد 1401'},
    {id:3 , Image: "./images/man2.png" , text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" ,data:'26مرداد 1401'},
]

let $ = document

let userItems = $.querySelector('.boxuser-items')
let boxItems = $.querySelector('.box-cmp-items')
let artiecItems = $.querySelector('.left__items')

function boxTextImg(btt){
    artiecItems.insertAdjacentHTML('beforeend',' <div class="left__item"><img src="'+btt.Image+'" alt="" class="left__item-img"><div class="left__item-box"><span class="item-box-text">'+btt.text+'</span><small class="item-box-data">'+btt.data+'</small></div></div>')
}

articles.forEach(boxTextImg)

function boxItem(box){

    userItems.insertAdjacentHTML('beforeend',' <div class="boxuser-items-item"  data-aos="fade-up-right" data-aos-delay="100"><h2 class="items-item-number">'+box.number+'</h2><span class="items-item-text">'+box.text+'</span></div>')
}

    userBox.forEach(boxItem)


function imgItem(img){
    // console.log(img);
    boxItems.insertAdjacentHTML('beforeend',' <div class="cmp-item" data-aos="fade-up-right" data-aos-delay="100"><img src="'+img.Image+'" alt="" class="cmp-item-img"></div>')
}

logoCo.forEach(imgItem)



export {imgItem , boxItem ,boxTextImg}