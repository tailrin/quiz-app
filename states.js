const STORE = {
	states: [{
			name: "Alabama",
			capital: "Montgomery",
			cities: ["Montgomery", "Chalkville", "Shiloh", "Flomaton"]
		},
		{
			name: "Alaska",
			capital: "Juneau",
			cities: ["Juneau", "Whittier", "Dillingham", "Cordova"]
		},
		{
			name: "Arizona",
			capital: "Phoenix",
			cities: ["Phoenix", "San Manuel", "Oracle", "Apache Junction"]
		},
		{
			name: "Arkansas",
			capital: "Little Rock",
			cities: ["Little Rock", "Bearden", "Bentonville", "Dardanelle"]
		},
		{
			name: "California",
			capital: "Sacramento",
			cities: ["Sacramento", "Avenal", "Diamond Springs", "Fort Bragg"]
		},
		{
			name: "Colorado",
			capital: "Denver",
			cities: ["Denver", "Gunbarrel", "Frederick", "Nunn"]
		},
		{
			name: "Connecticut",
			capital: "Hartford",
			cities: ["Hartford", "Essex Village", "Mansfield Center", "Naugatuck borough"]
		},
		{
			name: "Delaware",
			capital: "Dover",
			cities: ["Dover", "Millville", "Dagsboro", "Farmington"]
		},
		{
			name: "Florida",
			capital: "Tallahassee",
			cities: ["Tallahassee", "Yankeetown", "Oldsmar", "West Pensacola"]
		},
		{
			name: "Georgia",
			capital: "Atlanta",
			cities: ["Atlanta", "Perry", "Pendergrass", "Marshallville"]
		},
		{
			name: "Hawaii",
			capital: "Honolulu",
			cities: ["Honolulu", "Kaneohe Station", "Kaunakakai", "Kahaluu"]
		},
		{
			name: "Idaho",
			capital: "Boise",
			cities: ["Boise", "Smelterville", "Georgetown", "Lost River"]
		},
		{
			name: "Illinois",
			capital: "Springfield",
			cities: ["Springfield", "Godley village", "Hoyleton village", "Huntley village"]
		},
		{
			name: "Indiana",
			capital: "Indianapolis",
			cities: ["Indianapolis", "Oakland City", "Michiana Shores", "Swayzee"]
		},
		{
			name: "Iowa",
			capital: "Des Moines",
			cities: ["Des Moines", "Irwin", "Glidden", "Bristow"]
		},
		{
			name: "Kansas",
			capital: "Topeka",
			cities: ["Topeka", "Nickerson", "Osborne", "Haddam"]
		},
		{
			name: "Kentucky",
			capital: "Frankfort",
			cities: ["Frankfort", "Bradfordsville", "Hyden", "Norbourne Estates"]
		},
		{
			name: "Louisiana",
			capital: "Baton Rouge",
			cities: ["Baton Rouge", "Cullen", "Labadieville", "Dodson village"]
		},
		{
			name: "Maine",
			capital: "Augusta",
			cities: ["Augusta", "Scarborough", "West Kennebunk", "Waldoboro"]
		},
		{
			name: "Maryland",
			capital: "Annapolis",
			cities: ["Annapolis", "Mount Aetna", "Cambridge", "Hurlock"]
		},
		{
			name: "Massachusetts",
			capital: "Boston",
			cities: ["Boston", "Great Barrington", "Leominster", "Quincy"]
		},
		{
			name: "Michigan",
			capital: "Lansing",
			cities: ["Lansing", "Free Soil village", "Taylor", "Sand Lake village"]
		},
		{
			name: "Minnesota",
			capital: "St. Paul",
			cities: ["St. Paul", "Karlstad", "St. Stephen", "Eyota"]
		},
		{
			name: "Mississippi",
			capital: "Jackson",
			cities: ["Jackson", "De Kalb", "Vicksburg", "Quitman"]
		},
		{
			name: "Missouri",
			capital: "Jefferson City",
			cities: ["Jefferson City", "Truxton village", "Iatan village", "Deepwater"]
		},
		{
			name: "Montana",
			capital: "Helena",
			cities: ["Helena", "Brockton", "Azure", "Butte-Silver Bow (balance)"]
		},
		{
			name: "Nebraska",
			capital: "Lincoln",
			cities: ["Lincoln", "Verdigre village", "Albion", "Grafton village"]
		},
		{
			name: "Nevada",
			capital: "Carson City",
			cities: ["Carson City", "Fernley", "Indian Springs", "Gardnerville"]
		},
		{
			name: "New Hampshire",
			capital: "Concord",
			cities: ["Concord", "Whitefield", "Dover", "Groveton"]
		},
		{
			name: "New Jersey",
			capital: "Trenton",
			cities: ["Trenton", "Iselin", "Hamburg borough", "Princeton Junction"]
		},
		{
			name: "New Mexico",
			capital: "Santa Fe",
			cities: ["Santa Fe", "Mosquero village", "Pecos village", "La Jara"]
		},
		{
			name: "New York",
			capital: "Albany",
			cities: ["Albany", "Smyrna village", "North Collins village", "Baldwin"]
		},
		{
			name: "North Carolina",
			capital: "Raleigh",
			cities: ["Raleigh", "Cofield village", "Lincolnton", "Cape Carteret"]
		},
		{
			name: "North Dakota",
			capital: "Bismarck",
			cities: ["Bismarck", "McClusky", "Grandin", "Drake"]
		},
		{
			name: "Ohio",
			capital: "Columbus",
			cities: ["Columbus", "Berea", "Glenford village", "North Star village"]
		},
		{
			name: "Oklahoma",
			capital: "Oklahoma City",
			cities: ["Oklahoma City", "Flute Springs", "Pink", "Eufaula"]
		},
		{
			name: "Oregon",
			capital: "Salem",
			cities: ["Salem", "Kirkpatrick", "Florence", "Astoria"]
		},
		{
			name: "Pennsylvania",
			capital: "Harrisburg",
			cities: ["Harrisburg", "McKees Rocks borough", "Lilly borough", "Luzerne borough"]
		},
		{
			name: "Rhode Island",
			capital: "Providence",
			cities: ["Providence", "East Providence", "Melville", "Greenville"]
		},
		{
			name: "South Carolina",
			capital: "Columbia",
			cities: ["Columbia", "Hollywood", "Princeton", "Parker"]
		},
		{
			name: "South Dakota",
			capital: "Pierre",
			cities: ["Pierre", "Rapid City", "Egan", "Carthage"]
		},
		{
			name: "Tennessee",
			capital: "Nashville",
			cities: ["Nashville", "Gainesboro", "Trenton", "Kenton"]
		},
		{
			name: "Texas",
			capital: "Austin",
			cities: ["Austin", "Reese Center", "Pettus", "Caddo Mills"]
		},
		{
			name: "Utah",
			capital: "Salt Lake City",
			cities: ["Salt Lake City", "West Bountiful", "Centerfield", "Gunnison"]
		},
		{
			name: "Vermont",
			capital: "Montpelier",
			cities: ["Montpelier", "Manchester village", "Wells River village", "Morrisville village"]
		},
		{
			name: "Virginia",
			capital: "Richmond",
			cities: ["Richmond", "Kilmarnock", "Mount Jackson", "Martinsville"]
		},
		{
			name: "Washington",
			capital: "Olympia",
			cities: ["Olympia", "Navy Yard City", "Latah", "Mercer Island"]
		},
		{
			name: "West Virginia",
			capital: "Charleston",
			cities: ["Charleston", "Alum Creek", "Corporation of Ranson", "Star City"]
		},
		{
			name: "Wisconsin",
			capital: "Madison",
			cities: ["Madison", "Conrath village", "Mount Sterling village", "Oneida"]
		},
		{
			name: "Wyoming",
			capital: "Cheyenne",
			cities: ["Cheyenne", "Powell", "Garland", "Jackson"]
		}
	],

	buttons: [{ id: "js-b0", correct: false, city: undefined}, { id: "js-b1", correct: false, city: undefined }, { id: "js-b2", correct: false, city: undefined }, { id: "js-b3", correct: false, city: undefined }],

	currentQuestion: 0,
	score: 0
};
