// Set the default variables for what's being shown
var showType = "all";
var muppetType = "all";
var $grid;

//-------------------------------------------------------------//
//-------DOCUMENT READY FUNCTION-------//
//-------------------------------------------------------------//


//When the page is loaded, run the javascript
$(document).ready(function() {


	//SHOWING MUPPETS IN THE GRID without imgs being in the html
	$(muppetData).each(function(key, value) {

		//jquery append - inserts inside the target
		var newItem = '<div class="grid-item ' + value.category + ' ' + value.show + '" data-muppetType="' + value.category + '" data-performer="' + value.originalVoice + '" data-showType="' + value.show + '" data-bothType="' + value.bothTypeBut + '">';
		// console.log(newItem)
		newItem = newItem + '<img src="images/muppetImages/' + value.filename + '.png" class="muppetImg" alt="' + value.muppet + '">';
		newItem = newItem + '<p class="name">' + value.muppet + '</p>';
		newItem = newItem + '</div>';

		// add in newItem (the structure of the filename for the muppet images) to the grid
		$('.grid').append(newItem);

	});

	// external js: isotope.pkgd.js


	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
		getSortData: {
			name: '.name',
			// symbol: '.symbol',
			// number: '.number parseInt',
			// muppetType: '[data-muppetType]',
		},
		sortBy: ['name']
	});

	// filter functions
	// var filterFns = {
	//
	// };


	// bind filter button click

	let filters = {};

	$('.filter .button').on('click', function(event) {

		// Prevent the anchor from going anywhere
		event.preventDefault();

		// Handle the button active states per button-group
		let $buttonGroup = $(this).parent();
		$buttonGroup.find('.is-clicked').removeClass('is-clicked');
		$(this).addClass('is-clicked');

		// Separate filters by button group
		let filterGroup = $buttonGroup.attr('data-filter-group');
		filters[filterGroup] = $(this).attr('data-filter-value');

		// Convert all filters into a combined CSS class selector string, e.g. ".animal.muppetShow"
		let activeFilters = Object.values(filters).map(filter => '.' + filter).join('');

		// Activate filter
		$grid.isotope({
			filter: activeFilters
		});

	});

	// // bind sort button click
	// $('#sorts').on('click', 'button', function() {
	// 	var sortByValue = $(this).attr('data-sort-by');
	// 	$grid.isotope({
	// 		sortBy: sortByValue
	// 	});
	// });

	// change is-checked class on buttons
	// $('.button-group').each(function(i, buttonGroup) {
	// 	var $buttonGroup = $(buttonGroup);
	// 	$buttonGroup.on('click', 'button', function() {
	// 		$buttonGroup.find('.is-clicked').removeClass('is-clicked');
	// 		$(this).addClass('is-clicked');
	// 	});
	// });

});
