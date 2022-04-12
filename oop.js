let countKeyProduct = 0
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
function Product(name,price,brand,about,nProduct,material,color,warranty,power){
    class AbstractProduct {
        constructor(){
        this.key=new String(countKeyProduct++)
        this.name=name 
        this.about=about
        this.price=price
        this.nProduct=this.nProduct
        this.review=reviews
        this.images=['im1','im2','im3']
        this.date=new Date()
        this.brand=brand 
        getFullInformation=function(fullinformation){
            if (fullinformation== new AbstractProduct)
            return fullinformation
        }
        getPriceForQuantity=function(int) { 
            getPrice=this.price*int
        }
        getkey=function(getKey){
            if(getKey===this.key){
                return this.key
            }
        }
        this.setKey=this.key
        getname=function(getName){
            if(getName==this.name){
                return this.name 
            }
        }
        this.setName=this.name 
        getabout=function(getAbout){
            if(getAbout==this.about){
                return this.about
            }
        }
        this.setAbout=this.about 
        getprice=function(getPrice){
            if(getPrice==this.price){
                return this.price
            }
        }
        this.setPrice=this.price
        getnProduct=function(getNProduct){
            if(getNProduct==this.nProduct){
                return this.nProduct
            }
        }
        this.setNProduct=this.nProduct
        getreview=function(getReview){for(let i=0;i<reviews.length;i++){
            if(getReview==reviews[i]){
                return reviews[i]
            }
        }
    }
        this.setReview=this.review
        getimage=function(getImage){for(let r=0;r<images.length;r++){
            if(getImage==images[r]){
                return images[r]
            }
        }
    }
        this.setImages=this.images
        getdate=function(getDate){
            if(this.date==getDate){
                return this.date
            }
        }
        this.setDate=this.date
        getbrand=function(getBrand){
            if(getBrand==this.brand){
                return this.brand
            }
        }
        this.setBrand=this.brand
}
    }
    class Clothes {
        constructor(){
        this.key=new String(countKeyProduct++)
        this.name=name 
        this.about=about
        this.price=price
        this.nProduct=this.nProduct
        this.review=reviews
        this.images=['im1','im2','im3']
        this.date=new Date()
        this.brand=brand 
        this.material=material
        this.color=color
        getFullInformation=function(fullinformation){
            if (fullinformation== new AbstractProduct)
            return fullinformation
        }
        getPriceForQuantity=function(int) { 
            getPrice=this.price*int
        }
        getmaterial=function(getMaterial){
            if(getMaterial==this.material){
                return this.material
            }
        }
        this.setMaterial=this.material 
        getcolor=function(getColor){
            if(getColor==this.color){
                return this.color
            }
        }
        this.setColor=this.color
    }
    }
    class Electronic {
        constructor(){
        this.key=new String(countKeyProduct++)
        this.name=name 
        this.about=about
        this.price=price
        this.nProduct=this.nProduct
        this.review=reviews
        this.images=['im1','im2','im3']
        this.date=new Date()
        this.brand=brand
        this.warranty=warranty 
        this.power=power
        getFullInformation=function(fullinformation){
            if (fullinformation== new AbstractProduct)
            return fullInformation
        }
        getPriceForQuantity=function(int) { 
            getPrice=this.price*int
        }
        getwarranty=function(getWarranty){
            if(getWarranty==this.warranty){
                return this.warranty
            }
        }
        this.setWarranty=this.warranty
        getpower=function(getPower){
            if(gerPower==this.power){
                return this.power        
            }
        }
        this.setPower=this.power
    }
}
}
