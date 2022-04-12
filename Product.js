//создание продукта
let countIDProduct = 0
let countIDReview = 0
function Review(author,comment,rating) {
    this.id = String(countIDReview++)
    this.author=author
    this.date=new Date()
    this.comment=comment
    this.rating=rating
}

let rev1 = new Review('sasha', 'good clothes', 5)
let rev2 = new Review('taras','bad',2)
let rev3 = new Review('masha','very good',5)

const reviews = [rev1, rev2, rev3]

function Product(name,price,brand,activeSize,quantity,){
    this.id=String(countIDProduct++)
    this.name=name
    this.price=price
    this.brand=brand
    this.size=['XS','S','M','L','XL','XL']
    this.activeSize=activeSize
    this.quantity=quantity
    this.date=new Date()
    this.review=reviews
    this.images=['im1','im2','im3']

    this.getReviewByID=function (id){for (let a=0;a<this.review.length;a++) {
        if (id===this.review[a]){
            return this.review[a]
        }
    }
}
    this.setReviewByID=Product.review
    
    this.getImage= function (image){for (let d=0;d<this.images.length;d++)
        if (image===this.images[d]){
            return this.images[d]
        }
        d++
    }
    this.setImage=Product.images

    this.setSize=function (newSize){this.size.push(newSize)
}
    this.deletSize =function(oldSize){
        for(let r=0;r<this.size.length;r++)
        if(oldSize===size[r]){
            delete this.size[r]
        }
    }
    this.newReview= function(review){this.review.push(review)
    }
    this.deletReview=function(oldreview){for(let t=0;t<this.reviews.length;t++){
        if(oldreview===reviews[t]){
            delete this.reviews[t]
        }
        t++
    }
    }
    this.getAverageRating= function(){
        let marks=0
        for(let fr=0;fr<this.review.length;fr++){
        marks=marks+this.review.rating
        fr++
    }
    this.sredniyrating= marks/this.review.length
    } 
}
let prod= new Product() 
console.log(prod,this.sredniyrating)
//поиск
let product=['Футболка Abibas',"Футболка NYKY","Футболка Pumpa","Куртка зара","Халат медицинский","Кросовки найк"]
function searchProduct(arr,search){
    let res = []
    for(let r = 0;r < arr.length; r++){
        if(arr[r].includes(search)){
            res.push(arr[r])
        }
    }
    return res
}
let results=searchProduct(product,'Ку')
console.log(results)
//сортировка
function sortProducts(product){
    let sort=product.sort()
    return sort
}
let sortirowka=sortProducts(product)
console.log(sortirowka)
