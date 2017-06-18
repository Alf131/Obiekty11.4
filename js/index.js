function Phone(brand, price, color, system, photo) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;
	this.photo = photo;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand +",color is " + this.color + " and the price is " + this.price + ", operating system is " + this.system + ".");
}
 var iPhone6S = new Phone("Apple", 2250, "silver", "iOS", '<p><img src="https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone-6s/apple-iphone-6s-2016-ios-ios-10-gallery-img-3-101016.jpg"></p>' );
 var Samsung_GalaxyS6 = new Phone("Samsung", 2100, "black", "Android", '<p><img src="http://images.samsung.com/is/image/samsung/uk-galaxy-s6-g920f-sm-g920fzkabtu-000000001-front-black?$PD_GALLERY_JPG$"></p>');
 var OnePlusOne = new Phone("OnePlus", 1800, "grey", "Android", '<p><img src="http://static.economic.bg/news/4/37911/oneplusone.jpg"></p>');

 Phone.prototype.printPhoto = function() {
 	$("body").append(this.photo);
 }
iPhone6S.printInfo();
iPhone6S.printPhoto();