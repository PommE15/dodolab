/*
we load the yui seed file.
then we configure yui to get modules from the gallery and select what we need
*/

YUI().use('node', 'gallery-masonry', function(Y){
	/*var myContainer = Y.one('#container');
	var	masonry = new Y.Masonry({
			node: myContainer,
			itemSelector: '.box',
			isAnimated: true
		});*/
	var myIframe = Y.Node.create('<iframe class="center" src="http://www.youtube.com/embed/ovkax0eajMM?feature=player_detailpage" frameborder="0" allowfullscreen></iframe>');	
	Y.one("#video").append(myIframe);
}); 