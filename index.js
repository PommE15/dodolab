/*
we load the yui seed file.
then we configure yui to get modules from the gallery and select what we need
*/

YUI({

	gallery: 'gallery-2011.04.20-13-04' // Last Gallery Build of this module.

}).use('node', 'gallery-yui-slideshow', /*'gallery-masonry',*/ function(Y){
	/*var myContainer = Y.one('#container');
	var	masonry = new Y.Masonry({
			node: myContainer,
			itemSelector: '.box',
			isAnimated: true
		});*/
	
	/*iframe video*/
	var myIframe = Y.Node.create('<iframe class="center" src="http://www.youtube.com/embed/ovkax0eajMM?feature=player_detailpage" frameborder="0" allowfullscreen></iframe>');	
	Y.one('#video').replace(myIframe);
	
	/*slideshow*/
	var mySlideshow = Y.one('#slideshow');
	mySlideshow.append('<img src="../assets/swing2.jpg" title="Click to Next"><img src="../assets/swing3.jpg" title="Click to Next">');
	var slideshow = new Y.Slideshow({ 
			srcNode: mySlideshow,
			transition: Y.Slideshow.PRESETS.slideUp,
			duration: 1,
			interval: 8,
			nextButton: '#slideshow'
		});
	slideshow.render();
}); 