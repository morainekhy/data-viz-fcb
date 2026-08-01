//console.log("Hello World!");

const dateElement = document.getElementById('date');

console.log(dateElement);

let currentDate = new Date();
console.log(currentDate);

//dateElement.innerHTML = currentDate;

let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

dateElement.innerHTML = currentDate.toLocaleDateString('en-uS', dateOptions);

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'e7aea054c5msh8631c9deb28e4dap196317jsnd7dcc6953db6',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: 23424934})
};

fetch(url, options).then(res => res.json()).then(data => {
	console.log(data.trends);

	let graphData = data.trends.slice(0,10);

	let topics = graphData.map(data => data.name);
	console.log(topics);

	let volumes = [1000133, 9109207, 7292799, 3836522, 836866, 8237286, 2923976, 442672, 2937263, 508694];
	console.log(volumes);

	const myChart = document.getElementById('myChart');

	let barchart = new Chart(myChart, {
		type: 'bar',
		data: {
			labels: topics,
			datasets: [{
				label: '# of xeets',
				data: volumes,
				borderWidth: 2,
				backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 205, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(201, 203, 207, 0.2)'
				],
				borderColor: [
				'rgb(255, 99, 132)',
				'rgb(255, 159, 64)',
				'rgb(255, 205, 86)',
				'rgb(75, 192, 192)',
				'rgb(54, 162, 235)',
				'rgb(153, 102, 255)',
				'rgb(201, 203, 207)'
				],
				hoverBackgroundColor: [
				'rgb(255, 99, 132)',
				'rgb(255, 159, 64)',
				'rgb(255, 205, 86)',
				'rgb(75, 192, 192)',
				'rgb(54, 162, 235)',
				'rgb(153, 102, 255)',
				'rgb(201, 203, 207)'
				]
			}]
		},
		options: {
			indexAxis: 'y',
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});

})

/*let myPost = {
	name: "Lee Sung Kyung",
	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
	volume: 31799,
	followers: 3895734
};

console.log(myPost);

console.log(myPost.name);
console.log(myPost.queryUrl);
console.log(myPost.volume);
console.log(myPost.followers);*/